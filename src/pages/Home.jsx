import React from "react"
import PROFILE from "../assets/profilepic.jpg";
import "../styles/Home.css"
import { SocialIcon } from 'react-social-icons'

function Home() {
  return (
    <div className="home">
        <div className="about">
          <img className="image" src={PROFILE}/>
            <h2>Tom Bielawski</h2>
            <div className="prompt">
                <p>Software Developer, veteran, former special agent. </p>
                <SocialIcon url="https://linkedin.com/in/tfbielawski" style={{ height: 100, width: 100 }}  />
                <SocialIcon url="mailto:tfbielwski@pm.me" style={{ height: 100, width: 100 }}  />
                <SocialIcon url="https://github.com/tfbielawski" style={{ height: 100, width: 100 }}  />
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
