import React from "react";

function Award(props) {
    return (
        <a title={props.name} href={props.link} className={"foldtr col-lg-1 col-sm-2 mx-3 my-3 " + props.issuer}>
            <i className={"fas fa-2x py-3 " + props.icon} style={{color: props.color}}></i>
            <p className="py-1">{props.name}</p>
            <p><strong>Verified</strong></p>
        </a>
    );
}

export default Award;