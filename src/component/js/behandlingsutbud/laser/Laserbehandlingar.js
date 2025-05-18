// Laserbehandlingar.js
import React from "react";
import laserImage from "../../../img/injection.png"; // Byt till din hero-bild för laser
import laser1 from "../../../img/injection.png"; // Skapa/byt namn på de här bilderna efter dina behov
import laser2 from "../../../img/injection.png";
import laser3 from "../../../img/injection.png";
import ConsultationImage from "../../../img/piccc.jpg";
import { Link } from "react-router-dom";
import "../../../css/Hem.css";

const treatments = [
  {
    image: laser1,
    title: "Nordlys | IPL",
    description: "Behandling mot pigmentfläckar, ytliga blodkärl och rodnad.",
    link: "/NordlysIpl"
  },
  {
    image:laser2,
    title: "Nordlys | Frax 1550",
    description: "Fraktionerad laserbehandling för hudförnyelse och ärrreduktion.",
    link: "/Nordlys-Frax1550"
  },
  {
    image: laser3,
    title: "Nordlys | Light & Bright",
    description: "Kombinationsbehandling för maximal hudföryngring.",
    link: "/Nordlys-LightBright"
  }
];

const Laser = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="home-section" style={{ backgroundImage: `url(${laserImage})` }}>
        <div className="overlay">
          <h1 className="home-title">Laserbehandlingar</h1>
          <p className="home-location-text">Nordlys är en behandling av fraktionerad laser som behandlar allt från rynkor och fina linjer till acne ärr och pigmenteringar. Nordlys är en CE och FDA-godkänd teknologi som har visat sig vara mycket effektiv för att behandla en mängd olika hudproblem med goda resultat tack vare sin förmåga att stimulera nybildningen av kollagen. De olika behandlingarna är uppdelade i olika varianter av laser vilket gör det möjligt att anpassa behandlingen efter alla hud typer och problemområden. Resultaten av behandlingarna är synlig gradvis över tid, det kan krävas fler behandlingar för att uppnå det optimala resultatet. Fråga din behandlare om vad som rekommenderas för just din hy</p>
          <div className="home-button-group">
            <Link to="/Bokatid" className="home-action-button">Boka tid</Link>
            <Link to="/HittaBehandling" className="home-action-button">Hitta rätt behandling</Link>
          </div>
        </div>
      </div>

      {/* Treatment Cards */}
      <div className="home-treatments-section">
        <h2 className="home-section-title">Våra laserbehandlingar</h2>
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
              Vi hjälper dig att välja rätt laserbehandling för din hudtyp och behov.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laser;
