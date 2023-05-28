import React from 'react'
import "./footer.css"
import { IoMdPaperPlane, BsGlobe2 } from "react-icons/all"

const Footer = () => {
  var currentYear = new Date().getFullYear();

  return (
    <section className="footer">
      <div className="paddings innerWidth flexColStart footer__container">
        <div className="footer__floater">
          <div className="floater__right">
            <span className="floater__header">
              Subscribe To Aspire
            </span>
            <p className="floater__desc">
              Stay ahead of the game in the real estate market! <br />
              Subscribe to our newsletter for exclusive insights and opportunities. Do not miss out!
            </p>
          </div>
          <div className="floater__subscribe">
            <input type="text" placeholder='Email Address' />
            <button className='floater__button' type='submit'><IoMdPaperPlane /></button>
          </div>
        </div>
        <div className="footer__links">
          <a href="" className="logo">ASPIRE <span className='logo__decor'></span></a>
          <div className="footer__lists">
            <ul className="footer__list">
              <li className='list__header'>General</li>
              <li><a href="#" className='list__link'>Contact Us</a></li>
              <li><a href="#" className='list__link'>FAQ'S</a></li>
              <li><a href="#" className='list__link'>Sitemap</a></li>
              <li><a href="#" className='list__link'>Fraud Alert</a></li>
            </ul>

            <ul className="footer__list">
              <li className='list__header'>Our Coverage Areas</li>
              <li><a href="#" className='list__link'>Douala</a></li>
              <li><a href="#" className='list__link'>Yaounde</a></li>
              <li><a href="#" className='list__link'>Limbe</a></li>
              <li><a href="#" className='list__link'>Bamenda</a></li>
              <li><a href="#" className='list__link'>More</a></li>
            </ul>

            <ul className="footer__list">
              <li className='list__header'>Resources</li>
              <li><a href="#" className='list__link'>Home Seller Resources</a></li>
              <li><a href="#" className='list__link'>Home Buyer Resources</a></li>
              <li><a href="#" className='list__link'>Real Estate Glossary</a></li>
              <li><a href="#" className='list__link'>Mortgage Calculators</a></li>
            </ul>

            <ul className="footer__list">
              <li className='list__header'>About Aspire</li>
              <li><a href="#" className='list__link'>Company Profile</a></li>
              <li><a href="#" className='list__link'>About Us</a></li>
              <li><a href="#" className='list__link'>In The News</a></li>
              <li><a href="#" className='list__link'>Philanthropy</a></li>
              <li><a href="#" className='list__link'>Blog</a></li>
            </ul>

            <ul className="footer__list">
              <li className='list__header'>Socials</li>
              <li><a href="#" className='list__link'>Instagram</a></li>
              <li><a href="#" className='list__link'>Facebook</a></li>
              <li><a href="#" className='list__link'>Youtube</a></li>
              <li><a href="#" className='list__link'>Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="paddings innerWidth copyright__content">
          <div>
            <span>&copy;{currentYear} Aspire. All rights reserved</span>
            <a href='#'>Terms & Conditions</a>
            <a href='#'>Privacy Policy</a>
          </div>
          <div>
            <button className='footer__language'><BsGlobe2 /> United States</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer