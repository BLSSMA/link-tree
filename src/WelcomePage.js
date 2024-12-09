import React from "react";
import "./WelcomePage.css";


const WelcomePage = () => {

    return(
        <div className="WelcomePage">
      

            <div className="WelcomeHeader">
                <h1 className="typed-out">✨WELCOME✨</h1>
            </div>
            <div className="StoreButton">
                <a href="/" className="StoreLink">STORE</a>
            </div>
            <div className="EtsyButton">
                <a href="/" className="EtsyLink">ETSY</a>
            </div>
            <div className="PortfolioButton">
                <a href="/" className="PortfolioLink">PORTFOLIO</a>
            </div>
        </div>
    )
}

export default WelcomePage;