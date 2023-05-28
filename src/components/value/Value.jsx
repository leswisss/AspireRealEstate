import React from 'react'
import "./value.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import data from "../../utils/accordion"
import { MdOutlineArrowDropDown } from 'react-icons/md'

const Value = () => {
  return (
    <section className="value">
      <div className="paddings innerWidth flexCenter value__container">
        <div className="flexCenter value__image">
          <div className="v__images-container">
            <div className="small-card s-1 image__card"></div>
            <div className="big-card b-1 image__card"></div>
            <div className="small-card s-2 image__card"></div>
            <div className="big-card b-2 image__card"></div>
            <div className="small-card s-3 image__card"></div>
            <div className="big-card b-3 image__card"></div>
            <div className="small-card s-4 image__card"></div>
            <div className="big-card b-4 image__card"></div>
          </div>
        </div>
  
        <div className="flexColStart value__text">
          <div className='flexColStart value__text-header'>
            <span className='orangeText'>Our Mission</span>
            <span className='primaryText'>Dedicated To Your Satisfaction</span>
            <span className='secondaryText mission'>
              Find your dream home with us. <br /> Our tailored services ensure your satisfaction.
              Let us help you today
            </span>
          </div>

          <Accordion className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]}
          >
            {
              data.map((item, i) => (
                <AccordionItem className='accordionItem' key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton'>
                      <span className="flexCenter acc__icon">
                        {item.icon}
                      </span>
                      <span className="pt-style">
                        {item.heading}
                      </span>
                      <span className="flexCenter acc__icon">
                        <MdOutlineArrowDropDown />
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="acc__detail">
                      {item.detail}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))
            }
          </Accordion>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  )
}

export default Value