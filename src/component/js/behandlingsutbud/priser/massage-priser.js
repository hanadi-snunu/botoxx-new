import React from "react";
import PriceSection from "./PrisSection";
import "../../../css/behandlingsutbud.css";
import HeroImage from "../../../img/pic.jpg";
import ConsultationImage from "../../../img/piccc.jpg";
import { Link } from "react-router-dom";

const MassagePriser = () => {
    const treatments = [
        {
          title: "Avslappnande och terapeutiska massagebehandlingar",
          prices: [

            { name: "Avkopplande Massage | 60 min", ordPris: 695, arskort: "-" },
            { name: "Avkopplande Massage | 90 min", ordPris: 1050, arskort: "-" },
            { name: "Hotstone Massage | 60 min", ordPris: 695, arskort: "-" },
            { name: "Hotstone Massage | 90 min", ordPris: 1050, arskort: "-" },
            { name: "Helkropps Massage | 60 min", ordPris: 695, arskort: "-" },
            { name: "Helkropps Massage | 90 min", ordPris: 1050, arskort: "-" },
            { name: "Sport Massage | 60 min", ordPris: 695, arskort: "-" },
            { name: "Sport Massage | 90 min", ordPris: 1050, arskort: "-" },
            { name: "Ansikts Massage | 30 min", ordPris: 450, arskort: "-" },
            { name: "Fot Massage | 30 min", ordPris: 450, arskort: "-" },
            { name: "Rygg Massage | 30 min", ordPris: 580, arskort: "-" },
            { name: "Relaxing Time | 30 min", ordPris: 450, arskort: "-" },
             { name: "Klippkort x5 | 60 min", ordPris: 3000, arskort: "-" },
            { name: "Gravid Massage | 60 min", ordPris: 695, arskort: "-" },
            { name: "Gravid Massage | 90 min", ordPris: 1050, arskort: "-" },
           
            
          ],
        },
      ];
      
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Massagebehandlingar</h1>
            <p className="hero-subtitle">
              Utforska våra massagebehandlingar med professionell expertis.
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

export default MassagePriser;
