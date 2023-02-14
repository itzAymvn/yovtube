import React from "react";
import VideoCard from "./VideoCard";

const Content = ({ videos }) => {
    return (
        <div className="main w-5/6">
            <div className="tags flex flex-row items-center w-full">
                <div className="px-3 py-2 text-white bg-gray-800 m-2 rounded whitespace-nowrap hover:bg-gray-500 transition duration-200">
                    All
                </div>
                <div className="px-3 py-2 text-white bg-gray-800 m-2 rounded whitespace-nowrap hover:bg-gray-500 transition duration-200">
                    JavaScript
                </div>
                <div className="px-3 py-2 text-white bg-gray-800 m-2 rounded whitespace-nowrap hover:bg-gray-500 transition duration-200">
                    Computer Program
                </div>
                <div className="px-3 py-2 text-white bg-gray-800 m-2 rounded whitespace-nowrap hover:bg-gray-500 transition duration-200">
                    Hypixel
                </div>
                <div className="px-3 py-2 text-white bg-gray-800 m-2 rounded whitespace-nowrap hover:bg-gray-500 transition duration-200">
                    Ai
                </div>
                <div className="px-3 py-2 text-white bg-gray-800 m-2 rounded whitespace-nowrap hover:bg-gray-500 transition duration-200">
                    Mixes
                </div>
                <div className="px-3 py-2 text-white bg-gray-800 m-2 rounded whitespace-nowrap hover:bg-gray-500 transition duration-200">
                    Valorant
                </div>
                <div className="px-3 py-2 text-white bg-gray-800 m-2 rounded whitespace-nowrap hover:bg-gray-500 transition duration-200">
                    Music
                </div>
                <div className="px-3 py-2 text-white bg-gray-800 m-2 rounded whitespace-nowrap hover:bg-gray-500 transition duration-200">
                    Live
                </div>
                <div className="px-3 py-2 text-white bg-gray-800 m-2 rounded whitespace-nowrap hover:bg-gray-500 transition duration-200">
                    Gadgets
                </div>
                <div className="px-3 py-2 text-white bg-gray-800 m-2 rounded whitespace-nowrap hover:bg-gray-500 transition duration-200">
                    Gaming Computer
                </div>
                <div className="px-3 py-2 text-white bg-gray-800 m-2 rounded whitespace-nowrap hover:bg-gray-500 transition duration-200">
                    ReactJS
                </div>
                <div className="px-3 py-2 text-white bg-gray-800 m-2 rounded whitespace-nowrap hover:bg-gray-500 transition duration-200">
                    NodeJs
                </div>
            </div>

            <div
                id="videos"
                className="videos h-screen overflow-y-scroll flex flex-row flex-wrap justify-evenly items-center p-2 m-1">
                {videos.map((video) => (
                    <VideoCard video={video} />
                ))}
            </div>
        </div>
    );
};

export default Content;
