import React from 'react'
import HERO from "../../assets/hero2.jpg"
import HERO2 from "../../assets/hero3.jpg"
import HERO3 from "../../assets/hero4.jpg"
import HERO4 from "../../assets/hero7.jpg"
import HERO5 from "../../assets/hero8.jpg"
import "./hero.css"
import { SlLocationPin } from "react-icons/all"
import CountUp from 'react-countup'
import { useState, useEffect } from 'react'
import {motion} from "framer-motion"


const Hero = () => {
  const images = [HERO, HERO2, HERO3, HERO4, HERO5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <section className="hero__section">
      <div className="paddings innerWidth flexCenter hero__container">
        {/* Left Side*/}
        <div className="flexColStart hero__text">
          <div className="hero__title">
            <div className="hero__decor"></div>
            <motion.h1
            initial={{y: "5rem", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
              duration: 2,
              type: "spring"
            }}
            >
              Discover <br /> Your Dream <br /> Home
            </motion.h1>
          </div>

          <motion.p className="hero__description"
          initial={{x: "-8rem", opacity: 0}}
          animate={{x: 0, opacity: 1}}
            transition={{
              duration: 2,
              type: "spring"
            }}
          >
            Home - Our expert agents are here to help you find the perfect property. <br />
            Start your search today and take the first step towards homeownership.
          </motion.p>

          <div className="hero__search">
            <SlLocationPin className="location__icon"/>
            <input type="text" />
            <button className='button'>Search</button>
          </div>

          <div className="flexCenter hero__stats">
            <div className="flexColStart stat">
              <span className='stat__numbers'>
                <CountUp start={8800} end={9000} duration={4} />
                <span className='plus__icon'>+</span>
              </span>
              <span className='stat__text'>Premium Properties</span>
            </div>

            <div className="flexColStart stat">
              <span className='stat__numbers'>
                <CountUp start={1950} end={2000} duration={4} />
                <span className='plus__icon'>+</span>
              </span>
              <span className='stat__text'>Satisfied Customers</span>
            </div>

            <div className="flexColStart stat">
              <span className='stat__numbers'>
                <CountUp end={28} />
                <span className='plus__icon'>+</span>
              </span>
              <span className='stat__text'>Award Winnings</span>
            </div>
          </div>

        </div>

        {/**Right Side */}
        <div className="hero__image">
          <motion.div className="flexCenter image__wrapper"
          initial={{x: "8rem", opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{
            duration: 2,
            type: "spring"
          }}
          >
            { images.map((image, index) => (
              <img key={ index } src={ image } alt="Real Estate Image" className="image" style={{ opacity: index === currentImageIndex ? 1 : 0 }} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero