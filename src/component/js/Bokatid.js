import React from 'react';
import { Link } from "react-router-dom";
import '../css/Bokatid.css'; // Använd filvägen för din CSS-fil
import '../css/omoss.css';
import BookingHeaderImage from "../img/bild1.jpg"; // Lägg till rätt bild för första sektionen


const BokaTid = () => {
  return (
    <div>
      {/* Första sektionen - Bokning Hero */}
      <div className="omoss-header-section">
  <img src={BookingHeaderImage} alt="" className="omoss-hero" />
  <div className="omoss-overlay">
    <div className="omoss-content-block">
      <h1 className="omoss-title">Boka tid</h1>
      <p className="omoss-subtitle">
        Här kan du boka tid till våra kliniker. Du kan både boka konsultation och behandlingar via länkarna nedan.
      </p>
    </div>
  </div>
</div>


      {/* Andra sektionen - BokaDirekt */}
      <div className="booking-bokadirekt">
        <h2 className="booking-bokadirekt-title">Boka tid via BokaDirekt</h2>
        <p className="booking-bokadirekt-subtitle">
          Boka tid via BokaDirekt. Du hittar enkelt en tid som passar dig.
        </p>
        <a href="https://www.bokadirekt.se/places/house-of-aesthetics-34817" target="_blank" rel="noopener noreferrer" className="booking-bokadirekt-button">
          BokaDirekt
        </a>
      </div>

      {/* Tredje sektionen - Information */}
      <div className="booking-info">
        <div className="booking-info-column">
          <h3 className="booking-info-title">Konsultation</h3>
          <p className="booking-info-text">
           Enligt den nya lagen måste du boka en konsultation 48 h innan din injektionsbehandling, dvs om du aldrig tidigare genomfört önskad behandling eller om det gått mer än sex månader sedan du genomförde behandlingen. Alla våra konsultationer är kostnadsfria. Under konsultationen svarar vi på dina frågor och ger rekommendationer om vilka behandlingar som passar dig bäst. Vi går igenom risker och biverkningar. 
          </p>
        </div>
        <div className="booking-info-column">
          <h3 className="booking-info-title">Avboka</h3>
          <p className="booking-info-text">
            Avbokning ska ske senast 24 timmar innan din bokade tid. Vid senare avbokning eller uteblivet besök debiteras du dessvärre en avgift.
          </p>
        </div>
        <div className="booking-info-column">
          <h3 className="booking-info-title">Betalning</h3>
          <p className="booking-info-text">
            Vi erbjuder betalning med bankkort, Swish, Klarna eller Qliro.
Observera att vi inte tar emot kontanter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BokaTid;
