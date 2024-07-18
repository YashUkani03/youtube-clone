import React from 'react';
import Sidebar from '../components/Sidebar';
import './Home.css';
import VideoList from '../components/Card/VideoList';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const categories = [
    'All', 'JavaScript', 'Music', 'Live', 'Mixes', 'AI', 'Jukebox', 'Disha Vakani', 'T-Series', 'Garba',
    'Options strategies', 'Ghazal', 'Folk Music', 'Bhajan music', 'Electronic Music', 'T-Series', 'Garba',
    'Options strategies', 'Ghazal', 'AI', 'Jukebox', 'Disha Vakani', 'T-Series', 'Garba'
];

const Home = () => {
    return (
        <div className="flex">
            <Sidebar className='fixed' />
            <div className="flex flex-col w-full pt-16 pl-16">
                <div className="fixed top-15 left-24 right-0 overflow-x-hidden overflow-x-scroll no-scrollbar bg-black whitespace-nowrap p-2">
                    <div className="flex space-x-2">
                        <button className='pb-7 pr-4 '>
                            <ArrowBackIosNewIcon style={{ background: 'black', color: 'gray', position: 'fixed', blockSize: 28, marginLeft: -10 }} />
                        </button>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-3 py-1 text-sm font-medium rounded-lg 
                                ${category === 'All' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
                            >
                                {category}
                            </button>
                        ))}
                        <button>
                            <ArrowBackIosNewIcon style={{backgroundColor: 'white',}}/>
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap pt-8">
                    <div className="flex overflow-y-scroll no-scrollbar bg-black whitespace-nowrap pl-5">
                        <VideoList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
