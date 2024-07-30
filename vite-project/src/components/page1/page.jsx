import React from 'react';
import video from '../../image/video.mp4';
import './page1.css'

function Page1() {
    return(
        <>
            <video autoPlay loop muted src={video} alt="video"></video>
            <div className="main">
                <h3>PERFORMANCE AMPLIFIED</h3>
                <h1>THE NEW McLAREN <br /> ARTURA SPIDER</h1>
                <button>Discover</button>
            </div>
        </>
    );
}

export default Page1;