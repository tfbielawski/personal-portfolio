import React from "react"
import { Link } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css"

function Footer() {

  return (
    <div className="footer">
        <div className="socialMedia">
            {/* use Link? */}
            <Link to="https://www.linkedin.com/in/tombielawski/"><LinkedInIcon /></Link>
            <Link to="mailto:tfbielwski@pm.me" > <EmailIcon /></Link>
            <Link to="https://github.com/tfbielawski" ><GithubIcon /></Link>
        </div>
        {/* at sign?*/}
        <p> &copy;2024 tombielawski.com </p>        
    </div>
  )
}

export default Footer