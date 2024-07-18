import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';


const CenteredSearchBar = () => {
    return (
        <div className='flex items-center'>
            <div className="flex shadow overflow-hidden justify-between items-center w-500 border border-white border-gray-800" style={{ borderRadius: 500, width: 750 }} >
                <input
                    type="text"
                    className="outline-none border-gray-900 rounded w-full py-2 px-3 bg-black text-white"
                    placeholder="Search"
                    style={{ height: '40px' }}
                />
                <button
                    type="button"
                    className="bg-gray-900 text-white outline-none px-3 py-2"
                    style={{ marginLeft: '-1px' }} // Adjust margin for alignment
                >
                    <SearchIcon style={{ color: 'lightgrey' }} />
                </button>
            </div>
            <div className='ml-4 '>
            <button
                type="button"
                className="bg-gray-900 text-white outline-none rounded-full ml-2 p-2"
                style={{ width: '40px', height: '40px' }} // Adjust size of circular button
            >
                <KeyboardVoiceIcon />
            </button>
            </div>
        </div>
    );
};

export default CenteredSearchBar;
