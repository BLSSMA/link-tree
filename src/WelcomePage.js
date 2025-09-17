import React from "react";
import "./WelcomePage.css";


const WelcomePage = () => {

    return (
        <div className="WelcomePage d-flex">
            <div className="WelcomeHeader">
                <h1 className="typed-out">✨Oh, Hi there✨</h1>
            </div>
            <div className="TwitterButton">
                <a href="https://x.com/BaebeeAngel94" className="PortfolioLink" title="https://littlehaunteddesigns.etsy.com" target="_blank" rel="noreferrer">Twitter (X) </a>
            </div>
            <div className="RedditButton">
                <a href="https://www.reddit.com/user/baebeeangel/" className="PortfolioLink" title="https://www.instagram.com/haunted_design/" target="_blank" rel="noreferrer">Reddit</a>
            </div>
            <div className="InstagramButton">
                <a href="https://www.instagram.com/baebee.angel" className="PortfolioLink" title="https://www.instagram.com/haunted_design/" target="_blank" rel="noreferrer">Instagram</a>
            </div>
            <div className="SpicyButton">

                <a href="https://onlyfans.com/baebeeangel" className="PortfolioLink" title="https://www.instagram.com/haunted_design/" target="_blank" rel="noreferrer">Spicy Site</a>
            </div>
        </div>
    )
}

export default WelcomePage;