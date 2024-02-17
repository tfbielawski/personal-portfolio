import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { SocialIcon } from 'react-social-icons'
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    //Import the projects from the list by it's id, store in project
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} style={{ "height": "45%", "width": "15%" }}/>
                <button 
                    onClick={()=> window.open(project.deploy)}
                    style={{width: 280, backgroundColor: "steelblue" }}
                >LAUNCH APP OR VIEW
                </button>
            <p>
                <b></b> {project.skills}                
            </p>
            <p>
                {project.description}
            </p>
            <div>
                <SocialIcon network="github" url={project.repo} style={{ height: 100, width: 100 }}  />
            </div>
        </div>
    )
}

export default ProjectDisplay
