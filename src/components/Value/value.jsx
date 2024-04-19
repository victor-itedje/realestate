import React, { useState } from "react";
import "./value.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from "react-icons";
import "../../utils/accordion";
import data from "../../utils/accordion";

const Value = () => {

    return(
        <section className="v-wrapper">
            <div className="innerWidth paddings flexcenter v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src="value.png" alt="" />
                    </div>
                </div>
                <div className="flexColStart v-right">
                    <span className="orangeText" >Our Value</span>
                    <span className="primaryText" >Value We Give to You</span>
                    <span className="secondaryText" >We always ready to help by providing the best services for you.<br />
                    We beleive a good blace to live can make your life better
                    </span>
                
                <Accordion
                className="accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}>
                    {
                        data.map((item, i) => {
                            return(
                                <AccordionItem
                                className="accordionItem"
                                key={i}
                                uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="flexcenter accordionButton" >


                                            <div className="flexcenter icon">
                                                {item.icon}
                                            </div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexcenter icon">
                                                <img src="down-arrow.png" width={13} height={9} alt="" />
                                            </div>

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText detail">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })

                    }

                </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value