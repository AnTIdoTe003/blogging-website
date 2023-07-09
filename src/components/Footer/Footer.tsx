import React from 'react'
import './style.scss'
type Props = {}

const Footer = (props: Props) => {
  return (
   <div className="footer-wrapper">
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-left-data">
            <h1>theEngineerGuy</h1>
            <p>@2023 Copyright theEngineerGuy.</p>
            <p>All rights reserved</p>
          </div>
        </div>
        <div className="footer-mid">
          <div className="footer-mid-data">
            <h1>Quick Links</h1>
            <p>Home</p>
            <p>PortFolio</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Dashboard</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-data">
            <h1>Follow Us</h1>
            <p>Twiiter</p>
            <p>InstaGram</p>
            <p>Threads</p>
            <p>Github</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Footer