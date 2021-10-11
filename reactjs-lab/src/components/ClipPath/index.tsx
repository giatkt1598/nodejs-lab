import React from 'react'
import "./index.scss";

export default function ClipPath() {
    return (
        <div className='container'>
            <div className='box inset'></div>
            <div className='box polygon'></div>
            <div className='pseudo-element'>
                <div className='real-element'></div>
            </div>

            <div className='shadow-polygon'>
                <div></div>
            </div>
            <br />
        </div>
    )
}
