import React from "react";
import { useNavigate } from "react-router-dom";

// Make each item click, or, when it loads have a clickable URL


//Pass in image, name, id props to show in the cards
function ProjectItem({image, name, id}) {
    const navigate = useNavigate();
    return (
        <div 
            className="projectItem"
            onClick={() => {
                navigate("/project/" + id);
            }}
        >
            <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
            <h3>{name}</h3>
        </div>
    )
}

export default ProjectItem