import React from "react";
import "./Proyectos.css";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import videoPrimerProyecto from "../../Materiales/videoPrimerProyecto.mp4";
import RockPaperScissors from "../../Materiales/RockPaperScissors.mp4";
import randomCat from "../../Materiales/randomcats.mp4";
import movieApp from "../../Materiales/movieApp.mp4";

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
          In this project I have to do a web page with HTML, CSS, and Javascript
          for a modal.
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
        <h3 className="RockPaperScissors">Rock, Paper and Scissors game!</h3>
        <video width="700" height="500" controls>
          <source src={RockPaperScissors} type="video/mp4" />
        </video>
        <a href="https://github.com/santiVarese/RockPaperScissors">
          <h5>
            Here is the link to download de project for play and see it better
            in your pc!{" "}
          </h5>
        </a>
        <h3 className="randomCat">Random cats project</h3>
        <video width="700" height="500" controls>
          <source src={randomCat} type="video/mp4" />
        </video>
        <a href="https://github.com/santiVarese/RockPaperScissors">
          <h5>
            Here is the link to download de project and see it better in your
            pc!{" "}
          </h5>
        </a>
        <h3 className="movieApp">The Movie App</h3>
        <p>
          This is an app to saerch movies and see the trailers! The trailers has
          sound (turn down de volume just in case)
        </p>
        <p>I use "The Movie Data Base" API for this project</p>

        <a href="https://www.themoviedb.org/">
          <p>Click here to go to their page</p>
        </a>
        <video width="700" height="500" controls>
          <source src={movieApp} type="video/mp4" />
        </video>
        <a href="https://github.com/santiVarese/movieApp">
          <h5>
            Here is the link to download de project and see it better in your
            pc!{" "}
          </h5>
        </a>
      </div>
    </div>
  );
}

export default Proyectos;
