import React from 'react';
import massage1 from '../../../img/massage1.jpg';
import { Link } from 'react-router-dom';
import '../../../css/Massage.css';
import ConsultationImage from '../../../img/piccc.jpg';

const Fotmassage = () => {
  return (
    <div>
      <header className="massage-header" style={{ backgroundImage: `url(${massage1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Fotmassage</h1>
          <p className="massage-description">
            En lugnande behandling som fokuserar på fötter och underben för att lindra trötthet och förbättra cirkulationen.
          </p>
        </div>
      </header>

      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Fotmassage</h3>
            <p className="relax-treatment-description">
             En anpassad behandling för fötterna som aldrig får den kärlek de förtjänar, varje dag står vi och belastar våra fötter och i denna behandling får fötterna precis det dem behöver. Har du besvär eller vill bara koppla av belastningen på fötterna är detta alternativt perfekt för dig. 
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 30 min</li>
                <li><strong>Pris:</strong> 450 kr</li>
                <li><strong>Typ av massage:</strong> Fot- och underbensmassage</li>
                <li><strong>Fördelar:</strong> Avslappning, förbättrad blodcirkulation, minskad svullnad</li>
                <li><strong>Rekommenderat för:</strong> Personer med trötta, svullna eller belastade fötter</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/fotmassage-30-min-3225153" className="relax-treatment-button">
                  Boka Fot Massage
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
            Undvik att smörja in fötterna precis innan besöket. Kom gärna i bekväma kläder som gör det enkelt att få tillgång till fötter och underben.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Du kan känna dig avslappnad och uppiggad i benen efter massagen. För bästa effekt, vila en stund och drick vatten.
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

export default Fotmassage;
