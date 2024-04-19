import React from "react";
import "./contact.css"

const Contact = () => {
    return(
        <section className="c-wrapper" >
            <div className="paddings innerWidth flexcenter c-container">
                <div className="flexColStart c-left">
                <span className="orangeText" >Our Contacts</span><span className="primaryText" >Easy to Contact Us</span><span className="secondaryText" >We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>
                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexcenter icon">
                                    <img src="./phone.png" width={20} height={22} alt="" />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText" >Call</span>
                                    <span className="secondaryText" >+234-810-687-1191</span>
                                </div>
                            </div>
                            <div className="flexcenter button">
                                Call Now
                            </div>
                        </div>
                         <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexcenter icon">
                                    <img src="./video-camera.png" width={20} height={22} alt="" />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText" >Video Call</span>
                                    <span className="secondaryText" >+234-803-688-7177</span>
                                </div>
                            </div>
                            <div className="flexcenter button">
                                Video Call Now
                            </div>
                        </div>
                    </div>
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexcenter icon">
                                    <img src="./chat.png" width={20} height={22} alt="" />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText" >Chat</span>
                                    <span className="secondaryText" >+234-810-687-1191</span>
                                </div>
                            </div>
                            <div className="flexcenter button">
                                Chat Now
                            </div>
                        </div>
                         <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexcenter icon">
                                    <img src="./message.png" width={20} height={22} alt="" />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText" >Message</span>
                                    <span className="secondaryText" >+234-803-688-7177</span>
                                </div>
                            </div>
                            <div className="flexcenter button">
                                Text Now
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact