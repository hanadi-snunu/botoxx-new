import React from 'react';
import vaxning1 from '../../../img/vaxning.jpg.png';
import { Link } from 'react-router-dom';
import '../../../css/Vaxning.css';
import ConsultationImage from '../../../img/piccc.jpg';

const ArmarMan = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${vaxning1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Armvaxning för Män</h1>
          <p className="massage-description">
            Armvaxning för män är en effektiv metod för att uppnå släta och hårfria armar med långvarigt resultat.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Armvaxning för Män</h3>
            <p className="relax-treatment-description">
              Vår armvaxning för män är speciellt utformad för att avlägsna hår effektivt och skonsamt från armarna. 
              Behandlingen ger en slät och hårfri hud, perfekt för dig som vill undvika frekvent rakning. Vår professionella terapeut ser till att behandlingen utförs snabbt och bekvämt för att minimera obehag.
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 30 min</li>
                <li><strong>Pris:</strong> 400 kr</li>
                <li><strong>Fördelar:</strong> Långvarigt resultat, minskar hårväxt över tid, jämn och slät hud</li>
                <li><strong>Rekommenderat för:</strong> Män som vill ha hårfria och mjuka armar</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/armar-man-1887307" className="relax-treatment-button">
                  Boka armvaxning för män
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Before and After Treatment Section */}
      <section className="relax-session-info">
        <div className="session-block">
          <h2 className="session-title">Före behandlingen</h2>
          <p className="session-text">
            Se till att armarna är rena och fria från lotion eller oljor innan din behandling. Låt håret växa ut till minst 5 mm för bästa resultat.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Undvik varma duschar, solning och intensiv träning under de första 24 timmarna efter behandlingen. Återfukta huden för att hålla den mjuk.
          </p>
        </div>
      </section>

      {/* Consultation Section */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att förstå vilken behandling som passar dig bäst. Vi svarar på alla dina frågor.
            </p>
            <Link to="/HittaBehandling" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArmarMan;
