import React from 'react';
import massage1 from '../../../img/massage1.jpg';
import { Link } from 'react-router-dom';
import '../../../css/Massage.css';
import ConsultationImage from '../../../img/piccc.jpg';

const Sportmassage = () => {
  return (
    <div>
      <header className="massage-header" style={{ backgroundImage: `url(${massage1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Sportmassage</h1>
          <p className="massage-description">
            En djupgående massageform som används både före och efter fysisk aktivitet. Perfekt för återhämtning och prestation.
          </p>
        </div>
      </header>

      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Sportmassage</h3>
            <p className="relax-treatment-description">
              En specialiserad behandling som använder tekniker som stretch, triggerpoints och djupare massagetryck för att lösa upp stelhet och spänningar i musklerna. Sportmassagen är särskilt effektiv för den som tränar regelbundet eller har fysisk belastning i sin vardag, och vill förbättra sin rörlighet, snabbare återhämta sig eller förebygga skador. Behandlingen kan betalas med Epassi/Friskvård. 
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 60 eller 90 min</li>
                <li><strong>Pris:</strong> 695 kr / 1050 kr</li>
                <li><strong>Typ av massage:</strong> Djupgående muskelmassage</li>
                <li><strong>Fördelar:</strong> Ökad cirkulation, minskad stelhet, förbättrad återhämtning</li>
                <li><strong>Rekommenderat för:</strong> Aktiva personer, idrottare eller personer med spända muskler</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="https://www.bokadirekt.se/places/house-of-aesthetics-34817" className="relax-treatment-button">
                  Boka Sport Massage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relax-session-info">
        <div className="session-block">
          <h2 className="session-title">Före behandlingen</h2>
          <p className="session-text">
            Det är bra att dricka vatten innan massagen. Informera gärna terapeuten om eventuella skador, muskelvärk eller andra relevanta besvär.
          </p>
          <p className="session-text">
            Kom i god tid och undvik tung fysisk aktivitet precis innan behandlingen.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Du kan känna dig trött eller ha träningsliknande ömhet. Det är normalt och brukar släppa inom 1–2 dagar.
          </p>
          <p className="session-text">
            Fortsätt dricka vatten och undvik hård träning direkt efter massagen för bästa återhämtning.
          </p>
        </div>
      </section>

      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria digitala konsultationer för att hjälpa dig att förstå vilken behandling som passar dig bäst. Vi svarar på alla dina frågor och hjälper dig att boka den tid som passar dig.
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

export default Sportmassage;
