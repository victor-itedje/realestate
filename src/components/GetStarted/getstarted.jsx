import React from "react";
import "./getstarted.css"

const GetStarted = () => {
    return(
        <section id="getstarted"  className="g-wrapper" >
            <div className="innerWidth paddings g-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText" >Get Started with Homyz</span>
                    <span className="secondaryText" >Subscribe and find super attractive price quotes from us.<br />
                    Find your residence soon</span>
                    <button className="button">
                        <a href="mailto:itedje309@gmail.com">Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GetStarted