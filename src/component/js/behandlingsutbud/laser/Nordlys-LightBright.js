
import React, { useState } from "react";
import laserImg from "../../../img/nordlysbild.jpg";
import laserImg1 from "../../../img/bild1.jpg";
import ConsultationImage from "../../../img/kostnadsfrikonsultation.png";
import { Link } from "react-router-dom";
import "../../../css/Massage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LightBright = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const toggleQuestion = (index) => setOpenQuestion(openQuestion === index ? null : index);

  const faqQuestions = [
    {
      question: "Vad är Light & Bright?",
      answer: "En kombinationsbehandling som använder både Frax och IPL för förbättrad hudstruktur och ton."
    },
    {
      question: "Hur många behandlingar behövs?",
      answer: "Det varierar individuellt, men oftast krävs 3–5 behandlingar för bästa resultat."
    },
    {
      question: "Gör behandlingen ont?",
      answer: "Mild till måttlig värme kan kännas under behandlingen, men den är generellt väl tolererad."
    },
    {
      question: "Finns det någon återhämtningstid?",
      answer: "Lätt rodnad kan uppstå men du kan oftast återgå till vardagen direkt efter behandlingen."
    }
  ];

  const treatments = [
    {
      image: laserImg,
      title: "Light & Bright | Ansikte",
      description: "Hudföryngring för hela ansiktet.",
      link: "/LightBright-Ansikte"
    },
    {
      image: laserImg,
      title: "Light & Bright | Ansikte + Hals",
      description: "Kombinerad behandling för både ansikte och hals.",
      link: "/LightBright-Ansikte-Hals"
    },
    {
      image: laserImg,
      title: "Light & Bright | Ansikte + Hals + Dekolletage",
      description: "Behandla hela det övre hudområdet samtidigt.",
      link: "/LightBright-Ansikte-Hals-Dekolletage"
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
     <div className="omoss-header-section">
  <img src={laserImg1} alt="Nordlys Light & Bright" className="omoss-hero" />
  <div className="omoss-overlay">
    <div className="omoss-content-block">
      <h1 className="omoss-title">Nordlys | Light & Bright</h1>
      <p className="omoss-subtitle">
        Kombinerad laserbehandling för synlig hudföryngring.
      </p>
    
    </div>
  </div>
</div>


      <section className="massage-info-section">
        <div className="massage-info-container only-text">
          <div className="massage-info-text-container">
            <h2 className="info-title">Nordlys | Light & Bright</h2>
            <p className="info-text">
              En kombinationsbehandling som har visat sig vara väldigt populär är Light and Bright vilket består av en behandling av Frax och IPL laser.
              En extra effektiv behandling som arbetar på hudföryngring på flera områden parallellt.
            </p>
            <p className="info-text">
              Detta laserenegrin som behandlingen erbjuder främjar hudens naturliga läkeprocess vilket resulterar i att hudproblemen växer ihop och blir mindre synliga.
              Hur många behandlingar som krävs är individuellt, det hjälper våra experter dig med på din konsultations tid.
            </p>
            <p className="info-text"><strong>Kombinationen av fraktionerad laser behandlar:</strong></p>
            <ul className="info-text">
              <li> Ojämn hudton</li>
              <li> Rodnad</li>
              <li> Kärl och pigmenteringar</li>
              <li> Uppstramning av huden</li>
              <li> Ökad kollagen produktion</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="massage-treatments-section">
        <h2 className="massage-section-title">Tillgängliga Light & Bright-behandlingar</h2>
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
              Vi hjälper dig att avgöra vilken Light & Bright-behandling som passar dina behov bäst.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightBright;
