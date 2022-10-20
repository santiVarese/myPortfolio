import React from "react";
import "./Proyectos.css";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import imagenPagina1 from "../../Materiales/imagenPagina1.png";
import imagenPagina2 from "../../Materiales/imagenPagina2.png";
import imagenPagina3 from "../../Materiales/imagenPagina3.png";
import imagenPagina4 from "../../Materiales/imagenPagina4.png";
import modalWeb from "../../Materiales/modalWeb.png";
import responsive1 from "../../Materiales/responsive1.png";
import responsive2 from "../../Materiales/responsive2.png";
import responsive3 from "../../Materiales/responsive3.png";
import responsive4 from "../../Materiales/responsive4.png";
import responsive5 from "../../Materiales/responsive5.png";
import responsive6 from "../../Materiales/responsive6.png";
import responsive7 from "../../Materiales/responsive7.png";
import responsive8 from "../../Materiales/responsive8.png";
import modalResponsive from "../../Materiales/modalResponsive.png";
import videoPrimerProyecto from "../../Materiales/videoPrimerProyecto.mp4";

function Proyectos() {
  return (
    <div className="container-home">
      <NavBar />
      <div className="title">
        <div class="block">
          <div class="block-content">
            <p class="block-text fade-animation">MY PROJECTS</p>
          </div>
        </div>
      </div>
      <div className="prueba">
        <h3>HTML and CSS Project</h3>
        <p>
          In the first project I have to do a web page with HTML, CSS, and
          Javascript for a modal.
        </p>
        <p> And then I have to do it responsive for an Iphone x12</p>
        <video width="700" height="500" controls>
          <source src={videoPrimerProyecto} type="video/mp4" />
        </video>
        <div className="githubProjectLink">
          <a href="https://github.com/santiVarese/primerProyectoSenpai">
            <h5>
              Here is the link to download de project and see it better in your
              pc{" "}
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
