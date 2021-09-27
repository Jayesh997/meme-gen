import React from 'react'

import "./Navbar.css"
export const Navbar = () => {
    const logoURL="https://i.pinimg.com/originals/5c/99/6e/5c996e6663a3c2ef1b92ad9ef13ffef7.png"
    return (
    <div className="bar">
        <div className="logo-div" >
            <img src={logoURL}></img>
           <div>
            <h1>मीमGEN</h1>
            {/* <p className="font">create memes on fly</p> */}
           </div>
        </div>
        {/* <div className="options-div">
            
                <h2 className="font">About ME</h2>
            
        </div> */}
        </div>
    )
}
