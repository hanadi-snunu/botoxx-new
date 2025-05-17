import React, { useState } from "react";
import injection2 from "../../../img/injection.png";
import ConsultationImage from "../../../img/piccc.jpg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarboxyCellutrix = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const treatments = [
    {
      image: injection2,
      title: "RRS Cellutrix",
      description: "Minskar celluliter och jämnar ut hudstruktur.",
      link: "/Cellutrix-RRS"
    },
    {
      image: injection2,
      title: "Carboxy",
      description: "Behandling med koldioxid för huduppstramning och fettminskning.",
      link: "/Carboxy"
    },
    {
      image: injection2,
      title: "Carboxy Ögon",
      description: "Förbättrar hudstrukturen och minskar påsar under ögonen.",
      link: "/Carboxy-Ogon"
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

  const faqQuestions = [
    {
      question: "Hur många behandlingar behövs?",
      answer: "För celluliter rekommenderas 4–6 behandlingar med cirka 1 veckas intervall. För fettdepåer kan det krävas 1–5 behandlingar beroende på område."
    },
    {
      question: "Är behandlingarna smärtsamma?",
      answer: "De flesta upplever endast ett lätt obehag. Några områden kan vara känsligare än andra."
    },
    {
      question: "När ser man resultat?",
      answer: "För Cellutrix ses ofta resultat efter cirka 2 månader. Carboxy kan ge snabbare förbättring beroende på område."
    },
    {
      question: "Finns det några biverkningar?",
      answer: "Lätt svullnad, rodnad eller blåmärken kan förekomma tillfälligt efter behandling."
    },
    {
      question: "Vilka bör undvika behandlingen?",
      answer: "Gravida, personer med hjärt- och kärlsjukdomar, högt blodtryck, aktiv akne eller andra medicinska tillstånd bör avstå."
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${injection2})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Carboxy & Cellutrix</h1>
          <p className="massage-description">
            Avancerade behandlingar för att förbättra hudens struktur, fasthet och minska fettdepåer.
          </p>
        </div>
      </header>

      {/* Info Section */}
      <section className="massage-info-section">
        <div className="massage-info-container">
          <img src={injection2} alt="Carboxy behandling" className="massage-info-image" />
          <div className="massage-info-text-container">
            <h2 className="info-title">Carboxy och Cellutrix</h2>
            <p className="info-text">
              Carboxy och Cellutrix är två effektiva behandlingar som riktar sig mot hudens struktur, fettdepåer och celluliter. De används för att stimulera cirkulation, minska oönskade fettansamlingar och förbättra hudens fasthet.
            </p>
            <p className="info-text">
              Behandlingarna är minimalt invasiva och kan användas på flera områden, inklusive lår, mage, ansikte och ögonområdet.
            </p>
            <p className="info-text">
              För bästa resultat rekommenderas flera behandlingstillfällen, ofta med en veckas mellanrum.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="massage-treatments-section">
        <h2 className="massage-section-title">Behandlingsområden</h2>
        <Slider {...settings}>
          {treatments.map((treatment, index) => (
            <div key={index} className="massage-treatment-card">
              <img src={treatment.image} alt={treatment.title} className="massage-treatment-image" />
              <div className="massage-treatment-content">
                <h3 className="massage-treatment-title">{treatment.title}</h3>
                <p className="massage-treatment-description">{treatment.description}</p>
                <Link to={treatment.link} className="massage-treatment-link">Läs mer</Link>
              </div>
            </div>
          ))}
        </Slider>
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
            <h2 className="consultation-title">Boka en kostnadsfri konsultation</h2>
            <p className="consultation-description">
              Vi hjälper dig hitta rätt behandling för dina behov och mål.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarboxyCellutrix;
