import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="contenedor">
        <ul class="menu">
          <Link className="link" to={`/`}>
            <li title="home">
              <a href="#" class="home">
                home
              </a>
            </li>
          </Link>
          <Link className="link" to={`/Proyectos`}>
            <li title="projects">
              <a href="#" class="pencil">
                pencil
              </a>
            </li>
          </Link>
          <Link className="link" to={`/About`}>
            <li title="about">
              <a href="#" class="active about">
                about
              </a>
            </li>
          </Link>
          <Link className="link" to={`/Contacto`}>
            <li title="contact">
              <a href="#" class="contact">
                contact
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
