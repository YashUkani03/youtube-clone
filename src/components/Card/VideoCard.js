import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { parseISO, formatDistanceToNow } from 'date-fns'

const VideoCard = ({ thumbnail, title, channel, views, date, videoId }) => {
    const numberFormatter = new Intl.NumberFormat('en-US', {
        notation: 'compact',
        compactDisplay: 'short'
    });

    const formattedDate = formatDistanceToNow(parseISO(date), { addSuffix: true });

    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    return (
        <div className="bg-black text-white rounded-lg overflow-hidden shadow-lg flex flex-col">
            <a href={videoUrl} target='_blank' rel="noopener noreferrer" className="block">
                <img className="w-full h-56 object-cover rounded-t-lg" src={thumbnail} alt={title} />
            </a>
            <div className="pt-2 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-md text-wrap">{title}</div>
                    <div className='flex items-end'><MoreVertIcon /></div>
                </div>
                <p className="text-gray-400 text-md">{channel}</p>
                <p className="text-gray-400 text-sm mt-auto"> {numberFormatter.format(views)} views &nbsp; • &nbsp;   {formattedDate}</p>
            </div>
        </div>
    );
};

export default VideoCard;
