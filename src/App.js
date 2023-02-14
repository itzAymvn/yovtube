import React, { useEffect, useState } from "react";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
// Environment variables
const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
    // States
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    // Function to transform data from API to our desired format
    const transformVideoData = (data) => {
        if (!data.items) {
            throw new Error(data.error.message);
        }
        return data.items.map((item) => {
            return {
                id: item.id,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.high.url,
                date: item.snippet.publishedAt,
                views: item.statistics.viewCount,
                likes: item.statistics.likeCount,
                channel: item.snippet.channelTitle,
            };
        });
    };

    // Function to get country code of user
    async function getCountryCode() {
        try {
            const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
            const data = await response.json();
            return data.country_code;
        } catch (error) {
            throw new Error("Error while fetching country code: ", error);
        }
    }

    // Fetching Trending Videos on page load
    useEffect(() => {
        async function getTrendingVideos() {
            const countryCode = (await getCountryCode()) || "US";
            const apibase = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=100&regionCode=${countryCode}&key=${API_KEY}`;
            const response = await fetch(apibase);
            const data = await response.json();
            setResults(transformVideoData(data));
        }
        getTrendingVideos();
    }, []);

    // Fetching Videos on search query
    useEffect(() => {
        async function searchVideos(query) {
            // Getting IDS of Videos
            const apibase = `https://www.googleapis.com/youtube/v3/search?part=id&maxResults=100&q=${query}&type=video&key=${API_KEY}`;
            const response = await fetch(apibase);
            const data = await response.json();
            const videoIds = data.items
                .map((item) => item.id.videoId)
                .join(",");

            // Getting Details of Videos using IDS
            const videoDetailsURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&maxResults=100&type=video&key=${API_KEY}`;
            const videoDetailsResponse = await fetch(videoDetailsURL);
            const videoDetails = await videoDetailsResponse.json();
            setResults(transformVideoData(videoDetails));
        }

        if (query) {
            searchVideos(query);
        }
    }, [query]);

    return (
        <>
            <Navbar setQuery={setQuery} />
            <main className="flex flex-row">
                <Sidebar />
                <Content videos={results} />
            </main>
        </>
    );
};

export default App;
