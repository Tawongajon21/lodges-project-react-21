import React from 'react'

const Banner = ({children,title,subtitle}) => {
    return (
        <div className="banner">
            <header className="header-banner">
                <h1>{title}</h1>
            </header>
            <div className="underline">
                <div className="underline-line"></div>
            </div>
            <div className="text-price">
                <p className="text-banner-one">
                  {subtitle}
                </p>
                <div className="p-btn-rooms">
                {children}
                   
                </div>
            </div>
        </div>
    )
}

export default Banner

