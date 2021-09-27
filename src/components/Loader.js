import React from 'react'

import "./Loader.css"
export const Loader = () => {
    const loaderImageURL= "https://i.redd.it/89pkg71dyvo41.png"
    return (
        <div className="loader-container"> 
            <h2 className='title'>The Secret of Making Dank memes about your friends...</h2>
            <img src={loaderImageURL} className="loader-image"></img>
            <h3>Here's How...</h3>
            
                <h4>1. Enter your friend's name and select gender</h4>
                <h4>2. Click on submit and generate random memes</h4>
                <h4>3. Take a Screenshot and Share with your friends!!</h4>
            
        </div>
    )
}