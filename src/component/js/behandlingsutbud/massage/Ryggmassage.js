import React from 'react';
import massage1 from '../../../img/massage1.jpg';
import { Link } from 'react-router-dom';
import '../../../css/Massage.css';
import ConsultationImage from '../../../img/piccc.jpg';

const Ryggmassage = () => {
  return (
    <div>
      <header className="massage-header" style={{ backgroundImage: `url(${massage1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Ryggmassage</h1>
          <p className="massage-description">
            En fokuserad massagebehandling som löser upp spänningar i rygg, axlar och nacke. Perfekt för dig med stillasittande arbete eller muskelstelhet.
          </p>
        </div>
      </header>

      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Ryggmassage</h3>
            <p className="relax-treatment-description">
              Önskar du att endast fokusera på dina besvär i rygg och axlar så gör vi det i denna behandling. Här får du hela 30minuter att tillägna just till de besvären du har och ett bra alternativ att boka som uppföljning av tidigare helkroppsbehandling.  
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 30 min</li>
                <li><strong>Pris:</strong> 580 kr</li>
                <li><strong>Typ av massage:</strong> Fokuserad rygg-, nack- och skuldermassage</li>
                <li><strong>Fördelar:</strong> Minskar stelhet, spänningar och smärta i övre delen av kroppen</li>
                <li><strong>Rekommenderat för:</strong> Personer med kontorsarbete, stress eller återkommande ryggbesvär</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/ryggmassage-30-min-3225148" className="relax-treatment-button">
                  Boka rygg Massage
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
            Det är bra att undvika hård träning innan massagen. Kom gärna i lösa kläder för att känna dig bekväm före och efter.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Efter behandlingen kan du känna dig trött men avslappnad. Undvik tunga lyft eller hård träning samma dag och drick rikligt med vatten.
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

export default Ryggmassage;
