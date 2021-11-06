import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer className="mt-3 mb-3">
        <div className="mb-2">
          © {year} copyright: danh le
        </div>
        <div style={{color: "#A11A1c"}}>
            <i className="fab fa-lg fa-react"></i>
        </div>
      </footer>
    );
}

export default Footer;