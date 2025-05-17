import React, { useState } from "react";
import injection2 from "../../../img/injection.png";
import ConsultationImage from "../../../img/piccc.jpg";
import { Link } from "react-router-dom";
import "../../../css/Massage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Fillers = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqQuestions = [
    {
      question: "Vad är fillers?",
      answer: "Fillers är en geléliknande substans som innehåller hyaluronsyra, ett ämne som finns naturligt i kroppen och som används för att återställa volym och släta ut linjer i ansiktet.",
    },
    {
      question: "Hur länge håller en fillerbehandling?",
      answer: "Hållbarheten varierar beroende på typ av filler och behandlingsområde. Det kan vara mellan 6 till 18 månader.",
    },
    {
      question: "Gör en fillerbehandling ont?",
      answer: "Behandlingen är generellt sett inte smärtsam. En bedövningskräm kan användas vid behov och vissa fillers innehåller även lokalbedövning.",
    },
    {
      question: "Finns det några biverkningar?",
      answer: "Vanliga biverkningar är svullnad, blåmärken eller lätt rodnad. Dessa går oftast över inom några dagar.",
    },
    {
      question: "När ser man resultatet?",
      answer: "Resultatet syns oftast direkt efter behandlingen, men slutresultatet ses efter några dagar när eventuell svullnad lagt sig.",
    },
  ];

  const treatments = [
    {
      image: injection2,
      title: "Kindben",
      description: "Återskapa eller förstärk kindbenens konturer.",
      link: "/Fillers-Kindben"
    },
    {
      image: injection2,
      title: "Midcheek",
      description: "Återställ volymen mitt på kinden.",
      link: "/Fillers-Midcheek"
    },
    {
      image: injection2,
      title: "Käklinje",
      description: "Definiera käklinjen och skapa balans i ansiktet.",
      link: "/Fillers-Kaklinje"
    },
    {
      image: injection2,
      title: "Haka",
      description: "Förbättra hakans form och profil.",
      link: "/Fillers-Haka"
    },
    {
      image: injection2,
      title: "Nasolabialveck",
      description: "Minska synliga veck mellan näsa och mun.",
      link: "/Fillers-Nasolabialveck"
    },
    {
      image: injection2,
      title: "Tinning",
      description: "Återställ volym och förbättra konturer i tinningarna.",
      link: "/Fillers-Tinning"
    },
    {
      image: injection2,
      title: "Tear Trough",
      description: "Fyll ut under ögonen för piggare utseende.",
      link: "/Fillers-TearTrough"
    },
    {
      image: injection2,
      title: "Marionettlinjer",
      description: "Lyft sura mungipor och minska linjer.",
      link: "/Fillers-Marionettlinjer"
    },
    {
      image: injection2,
      title: "Hyalase",
      description: "Borttagning av fillers.",
      link: "/Fillers-Hyalase"
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
          <h1 className="massage-title">Fillers</h1>
          <p className="massage-description">
            Naturlig volym och föryngring anpassad efter dina behov.
          </p>
        </div>
      </header>

    {/* Info Section */}
    <section className="massage-info-section">
        <div className="massage-info-container only-text">
          <div className="massage-info-text-container">
            <h2 className="info-title">Fillers</h2>
            <p className="info-text">
              House of aesthetics erbjuder en mängd olika fillerbehandlingar för olika områden men även från olika leverantörer för att kunna anpassa precis efter behov och önskemål.
            </p>
            <p className="info-text">
              Fillers innehåller hyaluronsyra som finns naturligt i kroppen och det fyller ut veck och rynkor. Det injiceras in och fyller ut huden underifrån och skapar volym. Kroppen tar sedan hand om hyaluronsyran och den bryts stegvis ner under tid och då minskar effekten. Därför behöver även fillerbehandling upprepas efter några månader. Hållbarheten för fillers varierar beroende på vilken typ av filler man använder och hur fast den är. Är det en mjukare filler kan man räkna med ca 6 månader och en fastare filler kan hålla upp till 18 månader.
            </p>
            <p className="info-text">
              Hyaluronsyra (HA, Hyaluronic acid, Hyaluronan) som används i fillers är ett kroppseget ämne som binder fukt i huden. Stabiliserad hyaluronsyra är en formbar, geléliknande substans som används för att förbättra, förändra och föryngra hud och ansikte men även för att förbättra läpparnas form, asymmetri, kontur och volym. Vi på HOA strävar alltid efter det naturliga resultatet med avancerad teknik.
            </p>

            <h2 className="info-title">Läppar</h2>
            <p className="info-text">
              Fillers för läppar är en formbar, geléliknande substans. Genom att injicera fillers kan man förbättra, förändra och förbättra läpparnas form, asymmetri, kontur och volym. Vi strävar alltid efter att bevara läppens naturliga utseende och samtidigt få ett balanserat resultat. 
            </p>

            <p className="info-text">
                Resultaten är omedelbara och varar vanligtvis mellan 6–12 månader, hållbarheten beror på individuella faktorer och livsstil. Det man ska vara beredd på är svullnad och eventuella blåmärken. Detta är även olika från person till person hur mycket man reagerar. Återhämtningen är alltså minimal vilket gör det till en effektiv behandling för att förbättra läppens utseende.
            </p>

            <p className="info-text">
              Efter Råd:
            </p>

            <p className="info-text">
              Undvika sol, bad, bastu, alkohol och högintensiv träning inom 48h efter behandling. Inom 24h inga flygresor efter behandling. Undvik att sminka, vidröra eller gnugga området 12h efter behandling.
            </p>

            <h2 className="info-title">Fillers Volym</h2>
            <p className="info-text">
              Med hjälp av hyaluronsyra som fillers innehåller kan man åstadkomma en förbättring i ansiktet då det är ett naturligt ämne vi har i kroppen som under tid och ålder bryts ned. Därför kan man tack vare fillers återskapa den förlust man fått för att bevara hudens fuktbalans, fasthet och volym. Med hjälp av hyaluronsyran kan man få ett föryngrat resultat då alla går igenom förändringar i ansiktets struktur, form och elasticitet.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Slider */}
      <section className="massage-treatments-section">
        <h2 className="massage-section-title">Områden du kan behandla med fillers</h2>
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


      {/* Consultation Section */}
      <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
            <p className="consultation-description">
              Vi hjälper dig gärna att hitta rätt fillerbehandling som passar just dina behov.
            </p>
            <Link to="/Bokatid" className="consultation-button">Boka nu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fillers;
