"use client"

import Image from "next/image";
import MenuToggle from "../app/components/Hamburger";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Sample video data with Lorem Ipsum and fake images
  const videos = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor Sit",
      channel: "Amet Consectetur",
      views: "1.2M views",
      thumbnail: "https://placehold.co/320x180?text=Video+1",
    },
    {
      id: 2,
      title: "Sit Amet Consectetur",
      channel: "Adipiscing Elit",
      views: "850K views",
      thumbnail: "https://placehold.co/320x180?text=Video+2",
    },
    {
      id: 3,
      title: "Dolor Sit Amet",
      channel: "Sed Do Eiusmod",
      views: "600K views",
      thumbnail: "https://placehold.co/320x180?text=Video+3",
    },
    {
      id: 4,
      title: "Consectetur Adipiscing",
      channel: "Tempor Incididunt",
      views: "950K views",
      thumbnail: "https://placehold.co/320x180?text=Video+4",
    },
    {
      id: 5,
      title: "Ipsum Dolor Sit",
      channel: "Labore et Dolore",
      views: "1.5M views",
      thumbnail: "https://placehold.co/320x180?text=Video+5",
    },
    {
      id: 6,
      title: "Amet Consectetur",
      channel: "Magna Aliqua",
      views: "700K views",
      thumbnail: "https://placehold.co/320x180?text=Video+6",
    },
  ];

  return (
    <div className="container flex flex-row w-[100vw] h-[100vh] min-h-screen bg-[#0f0f0f]">
      <div className="flex flex-col h-full">
        <div className="w-[12vw] h-16 flex items-center justify-center border-b border-[#2a0d4f] z-20">
          <MenuToggle isActive={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div 
          className={`w-[12vw] h-full bg-[#1a1a1a] transition-all duration-300 shadow-lg absolute top-16 left-0 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ul className="flex flex-col justify-start items-start pl-4 pr-2 pt-8 h-full">
            {["Home", "My Videos", "My Favs", "Settings", "Profile"].map((tab) => (
              <li
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`w-full font-bold text-lg py-3 px-4 my-1 rounded-xl cursor-pointer transition-colors duration-200 ${
                  activeTab === tab
                    ? 'text-white bg-[#2a0d4f]'
                    : 'text-gray-300 hover:bg-[#2a0d4f] hover:text-white'
                }`}
              >
                {tab}
              </li>
            ))}
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

        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === "Home" ? (
            <div className="grid grid-cols-3 gap-4">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="relative w-full h-40">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white text-base font-semibold line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{video.channel}</p>
                    <p className="text-gray-500 text-sm mt-1">{video.views}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-white">
              <h1 className="text-2xl font-bold">{activeTab} Content</h1>
              <p>This is the {activeTab} section.</p>
            </div>
          )}
        </main>
      </div>

      <div 
        className={`w-[12vw] h-full bg-[#1a1a1a] transition-all duration-300 shadow-lg absolute top-0 right-0 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col justify-start items-start pl-4 pr-2 pt-16 h-full">
          <li className="w-full font-bold text-lg py-3 px-4 my-1 rounded-xl text-gray-300 hover:bg-[#2a0d4f] hover:text-white cursor-pointer transition-colors duration-200">
            Notifications
          </li>
          <li className="w-full font-bold text-lg py-3 px-4 my-1 rounded-xl text-gray-300 hover:bg-[#2a0d4f] hover:text-white cursor-pointer transition-colors duration-200">
            Watch Later
          </li>
          <li className="w-full font-bold text-lg py-3 px-4 my-1 rounded-xl text-gray-300 hover:bg-[#2a0d4f] hover:text-white cursor-pointer transition-colors duration-200">
            Playlists
          </li>
          <li className="w-full font-bold text-lg py-3 px-4 my-1 rounded-xl text-gray-300 hover:bg-[#2a0d4f] hover:text-white cursor-pointer transition-colors duration-200">
            History
          </li>
        </ul>
      </div>
    </div>
  );
}