import React from 'react';
import massage1 from '../../../img/massage1.jpg';
import { Link } from 'react-router-dom';
import '../../../css/Massage.css';
import ConsultationImage from '../../../img/piccc.jpg';

const Helkroppsmassage = () => {
  return (
    <div>
      <header className="massage-header" style={{ backgroundImage: `url(${massage1})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Helkroppsmassage</h1>
          <p className="massage-description">
            En klassisk helkroppsmassage som löser upp spänningar, förbättrar blodcirkulationen och ger kroppen total avslappning.
          </p>
        </div>
      </header>

      <div>
        <div className="relax-treatment-card">
          <div className="relax-treatment-content">
            <h3 className="relax-treatment-title">Helkroppsmassage</h3>
            <p className="relax-treatment-description">
              Djupgående triggerpoint-massage för dig som har smärta i ryggen eller andra problemområden. Genom att fokusera på specifika punkter i kroppen hjälper massören till att lösa upp muskelspänningar och lindra värk. Behandlingen är perfekt för att återskapa rörelsefrihet och minska obehag från långvarig muskelstelhet. Behandlingen kan betalas med Epassi/Friskvård. 
            </p>
          </div>
          <div className="relax-treatment-details-container">
            <div className="relax-treatment-details">
              <ul>
                <li><strong>Behandlingstid:</strong> 60 eller 90 min</li>
                <li><strong>Pris:</strong> 690 kr / 990 kr</li>
                <li><strong>Typ av massage:</strong> Klassisk helkropp</li>
                <li><strong>Fördelar:</strong> Minskad muskelspänning, ökad cirkulation, total avslappning</li>
                <li><strong>Rekommenderat för:</strong> Dig som vill behandla hela kroppen eller ha en längre avslappningsstund</li>
              </ul>
              <div className="relax-treatment-button-wrapper">
                <Link to="https://www.bokadirekt.se/places/house-of-aesthetics-34817" className="relax-treatment-button">
                  Boka Helkropps Massage
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
            Drick gärna vatten innan behandlingen och kom gärna några minuter innan din tid för att landa och varva ner. Undvik tunga måltider strax innan.
          </p>
          <p className="session-text">
            Tala gärna om för din terapeut om du har specifika problemområden eller önskemål kring tryck.
          </p>
        </div>
        <div className="session-block">
          <h2 className="session-title">Efter behandlingen</h2>
          <p className="session-text">
            Kroppen kan kännas trött eller varm efteråt. Drick vatten och vila gärna efter massagen för att få ut mesta möjliga effekt.
          </p>
          <p className="session-text">
            Massagen hjälper kroppen att släppa på slaggprodukter – ge dig själv tid att återhämta dig och njuta av resultatet.
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

export default Helkroppsmassage;
