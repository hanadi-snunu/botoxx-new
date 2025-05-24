import React, { useState } from "react";
import laserImg from "../../../img/injection.png"; // byt till din faktiska bild
import ConsultationImage from "../../../img/piccc.jpg";
import { Link } from "react-router-dom";
import "../../../css/Massage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Frax1550 = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const toggleQuestion = (index) => setOpenQuestion(openQuestion === index ? null : index);

  const faqQuestions = [
    {
      question: "Hur fungerar FRAX 1550?",
      answer: "Frax 1550 är en fraktionerad laser som skapar små kontrollerade skador i huden vilket stimulerar kollagenproduktionen."
    },
    {
      question: "Vad kan behandlingen hjälpa mot?",
      answer: "Behandlingen används bland annat mot ärr, fina linjer, ojämn hudstruktur och förstorade porer."
    },
    {
      question: "Hur lång är återhämtningstiden?",
      answer: "De flesta upplever lätt rodnad och svullnad i några dagar, men kan återgå till vardagliga aktiviteter ganska snart."
    },
    {
      question: "Hur många behandlingar behövs?",
      answer: "Antalet varierar men vanligtvis rekommenderas en kur på 3–5 behandlingar."
    },
  ];

  const treatments = [
    {
      image: laserImg,
      title: "Frax 1550 | Ansikte",
      description: "Förbättra hudstruktur och minska fina linjer i ansiktet.",
      link: "/Frax1550-Ansikte"
    },
    {
      image: laserImg,
      title: "Frax 1550 | Ansikte + Hals",
      description: "Behandling för både ansikte och hals med fraktionerad laser.",
      link: "/Frax1550-Ansikte-Hals"
    },
    {
      image: laserImg,
      title: "Frax 1550 | Ansikte + Hals + Dekolletage",
      description: "Omfattande behandling för övre delen av kroppen.",
      link: "/Frax1550-Ansikte-Hals-Dekolletage"
    },
    {
      image: laserImg,
      title: "Frax 1550 | Hals eller Dekolletage",
      description: "Fokuserad behandling för hals eller dekolletage.",
      link: "/Frax1550-Hals-Dekolletage"
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
      <header className="massage-header" style={{ backgroundImage: `url(${laserImg})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Nordlys | Frax 1550</h1>
          <p className="massage-description">Fraktionerad laser för djupverkande hudföryngring</p>
        </div>
      </header>

      <section className="massage-info-section">
        <div className="massage-info-container only-text">
          <div className="massage-info-text-container">
            <h2 className="info-title">Nordlys | Frax 1550</h2>
            <p className="info-text">
              Denna laserbehandling är en del av Nordlyssystemet, en fraktionerad laser är en behandling som behandlar en del av huden genom att göra tusentals små kontrollerade skador i vävnaden och kollagenstimulerande på djupet vilket ger minimala skador och därmed snabb återhämtning.
            </p>
            <p className="info-text">
              Fraktionerad laser är effektiv på att behandla flertalet områden tack vare möjligheten att justera olika inställningar med Nordlys maskinen.
            </p>
            <p className="info-text"><strong>Frax fokuserar på områden som:</strong></p>
            <ul className="info-text">
              <li> Förstorade porer eller ojämn hudyta</li>
              <li> Rynkor och fina linjer</li>
              <li> Slapp och åldrande hy</li>
              <li> Kirurgiska ärr</li>
              <li> Acne ärr</li>
              <li> Hudstruktur</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="massage-treatments-section">
        <h2 className="massage-section-title">Tillgängliga Frax 1550-behandlingar</h2>
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

      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi hjälper dig att avgöra vilken Frax 1550-behandling som passar dina behov bäst.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frax1550;
