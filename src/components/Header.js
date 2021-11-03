import React, {useState} from "react";
import Item from "./Item"
import sections from "../sections"

function Header() {

  const [navItems, setnavItems] = useState(sections);

  return (
   <header className="sticky">
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    {navItems.map((navItem, index) => {
                        return <Item nav={"#" + navItem} key={index} name={navItem} />
                    })}
                </ul>
            </div>
        </div>
    </nav>
   </header>
  );
}

export default Header;
