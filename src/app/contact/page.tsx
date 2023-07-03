/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import './style.scss'
import contact from '../../../public/contact.png'
import Image from 'next/image'
type Props = {}

const Contact = (props: Props) => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-heading">
            <h1>Let's Keep in Touch</h1>
          </div>
          <div className="contact-form-content">
            <div className="form-anim">
              <Image src={contact} alt='contact' className='form-anim-img'/>
            </div>
            <div className="form-wrapper">
              <form action="">
                <input type="text" name="" id="" placeholder='name' />
                <input type="text" placeholder='email' />
                <input type="text" placeholder='message' />
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact