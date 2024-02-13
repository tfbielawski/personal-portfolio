import React from "react"
import { Link } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import PROFILE from "../assets/profilepic.jpg";
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
        <div className="about">
          <img className="image" src={PROFILE}/>
            <h2>Tom Bielawski</h2>
            <div className="prompt">
                <p>Software Developer, veteran, former special agent. </p>
                <Link to="https://www.linkedin.com/in/tombielawski/"><LinkedInIcon /></Link>
                <Link to="mailto:tfbielwski@pm.me" ><EmailIcon /></Link>
                <Link to="https://github.com/tfbielawski" ><GithubIcon /></Link>
            </div>
        </div>
        <div className="skills">
            {/* Maybe add a Skills page to unclutter  home */}
            <h3></h3>
        <h3> Noteable Skills:</h3>
        <ol className="list">
          <li className="item">
            <p align="center">
              ReactJS, Redux, HTML, CSS, React Native, NodeJS, Express, NPM, StyledComponents, REST API, CRUD
            </p>
          </li>
          <li className="item">
            <p align="center">JavaScript, Java, C#/.NET, Blazor, C++, OOP, Github, Jira, Agile, Scrum, Collaboration  </p>
          </li>
          <li className="item">
            <span></span>
          </li>
        </ol>
        </div>
    </div>
  )
}

export default Home
