import React from "react";


function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer id="links" className="mt-3 mb-2">
        <a href="https://youtu.be/dQw4w9WgXcQ">© {year} Copyright: Danh Le</a>
      </footer>
    );
}

export default Footer;