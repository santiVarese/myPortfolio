import React from "react";
import "./Contacto.css";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Linkedin from "../../Materiales/logoLinkedin.png";
import Github from "../../Materiales/logoGithub.png";
import Gmail from "../../Materiales/logoGmail.png";
import CV from "../../Materiales/imagenIlustrativaCV.png";

function Contacto() {
  return (
    <div className="container-home">
      <NavBar />
      <div>
        <div className="title">
          <div class="block">
            <div class="block-content">
              <p class="block-text fade-animation">SOCIAL MEDIA</p>
            </div>
          </div>
        </div>
        <div className="imagenSocialMedia">
          <a href="https://www.linkedin.com/in/santiago-varese/">
            <img className="logoLinkedin" src={Linkedin} alt="Linkedin" />
          </a>
          <h2>Click the logo to go to my Linkedin!</h2>
        </div>
        <div className="imagenSocialMedia">
          <a href="https://github.com/santiVarese">
            <img className="logoLinkedin" src={Github} alt="Linkedin" />
          </a>
          <h2>Click the logo to go to my Github!</h2>
        </div>
        <div className="imagenSocialMedia">
          <img className="logoLinkedin" src={Gmail} alt="Linkedin" />
          <h2>Here is my mail! varesesanti@gmail.com</h2>
        </div>
        <div className="imagenSocialMedia">
          <img className="logoLinkedin" src={CV} alt="Linkedin" />
          <a href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=5cc731a0c8&attid=0.1&permmsgid=msg-a:r-3778593289627472857&th=183a9ee7e25628a2&view=att&disp=inline&realattid=f_l8w3z8oj0&saddbat=ANGjdJ9ptKRLeGHAb0vBiTFETGX9CfrKNSVatdlBisGK3VPFw3sNG750QB8L00g1o9W6_h3ouYlZndWrLu4qiGOfcITRU_N-rvwK4bUNgZz09RDWk9cQgdlDMNjStviCF_iioAHKY3zKv8ZglmIIcIZH3T4DH05aUAlfXJoRILE1lEZWxwgAgNwgG40vhtS5IgYPU49wIcDImPTYpxR6cNmMJhDBF6jD73UHAdn20HUSymN_-oki5b_xykkrNb8KgDYl_dzOfGf6EYtAgq2sMvmxWa8o86mRFxgKsoBtNxJ3KjLk0s0CfTqP8y3f8WpRhDd8n92njsJunbVSx70Z-f62h46PQG2d7DLlj_RsM9IZwzpRUHoLJ-Y50OHIcCDvRc8Vbbx9rncQrtZwYGx0GpMmCzuOw1iyzHOT8Mix0b6kCOB5Po0jIQ_Tsik8Hz-yyMl1wLxqTARcV8etgl9Gj7yzYC8Wm_KEF97RV7j-qGjDkrI_PpY-tyAL90jo5hMcHClQLvH2F7zC40UHLy_d4z3dQU9mXlKoUYs6nNDTzJaNFavflyM-HQynetIg3qCu5zfOSTvhgVeg-LLcs6ki0mpuZhgZtNJk1tfPg_gxzSwOpRACfhLgwzISmEd_GS8n3_Qjzrt9RMEwMcQcCXXrmYlUd9j88wM8Ls_ou22BLfPfeAoyK1dLKOUzkpApEKjm3j-jzWZf38ru-LhvvE7LTVxR63gC2UZbNrJlH2J7mJZOS-f9Qc8IVmfyVvIyznp83q1dAC-OP1au8wtyKxTIJa_0ymofghV6NWF2fnlvw5_nhCFFhinOZLrdeb-AyfLxWl8tVOjt8sFTCaYQ0PqhhGjky1vX9HXHMIkOW2A2Yk58pKry8ThwCPmeMtzeIx1hRCxMEa8xFzIm3XPeMdcBqjeNPiGhHA_pRdu82ISC9Lwk2b7WqvAXxLOKMUW3VdPOEBrWYaaRjn4cvQtRFdF0LWDMK3rB4rYUL4E9sGRG0L7i6g2POf0KsOXDb6wjOfY">
            <h2>Click here to see my CV!</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
