import React from "react";
import "./WelcomePage.css";
import ghost from "./images/ghost.png";


const WelcomePage = () => {

    return(
        <div className="WelcomePage d-flex">
            <div className="WelcomeHeader">
                <h1 className="typed-out">✨WELCOME✨</h1>
            </div>
            <div className="StoreButton">
                <a href="https://www.little-haunted-designs.com/" className="StoreLink" title="https://www.little-haunted-designs.com/"target="_blank" rel="noreferrer">STORE</a>
            </div>
            <div className="EtsyButton">
                <a href="https://littlehaunteddesigns.etsy.com" className="EtsyLink" title="https://littlehaunteddesigns.etsy.com" target="_blank" rel="noreferrer">ETSY</a>
            </div>
            <div className="InstagramButton">
                <a href="https://www.instagram.com/haunted_design/" className="PortfolioLink" title="https://www.instagram.com/haunted_design/" target="_blank" rel="noreferrer">INSTAGRAM</a>
            </div>
            <div className="ghostImage">
                <img src={ghost} alt="ghost" className="d-flex"/>
            </div>
        </div>
    )
}

export default WelcomePage;