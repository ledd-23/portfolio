import React from "react";

function Item(props) {
    return (
    <li className="nav-item px-2">
        <a className="nav-link" href={props.nav}>{props.name}</a>
    </li>
    );
}

export default Item;