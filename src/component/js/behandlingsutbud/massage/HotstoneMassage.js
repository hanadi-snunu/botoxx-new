import React from 'react';
import massage1 from '../../../img/massage1.jpg';
import { Link } from 'react-router-dom';
import '../../../css/Massage.css';
import ConsultationImage from '../../../img/piccc.jpg';

const HotstoneMassage = () => {
  return (
    <div>
      <header className="massage-header" style={{ backgroundImage: `url(${massage1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Hotstone massage</h1>
          <p className="massage-description">
            Hotstone massage är en djupt avslappnande behandling där varma lavastenar används för att lösa upp muskelspänningar och främja cirkulationen.
          </p>
        </div>
      </header>

      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Hotstone massage</h3>
            <p className="relax-treatment-description">
              En lugn och tyst massage där vår massör använder varm olja och varma lavastenar för att fördjupa och förstärka effekten av massagen. Detta hjälper till att lösa upp muskelspänningar och lindra stress. Genom denna metod stimuleras blodcirkulationen och lymfflödet, vilket bidrar till en ökad känsla av avslappning och välbefinnande. Behandlingen kan betalas med Epassi/Friskvård. 
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 60 eller 90 min</li>
                <li><strong>Pris:</strong> 695 kr / 1050 kr</li>
                <li><strong>Typ av massage:</strong> Helkropp med varma lavastenar</li>
                <li><strong>Fördelar:</strong> Djup avslappning, minskad muskelspänning, förbättrad cirkulation</li>
                <li><strong>Rekommenderat för:</strong> Personer med spänningar och stress</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="https://www.bokadirekt.se/places/house-of-aesthetics-34817" className="relax-treatment-button">
                  Boka Hotstone Massage
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
            Undvik koffein och rikliga måltider innan behandlingen. Drick vatten och se till att du kommer i tid för en stressfri upplevelse.
          </p>
          <p className="session-text">
            Värmen från stenarna hjälper musklerna att slappna av snabbare, vilket gör att du kan få ut mer av massagen.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Vila gärna efter behandlingen och fortsätt dricka mycket vatten för att hjälpa kroppen att rensa ut slaggprodukter.
          </p>
          <p className="session-text">
            Undvik att stressa direkt efter behandlingen – ge dig själv tid att njuta av det lugn som behandlingen ger.
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
            <Link to="/HittaBehandling" className="consultation-button">
              Boka nu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotstoneMassage;
