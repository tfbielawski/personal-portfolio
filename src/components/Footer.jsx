import React from "react"
import { SocialIcon } from 'react-social-icons'
import "../styles/Footer.css"

function Footer() {

  return (
    <div className="footer">
        <div className="socialMedia">
            <SocialIcon url="https://linkedin.com/in/tfbielawski" style={{ height: 100, width: 100 }}  />
            <SocialIcon url="mailto:tfbielwski@pm.me" style={{ height: 100, width: 100 }}  />
            <SocialIcon url="https://github.com/tfbielawski" style={{ height: 100, width: 100 }}  />
        </div>
        {/* at sign?*/}
        <p> &copy;2024 tombielawski.com </p>        
    </div>
  )
}

export default Footer