"use client";

import Image from "next/image";
import MenuToggle from "../app/components/Hamburger";
import RingBG from "../app/components/RingBG";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
    {
      id: 7,
      title: "Amet Consectetur",
      channel: "Magna Aliqua",
      views: "700K views",
      thumbnail: "https://placehold.co/320x180?text=Video+6",
    },
    {
      id: 8,
      title: "Amet Consectetur",
      channel: "Magna Aliqua",
      views: "700K views",
      thumbnail: "https://placehold.co/320x180?text=Video+6",
    },
    {
      id: 9,
      title: "Amet Consectetur",
      channel: "Magna Aliqua",
      views: "700K views",
      thumbnail: "https://placehold.co/320x180?text=Video+6",
    },
    {
      id: 10,
      title: "Amet Consectetur",
      channel: "Magna Aliqua",
      views: "700K views",
      thumbnail: "https://placehold.co/320x180?text=Video+6",
    },
    {
      id: 11,
      title: "Amet Consectetur",
      channel: "Magna Aliqua",
      views: "700K views",
      thumbnail: "https://placehold.co/320x180?text=Video+6",
    },
    {
      id: 12,
      title: "Amet Consectetur",
      channel: "Magna Aliqua",
      views: "700K views",
      thumbnail: "https://placehold.co/320x180?text=Video+6",
    },
   

  ];

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.channel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <div className="container flex flex-row w-[100vw] h-[100vh] min-h-screen  z-2">
      <RingBG />
      <div className="flex flex-col h-full">
        <div className="w-[12vw] h-16 flex items-center justify-center z-20">
          <MenuToggle isActive={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div 
          className={`w-[12vw] h-full bg-[#130d1c] rounded-2xl transition-all duration-300 shadow-lg fixed top-16 left-0 ${
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
                    ? 'text-[#130d1c] bg-[#9546fc]'
                    : 'text-gray-300 hover:bg-[#2a0d4f] hover:text-white'
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col flex-1 h-full ">
        <div className="h-[5vw] w-full flex justify-center items-center">
          <div className="flex items-center z-2">
            <div className="w-[4vw] h-[4vw] float-left mr-24">
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

        <main className="flex-1 overflow-y-auto p-6 z-2">
          {activeTab === "Home" ? (
            <div className="grid grid-cols-3 gap-4 z-2">
              {filteredVideos.length > 0 ? (
                filteredVideos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-[#130d1c] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 z-2 vid"
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
                ))
              ) : (
                <div className="col-span-3 text-center text-gray-400">
                  No videos found matching your search.
                </div>
              )}
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
        className={`w-[12vw] h-full bg-[#130d1c] transition-all duration-300 shadow-lg absolute top-0 right-0 ${
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