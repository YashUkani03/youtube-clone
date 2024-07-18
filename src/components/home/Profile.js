import React from 'react'
import ProfileIcon from '../../images/profile4.png'

function Profile() {
    return (
        <>
            <img id="img" draggable="false" className="style-scope yt-img-shadow" alt='Profile'
                height="50" width="50" src={ProfileIcon}>

            </img>
        </>
    )
}

export default Profile
