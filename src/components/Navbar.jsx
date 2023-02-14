import React from "react";
// Icons
import {
    AiOutlineSearch,
    AiFillVideoCamera,
    AiOutlineMenu,
    AiFillAppstore,
    AiFillBell,
    AiFillYoutube,
} from "react-icons/ai";

const Navbar = ({ setQuery }) => {
    return (
        <nav className="flex justify-between items-center p-1 bg-black text-white">
            <div className="flex items-center">
                <AiOutlineMenu className="text-2xl ml-2" />
                <AiFillYoutube className="text-5xl ml-2 text-red-500" />
                <h1 className="text-2xl font-bold ml-2">
                    <a href="index.html">Yovtube</a>
                </h1>
            </div>

            <div className="flex items-center">
                <AiOutlineSearch />
                <input
                    type="text"
                    id="search-input"
                    className="bg-gray-800 text-white rounded-full mx-2 p-2 w-96"
                    placeholder="Search"
                    onKeyUp={(e) => {
                        if (e.key === "Enter") {
                            if (!e.target.value) return;
                            setQuery(
                                e.target.value.replace(/(<([^>]+)>)/gi, "")
                            );
                        }
                    }}
                />
                <AiFillVideoCamera />
            </div>

            <div className="flex items-center">
                <AiFillVideoCamera className="text-1xl ml-2" />
                <AiFillAppstore className="text-1xl ml-2" />
                <AiFillBell className="text-1xl ml-2" />
                <img
                    src="https://yt3.ggpht.com/yti/AHXOFjWWqPtt2w57dH7AYnDyqcGbjc5UCqIpxBOovjD_Pg=s88-c-k-c0x00ffffff-no-rj-mo"
                    alt="profile"
                    className="rounded-full h-8 w-10 ml-2 m-3"
                />
            </div>
        </nav>
    );
};

export default Navbar;
