import { useEffect, useRef } from "react";

const HEX_RADIUS = 30;
const GLOW_RADIUS = 150;

function drawHexRing(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, glow: boolean) {
  const sides = 6;
  ctx.beginPath();
  for (let i = 0; i < sides; i++) {
    const angle = (Math.PI / 3) * i;
    const px = x + size * Math.cos(angle);
    const py = y + size * Math.sin(angle);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();

  ctx.lineWidth = 2;
  ctx.strokeStyle = glow ? "#9546fc" : "#312c3d";
  ctx.stroke();
}

const RingBG = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrame: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const hexHeight = Math.sqrt(3) * HEX_RADIUS;
      const hexWidth = 2 * HEX_RADIUS;
      const vertDist = hexHeight;
      const horizDist = 0.75 * hexWidth;

      for (let y = 0; y < canvas.height + hexHeight; y += vertDist) {
        for (let x = 0; x < canvas.width + hexWidth; x += horizDist) {
          const offsetY = (x / horizDist) % 2 === 0 ? 0 : hexHeight / 2;
          const dx = x - mousePos.current.x;
          const dy = y + offsetY - mousePos.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const isGlowing = distance < GLOW_RADIUS;

          drawHexRing(ctx, x, y + offsetY, HEX_RADIUS, isGlowing);
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    canvas.addEventListener("mousemove", (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    });

    draw();
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0" />;
};

export default RingBG;
