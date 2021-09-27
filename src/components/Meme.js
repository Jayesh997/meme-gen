import React from 'react'
import "./Meme.css"
export const Meme = ({memeImage, name,caption}) => {
 
    return (
        <div className="meme-container">
        <p className="meme-caption">{name} {caption}</p>
         <img src={memeImage} className="meme-image"></img>
        </div>
    )
}

