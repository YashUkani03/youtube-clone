import React from 'react'
import YoutubeLogo from '../images/logo5.png';

function Logo() {
    return (
        <div className='flex '>
            <img src={YoutubeLogo} alt='youtube' style={{ width: 100 , height: 23}}/>
        </div>
    )
}

export default Logo
