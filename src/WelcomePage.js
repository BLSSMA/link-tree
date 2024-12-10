import React from "react";
import "./WelcomePage.css";


const WelcomePage = () => {

    return(
        <div className="WelcomePage d-flex">
            <div className="WelcomeHeader">
                <h1 className="typed-out">✨WELCOME✨</h1>
            </div>
            <div className="StoreButton">
                <a href="https://www.little-haunted-designs.com/" className="StoreLink" target="_blank" rel="noreferrer">STORE</a>
            </div>
            <div className="EtsyButton">
                <a href="https://littlehaunteddesigns.etsy.com" className="EtsyLink" target="_blank" rel="noreferrer">ETSY</a>
            </div>
            <div className="PortfolioButton">
                <a href="https://blossomarmstrong.com/" className="PortfolioLink" target="_blank" rel="noreferrer">PORTFOLIO</a>
            </div>
        </div>
    )
}

export default WelcomePage;