import React from "react";
import Item from "./Item"
import sections from "../sections"

function Header() {

  return (
   <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
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
