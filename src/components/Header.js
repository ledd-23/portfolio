import React from "react";
import sections from "../sections";

function Item(props) {
    return (
    <li className="nav-item px-2">
        <a className="nav-link" href={props.nav}>{props.name}</a>
    </li>
    );
}

function Header() {

  return (
   <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <span className="signature d-none d-lg-block">Danh Le</span>

            <div className="collapse navbar-collapse justify-content-end nav-items" id="navbarNav">
                <ul className="navbar-nav">
                    {sections.map((section, index) => {
                        return <Item nav={"#" + section} key={index} name={section} />
                    })}
                </ul>
            </div>
        </div>
    </nav>
   </header>
  );
}

export default Header;
