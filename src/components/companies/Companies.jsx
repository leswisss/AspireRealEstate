import React from 'react'
import "./companies.css"
import LOGO from "../../assets/equinix.png"
import LOGO2 from "../../assets/prologis.png"
import LOGO3 from "../../assets/realty.png"
import LOGO4 from "../../assets/tower.png"

const Companies = () => {
  const images = [LOGO, LOGO2, LOGO3, LOGO4]
  return (
    <section className="companies">
      <div className="paddings innerWidth flexCenter companies__container">
        {images.map((images, index) => (
          <img key={ index } src={ images } alt="Partnership Logo" className='partner__img'/>
        ))}
      </div>
    </section>
  )
}

export default Companies