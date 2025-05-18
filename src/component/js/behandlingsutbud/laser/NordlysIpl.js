import React, { useState } from "react";
import laserImg from "../../../img/injection.png"; // byt till din faktiska bild
import ConsultationImage from "../../../img/piccc.jpg";
import { Link } from "react-router-dom";
import "../../../css/Massage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NordlysIPL = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const toggleQuestion = (index) => setOpenQuestion(openQuestion === index ? null : index);

  const faqQuestions = [
    {
      question: "Hur fungerar IPL-behandling?",
      answer: "IPL använder intensivt pulserande ljus för att behandla hudproblem som pigmentfläckar, blodkärl och rodnad."
    },
    {
      question: "Gör behandlingen ont?",
      answer: "Behandlingen är relativt skonsam men kan kännas som ett lätt snärtande obehag."
    },
    {
      question: "Hur många behandlingar behövs?",
      answer: "Vanligtvis rekommenderas en kur på 3–5 behandlingar med några veckors mellanrum."
    },
    {
      question: "Finns det någon återhämtningstid?",
      answer: "Nej, du kan återgå till vardagen direkt men bör undvika sol några dagar efter."
    },
  ];

  const treatments = [
    {
      image: laserImg,
      title: "IPL | Mindre område",
      description: "Behandla små pigmentfläckar eller kärl lokalt.",
      link: "/IPL-MindreOmrade"
    },
    {
      image: laserImg,
      title: "IPL | Ansikte",
      description: "Förbättra hudton och minska rodnad i hela ansiktet.",
      link: "/IPL-Ansikte"
    },
    {
      image: laserImg,
      title: "IPL | Ansikte + Hals",
      description: "Kombinerad behandling för jämn hud på ansikte och hals.",
      link: "/IPL-Ansikte-Hals"
    },
    {
      image: laserImg,
      title: "IPL | Ansikte + Hals + Dekolletage",
      description: "Fulltäckande behandling för hela det övre området.",
      link: "/IPL-Ansikte-Hals-Dekolletage"
    },
    {
      image: laserImg,
      title: "IPL | Dekolletage eller Hals",
      description: "Fokuserad behandling på enskilt område.",
      link: "/IPL-Dekolletage-Hals"
    },
  ];

  const settings = {
    dots: true,
    infinite: treatments.length > 3,
    speed: 500,
    slidesToShow: Math.min(3, treatments.length),
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false, dots: true } },
    ],
  };

  return (
    <div>
      {/* Header */}
      <header className="massage-header" style={{ backgroundImage: `url(${laserImg})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Nordlys | IPL</h1>
          <p className="massage-description">Skonsam och effektiv behandling med intensivt pulserande ljus</p>
        </div>
      </header>

      {/* Info Text */}
      <section className="massage-info-section">
        <div className="massage-info-container only-text">
          <div className="massage-info-text-container">
            <h2 className="info-title">Nordlys | IPL</h2>
            <p className="info-text">
              Intense Pulsed Light också kallad för IPL, detta är en annan laser teknik som Nordlys även erbjuder.
              Denna behandlingen använder intensivt pulserande ljus för att behandla olika hudproblem.
            </p>
            <p className="info-text">
              Behandlingen är skonsam mot huden och ger snabba resultat med minimal återhämningstid.
              Genom att använda olika filter kan man anpassa behandlingen mot de hudproblem som önskas att behandlas.
            </p>
            <p className="info-text"><strong>IPL behandlar områden inom:</strong></p>
            <ul className="info-text">
              <li>- Pigmentfläckar</li>
              <li>- Rosacea</li>
              <li>- Blodkärl</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="massage-treatments-section">
        <h2 className="massage-section-title">Tillgängliga IPL-behandlingar</h2>
        <Slider {...settings}>
          {treatments.map((t, index) => (
            <div key={index} className="massage-treatment-card">
              <img src={t.image} alt={t.title} className="massage-treatment-image" />
              <div className="massage-treatment-content">
                <h3 className="massage-treatment-title">{t.title}</h3>
                <p className="massage-treatment-description">{t.description}</p>
                <Link to={t.link} className="massage-treatment-link">Läs mer</Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* FAQ */}
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

      {/* Consultation */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi hjälper dig att avgöra vilken IPL-behandling som passar dina behov bäst.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NordlysIPL;
