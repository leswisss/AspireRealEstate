import React from 'react'
import "./contactus.css"
import IMG from "../../assets/contact2.jpg"

const Contact = () => {
  return (
    <section className='contact'>
      <div className="paddings innerWidth contact__container">
        <div className="card__wrapper">
          <div className="contact__card">
            <span className="c-header">Talk With Our Agents</span>

            <div className="input__fields">
              <div className="input__field">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder='e.g John' />
              </div>
              <div className="input__field">
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='Doe'/>
              </div>
              <div className="input__field">
                <label htmlFor="">Location</label>
                <input type="text" placeholder='Location'/>
              </div>
              <div className="input__field">
                <label htmlFor="">Phone Number</label>
                <input type="tel" placeholder='+237 654540096' />
              </div>
              <div className="input__field">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='noname@email.com' />
              </div>
            </div>

            <div className='textarea'>
              <h3>What would you like to discuss or inquire?</h3>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button type='submit' className='card__button'>
              Submit
            </button>
          </div>
        </div>
        <div className="contact__image">
          <img src={ IMG } alt="" className='c__image' />
          <p className="contact__details">
          We are dedicated to helping you find your dream home. Contact us today to  schedule a consultation 
          and let us help you find the perfect property. You can reach us by <a href="tel: +237654570096">phone</a>,
          by <a href="mailto:schneiderbafri0@gmail.com">email</a> , or by filling out our contact form on our website.
          We look forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact