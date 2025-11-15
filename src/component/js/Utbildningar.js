import React from 'react';


import "../css/behandlingsutbud.css";
import HeroImage from "../img/bild1.jpg";
import ConsultationImage from "../img/kostnadsfrikonsultation.png";
import { Link } from "react-router-dom";

const Utbildning = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="omoss-header-section">
  <img src={HeroImage} alt="Utbildningar" className="omoss-hero" />
  <div className="omoss-overlay">
    <div className="omoss-content-block">
      <h1 className="omoss-title">Utbildningar</h1>
      <p className="omoss-subtitle">
        Utforska våra utbildningar med professionell expertis.
      </p>
      <Link to="/Bokatid" className="consultation-button">
        Boka tid
      </Link>
    </div>
  </div>
</div>



      

<div>
      <header>
          <h1>Håll utkik, utbildningar kommer inom kort ..</h1>
        </header>
</div>
      {/* Consultation Section */}
      <div
        className="consultation-section"
        style={{ backgroundImage: `url(${ConsultationImage})` }}
      >
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">
              Boka en kostnadsfri digital konsultation
            </h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att förstå
              vilken behandling som passar dig bäst.
            </p>
            <Link to="/Bokatid" className="consultation-button">
              Boka nu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utbildning;
