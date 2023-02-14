import React from "react";
// Icons

const Sidebar = () => {
    return (
        <aside className="sidebar w-1/6 p-2">
            <div className="p-3 m-2 text-white bg-gray-800 rounded-lg hover:bg-gray-800 rounded-lg flex flex-row items-center">
                <i className="uil uil-estate text-2xl mr-3"></i>
                <span>Home</span>
            </div>
            <div className="p-3 m-2 text-white hover:bg-gray-800 rounded-lg flex flex-row items-center">
                <i className="uil uil-fire text-2xl mr-3"></i>
                <span>Shorts</span>
            </div>
            <div className="p-3 m-2 text-white hover:bg-gray-800 rounded-lg flex flex-row items-center">
                <i className="uil uil-play text-2xl mr-3"></i>
                <span>Subscriptions</span>
            </div>

            <hr className="border-gray-700 m-auto" />

            <div className="p-3 m-2 text-white hover:bg-gray-800 rounded-lg flex flex-row items-center">
                <i className="uil uil-folder text-2xl mr-3"></i>
                <span>Library</span>
            </div>
            <div className="p-3 m-2 text-white hover:bg-gray-800 rounded-lg flex flex-row items-center">
                <i className="uil uil-history text-2xl mr-3"></i>
                <span>History</span>
            </div>
            <div className="p-3 m-2 text-white hover:bg-gray-800 rounded-lg flex flex-row items-center">
                <i className="uil uil-clock text-2xl mr-3"></i>
                <span>Your videos</span>
            </div>
            <div className="p-3 m-2 text-white hover:bg-gray-800 rounded-lg flex flex-row items-center">
                <i className="uil uil-thumbs-up text-2xl mr-3"></i>
                <span>Watch later</span>
            </div>
            <div className="p-3 m-2 text-white hover:bg-gray-800 rounded-lg flex flex-row items-center">
                <i className="uil uil-thumbs-up text-2xl mr-3"></i>
                <span>Liked videos</span>
            </div>
        </aside>
    );
};

export default Sidebar;
