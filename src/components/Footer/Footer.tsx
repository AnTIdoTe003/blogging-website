import React from 'react'
type Props = {}

const Footer = (props: Props) => {
  return (
   <div className="footer-wrapper">
    <div className="footer-container">
      <div className="footer-content">
        {/* Left Part */}
        <div>
          <p>
            @2023 Copyright theEngineerGuy. All rights reserved
          </p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Footer