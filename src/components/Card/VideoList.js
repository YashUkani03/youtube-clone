import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from './VideoCard';
import '../../pages/Home.css';

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const apiKey = 'AIzaSyCJDvJ7OAzEKCpeWfY1T_w9DjBz0gymzIo'; 
                const channelId = 'UC0IWRLai-BAwci_e9MylNGw'; 
                
                // Step 1: Fetch video IDs
                const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=100`;
                const searchResponse = await axios.get(searchUrl);
                const videoIds = searchResponse.data.items.map(item => item.id.videoId).filter(id => id);

                if (videoIds.length === 0) return;

                // Step 2: Fetch video details including view counts
                const videoUrl = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet,statistics&id=${videoIds.join(',')}`;
                const videoResponse = await axios.get(videoUrl);

                const fetchedVideos = videoResponse.data.items.map(item => ({
                    thumbnail: item.snippet.thumbnails.medium.url,
                    title: item.snippet.title,
                    channel: item.snippet.channelTitle,
                    views: item.statistics.viewCount,
                    date: item.snippet.publishedAt,
                    videoId: item.id
                }));

                setVideos(fetchedVideos);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (error) return <div className="text-center p-4">Error: {error}</div>;

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {videos.length > 0 ? (
                    videos.map((video, index) => (
                        <VideoCard
                            key={index}
                            thumbnail={video.thumbnail}
                            title={video.title}
                            channel={video.channel}
                            views={video.views}
                            date={video.date}
                            videoId={video.videoId}
                        />
                    ))
                ) : (
                    <div className="text-center col-span-full">No videos available.</div>
                )}
            </div>
        </div>
    );
};

export default VideoList;
