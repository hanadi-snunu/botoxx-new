import React from 'react';
import { Link } from "react-router-dom";
import '../../../css/behandlingsutbud.css';

import HeroImage from "../../../img/bild1.jpg";
import ConsultationImage from "../../../img/kostnadsfrikonsultation.png";

const Priser = () => {
  return (
    <div>
      {/* Hero Section: Full-width image with title, text, and button */}
     <div className="omoss-header-section">
  <img src={HeroImage} alt="Våra priser" className="omoss-hero" />
  <div className="omoss-overlay">
    <div className="omoss-content-block">
      <h1 className="omoss-title">Våra priser</h1>
      <p className="omoss-subtitle">
        Upptäck våra konkurrenskraftiga priser för alla våra behandlingar. Här kan du se alla våra behandlingar
        och deras priser för att hitta det som passar just dig.
      </p>
    </div>
  </div>
</div>


      {/* Treatments Section */}
      <div className="treatments-section">
        <div className="treatments-button-container">
          <Link to="/injektionsbehandlingar-priser" className="treatments-button">
            Injektionsbehandlingar
          </Link>
          <Link to="/tradlyft-priser" className="treatments-button">
            Trådlyft
          </Link>
          <Link to="/laserbehandlingar-priser" className="treatments-button">
            Laserbehandlingar
          </Link>
          <Link to="/ansiktsbehandlingar-priser" className="treatments-button">
            Ansiktsbehandlingar
          </Link>
          <Link to="/hydra-facial-priser" className="treatments-button">
            Hydra Facial
          </Link>
          
          <Link to="/vaxning-priser" className="treatments-button">
            Vaxning
          </Link>
        </div>
      </div>

      {/* Consultation Section */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            
            <Link to="/Bokatid" className="consultation-button">
              Boka nu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priser;
