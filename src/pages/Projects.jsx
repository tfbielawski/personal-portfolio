import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
        <h1> Some of My Projects</h1>
        <div className="projectList">
           {ProjectList.map((project, idx) => {
                 return (
                    <a>
                        <ProjectItem 
                        id={idx} 
                        name={project.name} 
                        image={project.image} 
                    />
                    </a>
                 );
           })}
        </div>
    </div>
  );
}

export default Projects
