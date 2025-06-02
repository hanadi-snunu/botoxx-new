import React from 'react';
import massage1 from '../../../img/massage1.jpg';
import { Link } from 'react-router-dom';
import '../../../css/Massage.css';
import ConsultationImage from '../../../img/piccc.jpg';

const AvkopplandeMassage = () => {
  return (
    <div>
      <header className="massage-header" style={{ backgroundImage: `url(${massage1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Avkopplande massage</h1>
          <p className="massage-description">
            Avkopplande massage är en mjuk och lugn behandling som hjälper till att minska stress och förbättra ditt välbefinnande. En skön paus för både kropp och sinne.
          </p>
        </div>
      </header>

      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Avkopplande massage</h3>
            <p className="relax-treatment-description">
En lugn och tyst massage som fokuserar på att släppa på kroppens stress och spänningar. Behandlingen är utformad för att ge dig en paus från vardagens stress, hjälpa dig att slappna av och återställa energinivåerna. Perfekt för att skapa balans och harmoni mellan kropp och sinne, så att du kan känna dig mer avslappnad och i harmoni. Behandlingen kan betalas med Epassi/Friskvård.             </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 60 eller 90 min</li>
                <li><strong>Pris:</strong> 695 kr / 1050 kr</li>
                <li><strong>Typ av massage:</strong> Helkropp med avslappnande tekniker</li>
                <li><strong>Fördelar:</strong> Minskar stress, förbättrad sömn, inre lugn</li>
                <li><strong>Rekommenderat för:</strong> Alla som vill koppla av och återställa balansen</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="https://www.bokadirekt.se/places/house-of-aesthetics-34817" className="relax-treatment-button">
                  Boka Avkopplande Massage
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
            Vi rekommenderar att du kommer i god tid och undviker fysisk ansträngning innan din massage. Drick gärna vatten och kom i bekväma kläder.
          </p>
          <p className="session-text">
            För bästa upplevelse – kom avslappnad och låt din kropp få njuta av återhämtningen.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Efter massagen bör du ta det lugnt och fortsätta dricka vatten för att hjälpa kroppen rensa ut slaggprodukter. Undvik träning direkt efter.
          </p>
          <p className="session-text">
            Lyssna på din kropp och låt effekterna av massagen stanna kvar så länge som möjligt.
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

export default AvkopplandeMassage;
