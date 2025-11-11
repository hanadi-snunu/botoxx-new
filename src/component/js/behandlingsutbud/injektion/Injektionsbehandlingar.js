import React from "react";
import injection1 from "../../../img/rynkreducerandeinjektioner.png";
import injection2 from "../../../img/fillers.png";
import injection3 from "../../../img/skinbooster.png";

import injection4 from "../../../img/skinbooster.png";
import injection5 from "../../../img/injection.png";
import injection6 from "../../../img/PRPPRF.png";
import injection7 from "../../../img/vitamindropp.png";

import ConsultationImage from "../../../img/konsultation.jpg";
import { Link } from "react-router-dom";
import "../../../css/Hem.css"; // Återanvänd din befintliga stilfil

const treatments = [
  {
    image: injection1,
    title: "Rynkreducerande injektionsbehandlingar",
    description: "Minska synliga rynkor och fina linjer med hjälp av botulinumtoxin.",
    link: "/Rynkreducerande"
  },
  {
    image: injection2,
    title: "Fillers",
    description: "Återskapa volym och framhäv ansiktsdrag med naturliga fillers.",
    link: "/Fillers"
  },
  {
    image: injection3,
    title: "Skinboosters – hudförbättrande",
    description: "Förbättra hudens elasticitet och återfukta på djupet.",
    link: "/Skinboosters"
  },
  
  {
    image: injection6,
    title: "PRP-PRF",
    description: "Naturlig föryngring med ditt eget blod – främjar kollagen och hudens kvalitet.",
    link: "/PRP"
  },
  {
    image: injection5,
    title: "Carboxy – Cellutrix",
    description: "Stimulerar blodcirkulation och cellförnyelse med koldioxidbehandling.",
    link: "/Carboxy-Cellutrix"
  },
  {
    image: injection7,
    title: "Vitamindropp",
    description: "IV-behandling med vitaminer och mineraler för ett inre välbefinnande.",
    link: "/VitaminDropp"
  }
];

const Injektion = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="home-section" style={{ backgroundImage: `url(${injection2})` }}>
        <div className="overlay">
          <h1 className="home-title">Injektionsbehandlingar</h1>
          <p className="home-location-text">Naturliga resultat med medicinsk precision</p>
          <div className="home-button-group">
            <Link to="/Bokatid" className="home-action-button">Boka tid</Link>
            <Link to="/HittaBehandling" className="home-action-button">Hitta rätt behandling</Link>
          </div>
        </div>
      </div>

      {/* Treatment Cards */}
      <div className="home-treatments-section">
        <h2 className="home-section-title">Våra injektionsbehandlingar</h2>
        <div className="home-treatments-grid">
          {treatments.map((treatment, index) => (
            <div key={index} className="home-treatment-card">
              <img src={treatment.image} alt={treatment.title} className="home-treatment-image" />
              <div className="home-treatment-content">
                <h3 className="home-treatment-title">{treatment.title}</h3>
                <p className="home-treatment-description">{treatment.description}</p>
                <Link to={treatment.link} className="home-treatment-link">Läs mer</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="separator-line">
        <span className="separator-dot">•</span>
      </div>

      {/* Consultation Section */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Få rådgivning av våra certifierade behandlare innan du bestämmer dig.
            </p>
            <Link to="/Bokatid" className="consultation-button">
              Boka nu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Injektion;
