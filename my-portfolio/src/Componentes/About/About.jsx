import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import html5 from "../../Materiales/HTML5.png";
import css from "../../Materiales/CSS.png";
import javascript from "../../Materiales/javascript.png";
import reactjs from "../../Materiales/react.png";
import postgresql from "../../Materiales/PostgreSQL.png";
import nodejs from "../../Materiales/nodeJS.png";

function About() {
  return (
    <div className="container-home">
      <NavBar />
      <div className="title">
        <div class="block">
          <div class="block-content">
            <p class="block-text fade-animation">ABOUT ME!</p>
          </div>
        </div>
      </div>
      <div className="textoDePresentacion">
        <p className="texto">
          My name is Santiago Varese, I am 23 years old and I live in
          Montevideo, Uruguay. I studied in Senpai Academy a bootcamp full time
          to be a Full Stack Web Developer, which was 3 months, 8 hours from
          Monday to Friday. I consider myself a sociable person, with a good
          ability to adapt to groups, I also consider myself ambitious and with
          many desire to grow and learn, I am focused and that makes me clear
          what I want my future to be in the IT area.
        </p>
      </div>
      <div className="lenguajesBootcamp">
        <p className="listaLenguajes">
          During my time at the bootcamp I learned various languages ​​such as :
        </p>

        <ol className="centrarLista">
          <div className="logoLenguajes">
            <img src={html5} alt="html5" />
            <ul>HTML</ul>
          </div>
          <div className="logoLenguajes">
            <img className="logoHtml5" src={css} alt="css" />
            <ul>CSS</ul>
          </div>
          <div className="logoLenguajes">
            <img className="logoHtml5" src={javascript} alt="javascript" />
            <ul>JAVASCRIPT</ul>
          </div>
          <div className="logoLenguajes">
            <img className="logoHtml5" src={reactjs} alt="reactjs" />
            <ul>REACTJS</ul>
          </div>
          <div className="logoLenguajes">
            <img className="logoHtml5" src={postgresql} alt="postgreSQL" />
            <ul>POSTGRESQL</ul>
          </div>
          <div className="logoLenguajes">
            <img className="logoHtml5" src={nodejs} alt="nodejs" />
            <ul>NODEJS</ul>
          </div>
        </ol>
      </div>
    </div>
  );
}

export default About;
