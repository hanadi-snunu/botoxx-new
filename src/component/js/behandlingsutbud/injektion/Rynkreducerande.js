import React, { useState } from "react";
import injection4 from "../../../img/bild4.jpg";
import injection5 from "../../../img/bild5.jpg";
import injection2 from "../../../img/injection.png";
import ConsultationImage from "../../../img/piccc.jpg";
import { Link } from "react-router-dom";
import "../../../css/Massage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Rynkreducerande = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const treatments = [
    {
      image: injection2,
      title: "Pannan",
      description: "För att släta ut horisontella rynkor.",
      link: "/Rynkbehandling-Panna"
    },
    {
      image: injection2,
      title: "Glabella (bekymmersrynkan)",
      description: "Mellan ögonbrynen för att minska vertikala rynkor.",
      link: "/Rynkbehandling-Glabella"
    },
    {
      image: injection2,
      title: "Kråksparkar",
      description: "Mot fina linjerna runt ögonen.",
      link: "/Rynkbehandling-Krakparkar"
    },
    {
      image: injection2,
      title: "Rynkor runt munnen",
      description: "(Periorala linjer).",
      link: "/Rynkbehandling-Mun"
    },
    {
      image: injection2,
      title: "Browlift",
      description: "För att få ett lyft i ögonbrynen.",
      link: "/Rynkbehandling-Browlift"
    },
    {
      image: injection2,
      title: "Bunnylines",
      description: "Minska skrattrynkor runt näsryggen.",
      link: "/Rynkbehandling-Bunnylines"
    },
    {
      image: injection2,
      title: "Nästippen",
      description: "För att lyfta nästippen.",
      link: "/Rynkbehandling-Nastipp"
    },
    {
      image: injection2,
      title: "Gummysmile",
      description: "Lyfter överläppen om du visar mer tandkött än önskat vid leende.",
      link: "/Rynkbehandling-Gummysmile"
    },
    {
      image: injection2,
      title: "Lipflip",
      description: "Avslappning av leendets muskel för att framhäva bredare överläpp.",
      link: "/Rynkbehandling-Lipflip"
    },
    {
      image: injection2,
      title: "Sura mungipor",
      description: "Slätar ut linjer vid mungipor och ger gladare utseende.",
      link: "/Rynkbehandling-Mungipor"
    },
    {
      image: injection2,
      title: "Apelsinhaka",
      description: "Jämnar ut gropar som bildas av muskelaktivitet i hakan.",
      link: "/Rynkbehandling-Apelsinhaka"
    },
    {
      image: injection2,
      title: "Platysma",
      description: "Behandlar horisontella och vertikala band på halsen.",
      link: "/Rynkbehandling-Platysma"
    },
    {
      image: injection2,
      title: "Hyperhidros",
      description: "Behandling av överdriven svettning.",
      link: "/Rynkbehandling-Hyperhidros"
    },
    {
      image: injection2,
      title: "Käkmuskler (masseter)",
      description: "Lindrar spänningar och ger en slimmande effekt.",
      link: "/Rynkbehandling-Masseter"
    },
    {
      image: injection2,
      title: "Trapezius",
      description: "Lindrar spänningar i axlar genom avslappnande injektion.",
      link: "/Rynkbehandling-Trapezius"
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
      <header className="massage-header" style={{ backgroundImage: `url(${injection4})` }}>

        <div className="massage-overlay">
          <h1 className="massage-title">Rynkreducerande injektionsbehandlingar</h1>
          <p className="massage-description">
            Förbättra ditt utseende och minska synliga rynkor med hjälp av muskelavslappnande behandlingar.
          </p>
        </div>
      </header>

      {/* Info Section */}
      <section className="massage-info-section">
        
        <div className="massage-info-container">
          <img src={injection5} alt="Rynkbehandling" className="massage-info-image" />
          <div className="massage-info-text-container">
            <h2 className="info-title">Rynkreducerande Injektionsbehandlingar</h2>
            <p className="info-text">
              Vad är rynkreducerande injektionsbehandling: Ett muskelavslappnande läkemedel som framställs från ett renat protein, botulinumtoxin. Det används främst inom estetisk medicin för att släta ut rynkor och fina linjer genom att tillfälligt minska muskelaktivitet. Toxin blockerar nervsignaler till de muskler som orsakar rynkor, vilket leder till ett jämnare och mer avslappnat utseende.
            </p>
            <h2 className="info-title">Vad kan behandlas?</h2>
            <p className="info-text">
              Våra behandlingar med muskelavslappnande injektioner riktar sig mot specifika områden för att reducera rynkor och förbättra symmetrin i ansiktet. Nedan ser du de vanligaste behandlingsområdena.
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
    {[
      {
        question: "Vad är botox och hur fungerar det?",
        answer:
          "Botox är ett muskelavslappnande läkemedel som temporärt blockerar nervsignaler till muskler, vilket slätar ut rynkor.",
      },
      {
        question: "Hur lång tid tar behandlingen?",
        answer: "Behandlingen tar oftast mellan 10–30 minuter beroende på antal områden.",
      },
      {
        question: "När ser man resultatet?",
        answer: "Effekten börjar synas efter 3–5 dagar, och maximal effekt ses efter ca 14 dagar.",
      },
      {
        question: "Hur länge håller resultatet?",
        answer: "Vanligtvis håller resultatet i 3–5 månader. Upprepade behandlingar kan ge längre effekt.",
      },
      {
        question: "Är behandlingen säker?",
        answer:
          "Ja, botox är en välbeprövad och säker behandling när den utförs av medicinskt utbildad personal.",
      },
    ].map((item, index) => (
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
              Vi hjälper dig gärna att hitta rätt behandling som passar just dina behov.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rynkreducerande;