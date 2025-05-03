"use client"

import Image from "next/image";
import MenuToggle from "../app/components/Hamburger";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container flex flex-row w-[100vw] h-[100vh] min-h-screen">
      <div className="flex flex-col h-full">
        <div className="w-[12vw] h-16 flex items-center justify-center bg-[#1a1a1a] border-b border-[#2a0d4f] z-20">
          <MenuToggle isActive={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div 
          className={`w-[12vw] h-full bg-[#1a1a1a] transition-all duration-300 shadow-lg absolute top-16 left-0 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ul className="flex flex-col justify-start items-start pl-4 pr-2 pt-8 h-full">
            <li className="w-full font-bold text-lg py-3 px-4 my-1 rounded-xl text-white bg-[#2a0d4f] cursor-pointer transition-colors duration-200">
              Home
            </li>
            <li className="w-full font-bold text-lg py-3 px-4 my-1 rounded-xl text-gray-300 hover:bg-[#2a0d4f] hover:text-white cursor-pointer transition-colors duration-200">
              My Videos
            </li>
            <li className="w-full font-bold text-lg py-3 px-4 my-1 rounded-xl text-gray-300 hover:bg-[#2a0d4f] hover:text-white cursor-pointer transition-colors duration-200">
              My Favs
            </li>
            <li className="w-full font-bold text-lg py-3 px-4 my-1 rounded-xl text-gray-300 hover:bg-[#2a0d4f] hover:text-white cursor-pointer transition-colors duration-200">
              Settings
            </li>
            <li className="w-full font-bold text-lg py-3 px-4 my-1 rounded-xl text-gray-300 hover:bg-[#2a0d4f] hover:text-white cursor-pointer transition-colors duration-200">
              Profile
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col flex-1 h-full">
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

        <main className="flex-1"></main>
      </div>
    </div>
  );
}