import React from 'react'
import "./residency.css"
import swiperData from '../../utils/slider'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import { IoBedOutline, GiShower, TfiRulerAlt2, HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/all"
import swiperSettings from '../../utils/swipersettings'

const Residency = () => {
  const SliderButtons = () => {
    const swiper = useSwiper();
    return(
      <div className='flexCenter swiper__buttons'>
        <span className="swiper__button button-1" onClick={() => swiper.slidePrev()}>
          <HiArrowSmallLeft />
        </span>
        <span className="swiper__button button-2" onClick={() => swiper.slideNext()}>
          <HiArrowSmallRight />
        </span>
      </div>
    )
  }

  return (
    <section className="residency">
      <div className="paddings innerWidth residency__container">
        <div className="flexColStart residency__header">
            <span className='orangeText'>Best Choices</span>
            <span className='primaryText'>In Demand Accomodations</span>
        </div>

        <Swiper {...swiperSettings}>
          <SliderButtons />
          {
            swiperData.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart residency__card">
                  <div className="r__image">
                    <img src={ card.image } alt="Home Image" className="resident__img" />
                    <span className="r__price">XAF { card.price }</span>
                    <span className="r__category">{ card.category }</span>
                  </div>
                  <div className="r__details">
                    <span className="r__characteristics">{ card.characteristics }</span>
                    <span className="secondaryText r__name">{ card.name }</span>
                    <p className='r__specs'>
                      <span className="r__beds r-spec"><IoBedOutline /> { card.beds }</span>
                      <span className="r__showers r-spec"><GiShower /> { card.showers }</span>
                      <span className="r__area r-spec"><TfiRulerAlt2 /> { card.space } Sq.Ft</span>
                    </p>
                    <span className="r__type">{ card.type }</span>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Residency;


