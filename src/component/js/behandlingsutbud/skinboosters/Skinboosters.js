import React, { useState } from "react";
import injection2 from "../../../img/skinbooster.png";
import ConsultationImage from "../../../img/piccc.jpg";
import { Link } from "react-router-dom";
import "../../../css/Massage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skinbooster = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqQuestions = [
    {
      question: "Vad är en skinbooster?",
      answer: "En skinbooster är en behandling som återfuktar huden på djupet med hjälp av hyaluronsyra och andra näringsämnen för att förbättra hudens kvalitet och lyster."
    },
    {
      question: "Hur många behandlingar behövs?",
      answer: "Ofta rekommenderas en kur på 3 behandlingar med 2–4 veckors mellanrum för bästa resultat."
    },
    {
      question: "När ser man resultat?",
      answer: "Du kan ofta se förbättring redan efter första veckan men resultatet förbättras gradvis under hela kuren."
    },
    {
      question: "Hur länge håller resultatet?",
      answer: "Resultatet från skinboosters kan hålla i flera månader, ofta 6–12 månader beroende på produkt och hudtyp."
    },
    {
      question: "Vad ska jag tänka på efter behandlingen?",
      answer: "Undvik träning, alkohol, smink och direkt solljus de första 24–48 timmarna."
    }
  ];

  const treatments = [
    {
      image: injection2,
      title: "Skinbooster | Long Lasting",
      description: "Återfuktar huden och förbättrar hudstruktur med långvarig effekt.",
      link: "/Skinbooster-LongLasting"
    },
    {
      image: injection2,
      title: "Skinbooster | Restylane",
      description: "Ger näring och lyster samt minskar fina linjer och torrhet.",
      link: "/Skinbooster-Restylane"
    },
    {
      image: injection2,
      title: "Skinbooster | Ejal 40",
      description: "Stimulerar kollagen och elastin för fastare och återfuktad hud.",
      link: "/Skinbooster-Ejal40"
    },
    {
      image: injection2,
      title: "Skinbooster | Sunekos",
      description: "Motverkar mörka ringar, påsar, fina linjer och ger förbättrad lyster.",
      link: "/Skinbooster-Sunekos"
    },
     {
      image: injection2,
      title: "Skinbooster | RRS Eyes",
      description: "Ljusa upp och föryngra huden runt ögonen med en behandling som kombinerar hyaluronsyra, antioxidanter och vitaminer.",
      link: "/Skinbooster-RRSEyes"
    },
    {
  image: injection2,
  title: "Skinbooster | Profhilo",
  description: "Bioremodellerande behandling som förbättrar hudens struktur och elasticitet.",
  link: "/Profhilo"
}

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
      {/* Header Section */}
      <header className="massage-header" style={{ backgroundImage: `url(${injection2})` }}>
        <div className="massage-overlay">
          <h1 className="massage-title">Skinboosters</h1>
          <p className="massage-description">
            Återfuktning och hudförbättring från insidan.
          </p>
        </div>
      </header>

      {/* Info Section */}
      <section className="massage-info-section">
        <div className="massage-info-container">
          <img src={injection2} alt="Skinbooster" className="massage-info-image" />
          <div className="massage-info-text-container">
            <h2 className="info-title">Skinbooster – Återfuktning på djupet för strålande hud</h2>
            <p className="info-text">
              Skinbooster är en injektionsbehandling som bygger på hyaluronsyra – ett ämne som finns naturligt i kroppen och har en unik förmåga att binda fukt. Till skillnad från traditionella fillers ger skinbooster ingen volym, utan fokuserar på att förbättra hudens kvalitet, struktur och lyster.
            </p>
            <p className="info-text">
              Behandlingen återfuktar huden inifrån och stimulerar kollagenproduktionen vilket resulterar i en fastare, mjukare och mer elastisk hud. Den passar perfekt för torr, trött eller åldrande hud och är särskilt effektiv på områden som ansikte, hals, dekolletage och händer.
            </p>
            <p className="info-text">
              Skinboosters är även ett utmärkt komplement till andra estetiska behandlingar och rekommenderas som en kur om flera behandlingar för bästa resultat. Effekten är naturlig och gradvis – du kommer att uppleva en förbättring av hudens utseende och känsla över tid.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Slider */}
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
              Vi hjälper dig gärna att hitta rätt skinboosterbehandling som passar just dina behov.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skinbooster;