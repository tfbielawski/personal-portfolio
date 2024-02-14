import React from "react";
import EGA from "../assets/ega3.png";
import "../styles/AboutMe.css"

function AboutMe() {
  return (
    <div className="outer">
        <div className="bio ">
            <p>I 'm a veteran of the US Marines, and I've spent nearly 20 years in law enforcement. In my workforce experience, I've served in many places in this country and around the world.</p>

            <p>I currently have two years of experience as a software developer, which includes working on a multi-state education platform web app for a non-profit using .NET framework/C#, and, building iOS and Android mobile apps customized from a core repository using React Native, xCode, and Android Studio. I have an AS in computer science (with honors-May 2021) from Florida State College Jacksonville where I studied object oriented programming in C#, C++, and Java, and I studied JavaScript/HTML/CSS, and MYSQL. After college, I decided to further my education and skills by enrolling in Lambda School, a 6-month (full time) coding vocational school for full-stack web development. As a Lambda School web developer student, I learned advanced Javascript, HTML, CSS, Python, advanced ReactJS, Redux, NodeJS, APIs, Axios, and other web technologies. I completed Lambda School training in October, 2021.</p>

            <p>My unique background as an investigator has honed my analytical and problem solving skills, which has helped me in my journey to become a software engineer. While I am good at problem solving, I am also a very creative person (I write and self-publish science-fiction and fantasy novels as a hobby).</p>

            <p>I am passionate about computers and about writing code, and I love Linux (I try to recruit new ‘Nix users whenever I can!). In my career, I’ve had the benefit of working with people from all walks of life and cultures, and in many places around the world. I enjoy meeting new people and learning new skills. My personal core values are integrity, determination, and perseverance.</p>

            <p>As a US Marine, I live and breathe the Corp's unofficial motto:  "Improvise. Adapt. Overcome." Given the chance, I know I can prove my value. </p>
        </div>
        <img className="ega" src={EGA}/>
    </div>

  )
}

export default AboutMe