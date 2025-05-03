import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row bg-[#110A10] w-[100vw] h-[100vh]">
      <div className="w-[12vw] h-full px-8">
        <button className="ml-8 mt-8">X</button>
        <ul className="flex flex-col justify-center items-start pl-6 mt-16">
          <li className="bold font-family py-6 my-2 px-2 text-xl selected w-full rounded-2xl text-center cursor-pointer">Home</li>
          <li className="bold font-family py-6 my-2 px-2 text-xl w-full rounded-2xl text-center hover:bg-[#2a0d4f] duration-400 cursor-pointer">My Videos</li>
          <li className="bold font-family py-6 my-2 px-2 text-xl w-full rounded-2xl text-center hover:bg-[#2a0d4f] duration-400 cursor-pointer">My Favs</li>
          <li className="bold font-family py-6 my-2 px-2 text-xl w-full rounded-2xl text-center hover:bg-[#2a0d4f] duration-400 cursor-pointer">Settings</li>
          <li className="bold font-family py-6 my-2 px-2 text-xl w-full rounded-2xl text-center hover:bg-[#2a0d4f] duration-400 cursor-pointer">Profile</li>
        </ul>
      </div>

      <div className="flex flex-col flex-1">
        <div className="h-[5vw] w-full flex justify-center items-center">
          <div className="flex items-center">
            <div className="w-[4vw] h-[4vw]">
              <Image
                src="/logo.png"
                alt="HackTV logo"
                width={100}
                height={100}
              />
            </div>
            <div className="relative ml-4 w-[40vw]">
              <input
                type="text"
                placeholder="Search videos..."
                className="w-full py-3 pl-12 pr-4 rounded-full bg-[#1a1a1a] text-white text-lg border-2 border-[#2a0d4f] focus:border-[#6b21a8] focus:ring-2 focus:ring-[#6b21a8] focus:outline-none transition-all duration-300"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <main></main>
      </div>
    </div>
  );
}