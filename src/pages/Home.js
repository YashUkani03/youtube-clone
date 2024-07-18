import React from 'react';
import Sidebar from '../components/Sidebar';
import './Home.css';
import VideoList from '../components/Card/VideoList';

const categories = [
    'All', 'JavaScript', 'Music', 'Live', 'Mixes', 'AI', 'Jukebox', 'Disha Vakani', 'T-Series', 'Garba',
    'Options strategies', 'Ghazal', 'Folk Music', 'Bhajan music', 'Electronic Music', 'T-Series', 'Garba',
    'Options strategies', 'Ghazal'
];

const Home = () => {
    return (
        <div className="flex">
            <Sidebar className='fixed' />
            <div className="flex flex-col w-full py-20">
                <div className="flex overflow-x-scroll overflow-x-hidden no-scrollbar bg-black whitespace-nowrap w-full">
                    <div className='px-12'>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`m-1 px-3 py-1 text-sm font-medium text-white rounded-lg 
                                ${category === 'All' ? 'bg-white text-gray-900' : 'bg-gray-800'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex overflow-y-scroll no-scrollbar bg-black whitespace-nowrap pl-5">
                        <VideoList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
