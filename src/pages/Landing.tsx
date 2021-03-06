import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import logoImg from "../images/logo.svg";
import bgImg from "../images/landing.svg";

import "../styles/pages/landing.css";

const Landing = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          <img src={bgImg} alt="Happy" />
        </main>

        <div className="location">
          <strong>São Luís</strong>
          <span>Maranhão</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="#8d734b" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
