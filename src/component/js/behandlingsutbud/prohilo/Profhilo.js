import React, { useState } from "react";
import injection2 from "../../../img/injection.png";
import ConsultationImage from "../../../img/piccc.jpg";
import "../../../css/Massage.css";

const Prohilo = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqQuestions = [
    {
      question: "Vad är Profhilo?",
      answer: "Profhilo är en bioremodellerande behandling som innehåller högkoncentrerad hyaluronsyra och förbättrar hudens struktur och elasticitet.",
    },
    {
      question: "Hur ofta bör man göra behandlingen?",
      answer: "Det rekommenderas att man gör 2 behandlingar med 4 veckors mellanrum och därefter underhållsbehandling var 6:e månad.",
    },
    {
      question: "När ser man resultatet?",
      answer: "En märkbar förbättring sker redan efter 4 veckor, men det slutliga resultatet syns efter andra behandlingen.",
    },
    {
      question: "Gör behandlingen ont?",
      answer: "Behandlingen innebär 10 stick i ansiktet, men obehaget är oftast minimalt och snabbt övergående.",
    },
    {
      question: "Finns det några biverkningar?",
      answer: "Milda reaktioner som rodnad, svullnad eller blåmärken kan förekomma, men går vanligtvis över inom ett par dagar.",
    }
  ];

  return (
    <div>
      {/* Header */}
      <header className="massage-header" style={{ backgroundImage: `url(${injection2})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Profhilo</h1>
          <p className="massage-description">
            Få spänstigare, fastare och mer återfuktad hud på ett naturligt sätt.
          </p>
        </div>
      </header>

      {/* Info Section */}
      <section className="massage-info-section">
        <div className="massage-info-container">
          <img src={injection2} alt="Profhilo behandling" className="massage-info-image" />
          <div className="massage-info-text-container">
            <h2 className="info-title">Profhilo</h2>
            <p className="info-text">
              Profhilo är en filler baserad på hyaluronsyra, men den skiljer sig från de traditionella fillers som ofta används till att bygga och modellera huden.
            </p>
            <p className="info-text">
              Den beskrivs istället som en vävnadsstärkande filler med högkoncentrerad, stabiliserad hyaluronsyra som injiceras strax under hudytan. Där flyter den sedan ut och fortsätter att dra till sig fukt, vilket ger en fylligare, slätare och fastare hudstruktur. En behandling innebär totalt tio stick i ansiktet.
            </p>
            <p className="info-text">
              <strong>Rekommenderat behandlingsprotokoll:</strong> 2 behandlingar på 4 veckor, därefter underhåll ca var 6:e månad beroende på hudtyp och ålder.
            </p>
            <p className="info-text">
              Slutresultatet visar sig 4 veckor efter 2:a behandlingen, men förbättring märks ofta redan efter första.
            </p>

            <div className="relax-treatment-button-wrapper">
              <a
                href="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/biostimulerare-profhilo-kurx2-1040539"
                target="_blank"
                rel="noopener noreferrer"
                className="relax-treatment-button"
              >
                Boka Profhilo
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="separator-line">
        <span className="separator-dot">•</span>
      </div>

      {/* FAQ Section */}
      <section className="massage-faq-section">
        <h2 className="massage-faq-title">Vanliga frågor</h2>
        <div className="massage-faq-list">
          {faqQuestions.map((item, index) => (
            <div key={index} className="massage-faq-item">
              <div className="massage-faq-question" onClick={() => toggleQuestion(index)}>
                <span>{item.question}</span>
                <span>{openQuestion === index ? "-" : "+"}</span>
              </div>
              {openQuestion === index && <p className="massage-faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi hjälper dig gärna att hitta rätt biostimulerande behandling för din hud.
            </p>
            <a href="/Bokatid" className="consultation-button">Boka nu</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prohilo;
