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
        <div className="marcoImagen">
          <img
            className="imagenPagina"
            src={imagenPagina1}
            alt="paginaImagen1"
          />
          <img
            className="imagenPagina"
            src={imagenPagina2}
            alt="paginaImagen2"
          />
          <img
            className="imagenPagina"
            src={imagenPagina3}
            alt="paginaImagen3"
          />
          <img
            className="imagenPaginaFooter"
            src={imagenPagina4}
            alt="paginaImagen4"
          />
        </div>
        <div className="modalWeb">
          <h3>This is the modal from the web visual</h3>
          <img className="imagenPagina" src={modalWeb} alt="modalImagen" />
        </div>
        <h3>this is the responsive desing </h3>
        <div className="responsive">
          <img
            className="imagenResponsive"
            src={responsive1}
            alt="paginaResponsive1"
          />
          <img
            className="imagenResponsive"
            src={responsive2}
            alt="paginaResponsive1"
          />
          <img
            className="imagenResponsive"
            src={responsive3}
            alt="paginaResponsive1"
          />
          <img
            className="imagenResponsive"
            src={responsive4}
            alt="paginaResponsive1"
          />
          <img
            className="imagenResponsive"
            src={responsive5}
            alt="paginaResponsive1"
          />
          <img
            className="imagenResponsive"
            src={responsive6}
            alt="paginaResponsive1"
          />
          <img
            className="imagenResponsive"
            src={responsive7}
            alt="paginaResponsive1"
          />
          <img
            className="imagenResponsive"
            src={responsive8}
            alt="paginaResponsive1"
          />
        </div>
        <h3>This is the modal for the responsive desing</h3>
        <div className="modalResponsive">
          <img
            className="imagenResponsive"
            src={modalResponsive}
            alt="paginaResponsive2"
          />
        </div>
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
