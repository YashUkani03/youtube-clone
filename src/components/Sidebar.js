import React from 'react';
import Shorts from './home/shorts';
import HomeIcon from './home/HomeIcon';
import SubscriptionIcon from './home/SubscriptionIcon';
import You from './home/You';

const Sidebar = () => {
    return (
        <div className=" fixed h-screen bg-black text-white ml-1 py-16">

            <ul className="py-2 w-15 ">
                <li className=" items-center py-4 px-4">
                    <button >
                        <HomeIcon />
                        <span className='text-xs'>Home</span>
                    </button>
                </li>
                <li className="flex items-center py-4 px-4">
                    <button>
                        <Shorts />
                        <span className='text-xs'>Shorts</span>
                    </button>
                </li>
                <li className="flex items-center  py-4">
                    <button>
                        <SubscriptionIcon />
                        <span className='text-xs ' style={{marginLeft: 1}}>Subscriptions</span>
                    </button>
                </li>
                <li className="flex items-center py-4 px-5">
                    <button>
                        <You />
                        <span className='text-xs'>You</span>
                    </button>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;
