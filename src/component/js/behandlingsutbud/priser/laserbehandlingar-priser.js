import React from "react";
import PriceSection from "./PrisSection";
import "../../../css/behandlingsutbud.css";
import HeroImage from "../../../img/nordlysbild.jpg";
import ConsultationImage from "../../../img/kostnadsfrikonsultation.png";
import { Link } from "react-router-dom";

const LaserbehandlingarPris = () => {
    const treatments = [
        {
          title: "Nordlys | IPL",
          prices: [
            { name: "IPL | Mindre område", ordPris: "1500", arskort: "-" },
            { name: "IPL | Ansikte", ordPris: "2200", arskort: "-" },
            { name: "IPL | Ansikte + Hals", ordPris: "3200", arskort: "-" },
            { name: "IPL | Ansikte + Hals + Dekolletage", ordPris: "4000", arskort: "-" },
            { name: "IPL | Dekolletage eller Hals", ordPris: "2000", arskort: "-" },
          ],
        },
         {
          title: "Nordlys | Frax 1550",
          prices: [
            { name: "Frax 1550 | Ansikte", ordPris: "2800", arskort: "-" },
            { name: "Frax 1550 | Ansikte + Hals", ordPris: "3500", arskort: "-" },
            { name: "Frax 1550 | Ansikte + Hals + Dekolletage", ordPris: "4200", arskort: "-" },
            { name: "Frax 1550 | Hals eller Dekolletage", ordPris: "2500", arskort: "-" },
            
          ],
        },
         {
          title: "Nordlys | Light & Bright",
          prices: [
            { name: "Light & Bright | Ansikte", ordPris: "3900", arskort: "-" },
            { name: "Light & Bright | Ansikte + Hals", ordPris: "4600", arskort: "-" },
            { name: "Light & Bright | Ansikte + Hals + Dekolletage", ordPris: "5500", arskort: "-" },
           
          ],
        },
      ];
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Laserbehandlingar</h1>
            <p className="hero-subtitle">
              Utforska våra laserbehandlingar med professionell expertis.
            </p>
            <Link to="/Bokatid" className="hero-button">
              Boka tid
            </Link>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div>
      
      {treatments.map((treatment, index) => (
        <PriceSection key={index} title={treatment.title} prices={treatment.prices} />
      ))}
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
};

export default LaserbehandlingarPris;
