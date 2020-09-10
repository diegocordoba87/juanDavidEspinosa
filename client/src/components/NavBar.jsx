import React from "react";

const NavBar = () => {
  return (
    <div className="col-1">
      <nav className="nav flex-column">
        <a
          style={{ marginTop: 60, fontSize: 30, fontWeight: 10 }}
          className="nav-link active"
          href="#"
        >
          JUDAS
        </a>
        <a className="nav-link" href="#">
          Photographs
        </a>
        <a className="nav-link" href="#">
          Videos
        </a>
        <a className="nav-link" href="#">
          About
        </a>
        <a className="nav-link" href="#">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
