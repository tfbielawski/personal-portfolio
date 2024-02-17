import React from "react";
import { useNavigate } from "react-router-dom";

//Pass in image, name, id props to show in the cards
function ProjectItem({image, name, id, description}) {
    const navigate = useNavigate();
    return (
        <div 
            className="projectItem"
            onClick={() => {
                navigate("/project/" + id);
            }}
        >
            <div style={{"height": "75%", "width": "100%", backgroundImage: `url(${image})`}} className="bgImage"/>
            <h3>{name}</h3>
        </div>
    )
}

export default ProjectItem
