import React from 'react';
import massage1 from '../../../img/massage1.jpg';
import { Link } from 'react-router-dom';
import '../../../css/Massage.css';
import ConsultationImage from '../../../img/piccc.jpg';

const Gravidmassage = () => {
  return (
    <div>
      <header className="massage-header" style={{ backgroundImage: `url(${massage1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Gravid Massage</h1>
          <p className="massage-description">
            En skonsam och avslappnande massage anpassad för dig som är gravid – för att minska spänningar och främja välbefinnande under graviditeten.
          </p>
        </div>
      </header>

      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Gravid Massage</h3>
            <p className="relax-treatment-description">
              Är du gravid? Då ska du välja denna anpassade behandling för dig som har passerat vecka 12, på grund av rekommendationer från flera studier. Kroppen går igenom en hel del förändringar och även belastning av graviditet därför är det extra viktigt att ta hand om kroppen för att du ska kunna känna dig avslappnad och kunna återhämta dig efter en skräddarsydd massage.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 60 eller 90 min</li>
                <li><strong>Pris:</strong> 695 kr / 1050 kr</li>
                <li><strong>Typ av massage:</strong> Anpassad massage för gravida</li>
                <li><strong>Fördelar:</strong> Lindrar spänningar, förbättrar sömn, minskar svullnad</li>
                <li><strong>Rekommenderat för:</strong> Gravida från vecka 12 och framåt</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="https://www.bokadirekt.se/places/house-of-aesthetics-34817" className="relax-treatment-button">
                  Boka Gravid Massage
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
            Undvik att äta en stor måltid innan och försäkra dig om att du passerat vecka 12. Ta med dig något bekvämt att ha på dig före och efter.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Vila och lyssna på kroppen efter behandlingen. Drick vatten och ta det lugnt resten av dagen för att få ut det mesta av din avslappning.
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

export default Gravidmassage;
