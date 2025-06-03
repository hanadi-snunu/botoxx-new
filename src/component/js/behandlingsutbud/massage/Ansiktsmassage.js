import React from 'react';
import massage1 from '../../../img/massage1.jpg';
import { Link } from 'react-router-dom';
import '../../../css/Massage.css';
import ConsultationImage from '../../../img/piccc.jpg';

const AnsiktsMassage = () => {
  return (
    <div>
      <header className="massage-header" style={{ backgroundImage: `url(${massage1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Ansiktsmassage</h1>
          <p className="massage-description">
            En skön ansiktsmassage som stimulerar cirkulationen och ger en känsla av lyx och välbefinnande.
          </p>
        </div>
      </header>

      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Ansiktsmassage</h3>
            <p className="relax-treatment-description">
              Unna dig själv en lyxig stund med en av våra mest omtyckta behandlingar! En ansiktsmassage främjar cirkulationen och ger en härlig känsla av avkoppling. Vår skickliga hudterapeut kommer dessutom att förgylla din upplevelse med en avslappnande massage för halsen och dekolletaget. Behandlingen kan betalas med Epassi/Friskvård. 
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 30 min</li>
                <li><strong>Pris:</strong> 450 kr</li>
                <li><strong>Fördelar:</strong> Förbättrad cirkulation, avslappning, hudföryngring</li>
                <li><strong>Rekommenderat för:</strong> Alla som vill ha en avslappnande och föryngrande ansiktsbehandling</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
    <Link to="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/ansiktsmassage-30-min-3016719" className="relax-treatment-button">
        Boka Ansikts Massage
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
            Kom gärna osminkad och redo att koppla av.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Undvik att tvätta ansiktet med starka produkter direkt efter behandlingen.
          </p>
        </div>
      </section>

      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att välja rätt behandling.
            </p>
            <Link to="/HittaBehandling" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnsiktsMassage;
