import Image from "next/image";

export default function Home() {
  return (

    <div className="flex flex-row bg-[#110A10] w-[100vw] h-[100vh]">
      <div className="w-[12vw] h-full px-8">
      {/* <div className="w-[12vw] h-full border-2 border-red-600 px-8"> */}
{/* Hamburger menu start -----------------------------------------------------*/}
      <button className="ml-8 mt-8">X</button>
        <ul className="flex flex-col justify-center items-start pl-6 mt-16">
          <li className="bold font-family py-6 my-2 px-2 text-xl selected w-full rounded-2xl text-center cursor-pointer">Home</li>
          <li className="bold font-family py-6 my-2 px-2 text-xl w-full rounded-2xl text-center hover:bg-[#2a0d4f] duration-400 cursor-pointer">My Videos</li>
          <li className="bold font-family py-6 my-2 px-2 text-xl w-full rounded-2xl text-center hover:bg-[#2a0d4f] duration-400 cursor-pointer">My Favs</li>
          <li className="bold font-family py-6 my-2 px-2 text-xl w-full rounded-2xl text-center hover:bg-[#2a0d4f] duration-400 cursor-pointer">Settings</li>
          <li className="bold font-family py-6 my-2 px-2 text-xl w-full rounded-2xl text-center hover:bg-[#2a0d4f] duration-400 cursor-pointer">Profile</li>
        </ul>
      </div>

    {/* Searchbar */}
      <div className="flex flex-col">
        <div className="h-[5vw] w-[88vw] flex items-center">

        {/* <div className="h-[5vw] w-[88vw] border-2 border-red-600 flex items-center"> */}
          <div className="w-[4vw] h-[4vw] ml-8">
          <Image
          src="/logo.png"
          alt="HackTV logo"
          width={100}
          height={100}
         />

          </div>
        
        </div>

    {/* Main content */}
      <main>

      </main>

      </div>
      
    </div>
  );
}
