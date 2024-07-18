import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const VideoCard = ({ thumbnail, title, channel, views, date }) => {
    return (
        <div className="max-w-md h-96 rounded overflow-hidden shadow-lg bg-black text-white  overflow-y-hidden overflow-x-hidden">
            <img className="w-full rounded-lg" src={thumbnail} alt={title} />
            <div className="px-7 py-2">
                <div className="font-bold text-lg mb-2">{title}<span><MoreVertIcon /></span></div>
                <p className="text-gray-400 text-sm">{channel}</p>
                <p className="text-gray-400 text-sm">{views} views • {date}</p>
            </div>
        </div>
    );
};

export default VideoCard;
