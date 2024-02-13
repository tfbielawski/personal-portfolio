import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    //Destructure the object
    //Import the projects from the list by it's id, store in project
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image}/>
            <p>
                <b>Skills:</b> {project.skills}                
            </p>
            <button><a href={project.repo}><GitHubIcon /></a></button>
            <div>
                <button>CLICK TO LAUNCH OR VIEW<a href={project.deploy}></a></button> 
            </div>
        </div>
    )
}

export default ProjectDisplay