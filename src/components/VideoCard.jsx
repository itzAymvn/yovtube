import React from "react";
// Function to format number
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "m";
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + "k";
    }
    return num;
}

// Function to get date difference
function getDateDiff(date1, date2) {
    const diff = Math.abs(date1 - date2);
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;

    if (diff < minute) {
        return "just now";
    } else if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (diff < day) {
        const hours = Math.floor(diff / hour);
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (diff < month) {
        const days = Math.floor(diff / day);
        return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (diff < year) {
        const months = Math.floor(diff / month);
        return `${months} ${months === 1 ? "month" : "months"} ago`;
    } else {
        const years = Math.floor(diff / year);
        return `${years} ${years === 1 ? "year" : "years"} ago`;
    }
}
const VideoCard = ({ video }) => {
    return (
        <div className="video-card w-80 h-auto break-all rounded-lg shadow-lg">
            <img
                className="w-full h-52 object-cover rounded-lg"
                src={video.thumbnail}
                alt="Video Thumbnail"
            />

            <div className="p-2 flex flex-col">
                <h2 className="text-lg font-bold mb-1 text-white">
                    {video.title}
                </h2>
                <h3 className="text-sm font-bold text-gray-400">
                    {video.channel}
                </h3>
                <div className="flex items-center text-gray-400 text-sm">
                    <i className="uil uil-eye mr-1"></i>
                    <span>{formatNumber(video.views)} views</span>
                    <span className="mx-2">&bull;</span>
                    <i className="uil uil-thumbs-up mr-1"></i>
                    <span>{formatNumber(video.likes)} likes</span>
                    <span className="mx-2">&bull;</span>
                    <span>{getDateDiff(new Date(), new Date(video.date))}</span>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
