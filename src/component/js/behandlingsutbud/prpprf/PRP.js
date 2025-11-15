import React, { useState } from "react";
import injection2 from "../../../img/PRPPRF.png";
import injection3 from "../../../img/bild1.jpg";
import ConsultationImage from "../../../img/kostnadsfrikonsultation.png";
import { Link } from "react-router-dom";
import "../../../css/Massage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrpPrf = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqQuestions = [
    {
      question: "Vad är PRP/PRF?",
      answer:
        "PRP (Platelet-Rich Plasma) och PRF (Platelet-Rich Fibrin) är behandlingar där kroppens eget blod används för att stimulera hudens förnyelse och förbättra dess struktur."
    },
    {
      question: "Hur går behandlingen till?",
      answer:
        "Ett blodprov tas från dig och centrifugeras. Den utvunna plasman används sedan för behandling via injektion eller microneedling."
    },
    {
      question: "Vad är skillnaden mellan PRP och PRF?",
      answer:
        "PRF centrifugeras långsammare vilket ger en plasma som är mer volymbyggande än PRP och innehåller fler tillväxtfaktorer."
    },
    {
      question: "Hur många behandlingar behövs?",
      answer:
        "Vanligtvis rekommenderas en kur på 3–6 behandlingar med några veckors mellanrum, beroende på område och behov."
    },
    {
      question: "Vad bör man tänka på efter behandlingen?",
      answer:
        "Undvik träning, alkohol, sol och smink de första 24–48 timmarna. Följ specifika råd beroende på behandlat område."
    }
  ];

  const treatments = [
    {
      image: injection2,
      title: "PRF | Tear Trough",
      description: "Plasmarik behandling mot mörka ringar under ögonen.",
      link: "/PrpPrf-TearTrough"
    },
    {
      image: injection2,
      title: "PRP | Eksem & Psoriasis",
      description: "Lindrar hudbesvär genom regenerativ behandling med din egen plasma.",
      link: "/PrpPrf-EksemPsoriasis"
    },
    {
      image: injection2,
      title: "PRP | Ansikte",
      description: "Förbättrar hudens struktur, elasticitet och lyster.",
      link: "/PrpPrf-Ansikte"
    },
    {
      image: injection2,
      title: "PRP | Ansikte + Hals",
      description: "Kombinerad hudförbättring för ansikte och hals.",
      link: "/PrpPrf-AnsikteHals"
    },
    {
      image: injection2,
      title: "RRS | XL Hair",
      description: "Stimulera hårtillväxt och minska håravfall.",
      link: "/PrpPrf-RrsHair"
    },
    {
      image: injection2,
      title: "PRP | Hår",
      description: "Förbättra hårkvalitet och motverka håravfall med kroppens egen plasma.",
      link: "/PrpPrf-Har"
    }
  ];

  const settings = {
    dots: true,
    infinite: treatments.length > 3,
    speed: 500,
    slidesToShow: Math.min(3, treatments.length),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
    ]
  };

  return (
    <div>
      <div className="omoss-header-section">
  <img src={injection3} alt="PRP / PRF Behandlingar" className="omoss-hero" />
  <div className="omoss-overlay">
    <div className="omoss-content-block">
      <h1 className="omoss-title">PRP / PRF Behandlingar</h1>
      <p className="omoss-subtitle">
        Hud- och hårförbättring med kroppens egna resurser.
      </p>
    
    </div>
  </div>
</div>


      <section className="massage-info-section">
        <div className="massage-info-container">
          <img src={injection2} alt="PRP PRF" className="massage-info-image" />
          <div className="massage-info-text-container">
            <h2 className="info-title">Vad är PRP och PRF?</h2>
            <p className="info-text">
              PRP och PRF är naturliga behandlingsmetoder där din egen plasma används för att stimulera cellförnyelse, kollagenproduktion och förbättra hudens och hårets kvalitet.
            </p>
            <p className="info-text">
              PRF innehåller fler tillväxtfaktorer än PRP och har en mer volymgivande effekt, särskilt effektiv för områden som Tear Trough.
            </p>
            <p className="info-text">
              Dessa behandlingar passar både för hudföryngring och mot håravfall, och används även vid hudåkommor som eksem och psoriasis.
            </p>
            <p className="info-text">
              Blodprov tas vid varje behandlingstillfälle och bearbetas för att separera plasman, som sedan injiceras i det valda området.
            </p>
          </div>
        </div>
      </section>

      <section className="massage-treatments-section">
        <h2 className="massage-section-title">Behandlingsområde</h2>
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
              Vi hjälper dig gärna att hitta rätt PRP- eller PRF-behandling för dina behov.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrpPrf;
