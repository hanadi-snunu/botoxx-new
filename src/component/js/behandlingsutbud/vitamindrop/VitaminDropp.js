import React, { useState } from "react";
import vitamindropImage from "../../../img/vitamindropp.png";
import ConsultationImage from "../../../img/piccc.jpg";
import { Link } from "react-router-dom";
import "../../../css/Massage.css"; 
import "../../../css/omoss.css";
const Vitamindrop = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div>
      {/* Header Section */}
     <div className="omoss-header-section">
  <img src={vitamindropImage} alt="Vitamindropp" className="omoss-hero" />
  <div className="omoss-overlay">
    <div className="omoss-content-block">
      <h1 className="omoss-title">Vitamindropp</h1>
      <p className="omoss-subtitle">
        Återfukta kroppen och fyll på med viktiga vitaminer och mineraler.
      </p>
    </div>
  </div>
</div>


      {/* Info Section */}
      <section className="massage-info-section">
        <div className="massage-info-container only-text">
          <div className="massage-info-text-container">
            <h2 className="info-title">Vitamin dropp</h2>
            <p className="info-text">
              Alla måste, före behandling, fylla i en hälsodeklaration med frågor rörande medicinsk historik, eventuell medicinering, allergier etcetera. Sjuksköterskan går igenom hälsodeklarationen före behandlingen samt boka in sig för en konsultation minst 48h innan.
            </p>
            <p className="info-text">
              Med vitamindropp får din kropp en dos av välbehövliga vitaminer, aminosyror och mineraler. Ett intravenöst vitamindropp hos oss ger näring åt kroppen på cellnivå och ökar balansen och välbefinnandet. Vitamindropp kan kombineras med alla våra behandlingar.
            </p>

            <h2 className="info-title">Varför ska man göra en sådan här behandling?</h2>
            <ul className="hydrafacial-info-list">
              <li>Förbättrar sömnen</li>
              <li>Förbättrar ämnesomsättningen</li>
              <li>Hjälper till att bibehålla en hälsosam hud, hår och nagelkvalité</li>
              <li>Vitamin D hjälper kroppen att absorbera kalcium och fosfor</li>
              <li>Stärker immunsystemet</li>
              <li>Förbättrar humöret</li>
            </ul>

            <p className="info-text">
              En av fördelarna med intravenöst givna vitaminer jämfört med de vitamintillskott som man äter är att man får en högre dos av vitaminer direkt in i blodbanan. Detta gör att kroppen potentiellt kan ta upp en större mängd av vitaminerna och eventuellt också snabbare.
            </p>

            <p className="info-text">
              En behandling med Vitamindropp hos oss tar cirka 45 minuter och under tiden sitter du bekvämt i våra behandlingsstolar i lugn och trevlig miljö.
            </p>

            <h2 className="info-title">Innehåll</h2>
            <p className="info-text">
              Retinol (A-vitamin), Kolekalciferol (D3-vitamin), E-vitamin, K1-vitamin, C-vitamin, B1-vitamin, B2-vitamin, B6-vitamin, B12-vitamin, B9-vitamin, B5-vitamin, B7-vitamin, B3-vitamin
            </p>

            <h2 className="info-title">Man ska inte göra vitamindropp</h2>
            <ul className="hydrafacial-info-list">
              <li>Om du är gravid</li>
              <li>Ammar</li>
              <li>Lever- eller njurproblem</li>
              <li>Lågt blodtryck</li>
              <li>Allergisk mot jordnötter eller sojabönor</li>
              <li>Om du har för mycket kalcium i blodet</li>
              <li>Om du får vitaminer från andra källor</li>
              <li>Tarmsjukdom</li>
              <li>Diabetes</li>
            </ul>

            <h2 className="info-title">B12</h2>
            <h3 className="info-title">Vad är B12 shot?</h3>
            <p className="info-text">
              Vitamin B12 är en vattenlöslig vitamin som ges intramuskulärt/gluteus maximus. Du får i dig B12 naturligt via rött kött, fågel, skaldjur, ägg och mjölk så den är perfekt för exempelvis veganer och vegetarianer.
            </p>
            <ul className="hydrafacial-info-list">
              <li>Boostar energinivån</li>
              <li>Normal hjärnfunktion</li>
              <li>Boostar humör</li>
              <li>Ökar ämnesomsättning</li>
              <li>Underlättar viktminskning</li>
              <li>Hälsosammare hår, naglar och hud</li>
              <li>Minskar risk för hjärtsjukdomar</li>
              <li>Motverkar benskörhet</li>
            </ul>

            <h3 className="info-title">Vem ska inte göra denna behandlingen?</h3>
            <ul className="hydrafacial-info-list">
              <li>Känslighet mot B12</li>
              <li>Njurproblem</li>
              <li>Hypokalemi</li>
              <li>Tar metformin</li>
              <li>Järn- och folatbrist</li>
            </ul>

            <h3 className="info-title">Hur ofta ska man ta B12 injektioner?</h3>
            <p className="info-text">
              Frekvenser av din behandling är helt beroende på din kropps individuella behov. Faktorer såsom din ålder, aktivitetsnivå, kroppsfett och generell energinivå påverkar.
            </p>
            <p className="info-text">
              Många patienter anser att regelbundna behandlingar är det bästa sättet att bibehålla sina resultat. För patienter som har en naturlig brist kan en gång i månaden vara ideellt. För andra patienter kan det räcka med en behandling var 3:e eller 4:e månad.
            </p>

            <h3 className="info-title">Hur snabbt märker man resultat?</h3>
            <p className="info-text">
              Vill du boosta din energi och ämnesomsättning kan du märka en skillnad redan efter 3 dagar. Är det fettförbränning du är ute efter och gör regelbundna behandlingar kan du se resultat efter någon månad.
            </p>
          </div>
        </div>
      </section>

      <div className="relax-treatment-button-wrapper">
                      <Link to="https://www.bokadirekt.se/places/house-of-aesthetics-34817?rs=1040534" className="relax-treatment-button">
                        Boka Vitamindropp
                      </Link>
                    </div>

      <div className="separator-line">
        <span className="separator-dot">•</span>
      </div>

      {/* Consultation Section */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi hjälper dig gärna att hitta rätt behandling för ditt välmående och din hälsa.
            </p>
            <Link to="/HittaBehandling" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vitamindrop;
