import React from "react";

function Link(props) {
    return (
        <a className="btn mx-1" href={props.link} role="button" style={{color: "#A11A1c"}}>
            <i className={"fab fa-lg " + props.icon}></i>
        </a>
    );
}

export default Link;