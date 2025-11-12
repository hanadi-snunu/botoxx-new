import React, { useState, useEffect } from 'react';
import '../css/Hem.css';
import '../css/omoss.css';
import BackgroundImage from '../img/bild1.jpg';

import CommonImage1 from '../img/rynkreducerandeinjektioner.png';
import CommonImage2 from '../img/ansiktsbehandling13.jpg';
import CommonImage3 from '../img/hydrafacial14.jpg';
import CommonImage4 from '../img/laserbehandling7.png';
import CommonImage5 from '../img/vaxningHOF.png';
import CommonImage6 from '../img/injektion.jpg';
import CommonImage7 from '../img/tradl.png';



import { Link } from 'react-router-dom';
import ConsultationImage from "../img/kostnadsfrikonsultation.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";



const testimonials = [
    {
        text: "Som tidigare känner jag mig trygg när jag blir behandlad. Tydlig kommunikation och ett mjukt och fint sätt att bli bemött på. Rekommenderar HOA varmt oavsett om det är Felicia eller Linda som tar hand om mig",
        author: "Carina"
    },
    {
        text: "Underbara Felicia, som vänder en smärtsam men fantastisk behandling till ett gott skratt och en önskan om att få göra om den. Professionell och personlig- kan inte bli bättre! Så nöjd, ser redan fram emot nästa besök! Tack!",
        author: "Li"
    },
    {
        text: "Jag är så otroligt nöjd varje gång jag besöker HOA! Personalen är proffsig, omhändertagande och får en verkligen att känna sig trygg. Rekommenderas varmt.",
        author: "Alexandra"
    },
    {
        text: "Linda är så duktig och vet precis vad hon gör! Lyssnar på dig och utgår från dina önskemål. Jag har varit hos henne tidigare och blivit lika nöjd varje gång!!",
        author: "Melissa"
    },
    {
        text: "Proffsigt ställe, gjorde microneedling och det gick hur bra som helst! Jättefin personal och fint och lugnt bemötande.",
        author: "Emma"
    },
    {
        text: "Tjejerna som jobbar där är helt fantastiska, varje gång man kommer dit så känner man sig så välkommen och fint bemött. Jobbet som de utför är är 100 av 10",
        author: "Louise"
    }, 
    

    {
        text: "Fantastiskt som alltid",
        author: "Karolina J."
    }
];

const Hem = () => {

// === "Under arbete" popup state ===
const [showNotice, setShowNotice] = useState(false);


// Visa popup en gång per session (första sidladdningen i fliken)
useEffect(() => {
try {
const seen = sessionStorage.getItem('maintenanceSeen');
if (!seen) {
setShowNotice(true);
sessionStorage.setItem('maintenanceSeen', '1'); // markera som visad för denna session
}
} catch (e) {
// Om sessionStorage inte är tillgänglig, fallback: visa popup
setShowNotice(true);
}
}, []);


const dismissNotice = () => setShowNotice(false);


const modalStyles = {
overlay: {
position: 'fixed', inset: 0, background: 'rgba(0,0,0,.55)',
display: 'flex', alignItems: 'center', justifyContent: 'center',
zIndex: 9999, padding: 16
},
card: {
width: '100%', maxWidth: 520, background: '#fff', borderRadius: 16,
padding: 20, boxShadow: '0 10px 30px rgba(0,0,0,.2)', textAlign: 'center'
},
badge: {
display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: .6,
textTransform: 'uppercase', padding: '6px 10px', borderRadius: 999,
background: '#111', color: '#fff', marginBottom: 8
},
title: { fontSize: 20, margin: '4px 0 6px' },
text: { fontSize: 16, lineHeight: 1.5, margin: '0 0 16px' },
button: {
display: 'inline-block', border: 'none', borderRadius: 999, padding: '12px 18px',
fontWeight: 600, cursor: 'pointer', background: '#111', color: '#fff', width: '100%'
}
};

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const displayedTestimonials = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length]
    ];


    return (
        <div>

            {/* UNDER ARBETE POPUP */}
{showNotice && (
<div style={modalStyles.overlay} role="dialog" aria-modal="true" aria-labelledby="maint-title">
<div style={modalStyles.card}>
<span style={modalStyles.badge}>OBS</span>
<h3 id="maint-title" style={modalStyles.title}>Denna sida är under arbete</h3>
<p style={modalStyles.text}>
Vi förbättrar just nu innehållet och funktionerna. <br />
Viss information kan saknas eller ändras.
</p>
<button style={modalStyles.button} onClick={dismissNotice} aria-label="Stäng meddelandet">
Jag förstår
</button>
</div>
</div>
)}

       {/* Hero på startsidan – använder OmOss-stilar */}
<div className="omoss-header-section">
  <img src={BackgroundImage} alt="" className="omoss-hero" />
  <div className="omoss-overlay">
    <div className="omoss-content-block">
      <h1 className="omoss-title">HOUSE OF AESTHETICS</h1>
 
      {/* Du kan behålla dina befintliga knapp-klasser */}
      <div className="home-button-group">
       <Link to="/Bokatid" className="home-action-button">Boka tid</Link>
        <Link to="/HittaBehandling" className="home-action-button">Hitta rätt behandling</Link>
      </div>
    </div>
  </div>
</div>



       
       
       <div className="home-about-section">
                <h2 className="home-about-title">Experter på estetiska behandlingar och avancerad hudvård</h2>
                <p className="home-about-subtitle">Välkommen!</p>
                <p className="home-about-description">
                    Vi strävar efter att ge varje kund en personlig upplevelse i en exklusiv och harmonisk miljö.
                    Våra behandlingar utförs av kvalificerade specialister med fokus på högsta kvalitet och omsorg.
                    <br /><br />
                    Vårt mål är att alla våra kunder ska vara 100% nöjda.
                </p>
            </div>

              {/* Sektion för behandlingar */}
            <div className="home-treatments-section">
                <h2 className="home-section-title">Våra behandlingar</h2>
                <div className="home-treatments-grid">
                    {/* Injektionsbehandlingar */}
                    <div className="home-treatment-card">
                        <img src={CommonImage1} alt="Behandling" className="home-treatment-image" />
                        <div className="home-treatment-content">
                            <h3 className="home-treatment-title">Estetiska Injektionsbehandlingar</h3>
                            <p className="home-treatment-description">
                                Vi erbjuder både hudförbättrande injektioner och volymökande behandlingar för att passa dina behov.
                            </p>
                            <Link to="/Injektionsbehandlingar" className="home-treatment-link">Läs mer om våra injektionsbehandlingar här</Link>
                        </div>
                    </div>

                    {/* Ansiktsbehandlingar */}
                    <div className="home-treatment-card">
                        <img src={CommonImage2} alt="Behandling" className="home-treatment-image" />
                        <div className="home-treatment-content">
                            <h3 className="home-treatment-title">Ansiktsbehandlingar</h3>
                            <p className="home-treatment-description">
                                Våra ansiktsbehandlingar är utformade för att förbättra din hudhälsa och ge dig en strålande lyster.
                            </p>
                            <Link to="/Ansiktsbehandlingar" className="home-treatment-link">Läs mer om våra ansiktsbehandlingar här</Link>
                        </div>
                    </div>


                    {/* Utbildningar */}
                    <div className="home-treatment-card">
                        <img src={CommonImage3} alt="Behandling" className="home-treatment-image" />
                        <div className="home-treatment-content">
                            <h3 className="home-treatment-title">Hydra Facial</h3>
                            <p className="home-treatment-description">
                            En avancerad behandling som rengör, återfuktar och föryngrar huden. Perfekt för att ge huden en frisk och strålande lyster.
                            </p>
                            <Link to="/HydraFacial" className="home-treatment-link">Läs mer om Hydra Facial här</Link>
                        </div>
                    </div>

                    {/* Laserbehandlingar */}
                    <div className="home-treatment-card">
                        <img src={CommonImage4} alt="Behandling" className="home-treatment-image" />
                        <div className="home-treatment-content">
                            <h3 className="home-treatment-title">Laserbehandlingar</h3>
                            <p className="home-treatment-description">
                                Vi använder avancerad laserteknik för att behandla pigmenteringar, blodkärl och andra hudförändringar.
                            </p>
                            <Link to="/Laserbehandlingar" className="home-treatment-link">Läs mer om våra laserbehandlingar här</Link>
                        </div>
                    </div>

                    <div className="home-treatment-card">
                        <img src={CommonImage7} alt="Behandling" className="home-treatment-image" />
                        <div className="home-treatment-content">
                            <h3 className="home-treatment-title">Trådlyft</h3>
                            <p className="home-treatment-description">
                            Få ett naturligt lyft och föryngring utan kirurgi. Trådlyft stimulerar hudens kollagenproduktion för långvariga resultat.                            </p>
                            <Link to="/Trådlyft" className="home-treatment-link">Läs mer om våra trådlyftsbehandlingar här</Link>
                        </div>
                    </div>

                

                    <div className="home-treatment-card">
                        <img src={CommonImage5} alt="Behandling" className="home-treatment-image" />
                        <div className="home-treatment-content">
                            <h3 className="home-treatment-title">Vaxning</h3>
                            <p className="home-treatment-description">
                            Upplev len och hårfri hud som varar länge. Våra skonsamma vaxningar passar för hela kroppen.                            </p>
                            <Link to="/Vaxning" className="home-treatment-link">Läs mer om vaxning här</Link>
                        </div>
                    </div>

                    
                </div>
            </div>

            <div className="home-values-section">
    
    
    <div className="home-values-grid">
        {/* NÄRHET */}
        <div className="home-value-card">
            <h3 className="home-value-title">NÄRHET</h3>
            <p className="home-value-description">
                Vi värdesätter mötet med dig och strävar efter att skapa en genuin och personlig upplevelse. Vårt mål är att du ska känna dig varmt välkommen och trygg under hela din tid med oss.
            </p>
        </div>

        {/* KVALITET */}
        <div className="home-value-card">
            <h3 className="home-value-title">KVALITET</h3>
            <p className="home-value-description">
                Vårt fokus ligger på att erbjuda förstklassiga behandlingar utförda av de mest kompetenta inom branschen. Hos oss får du uppleva högsta kvalitet i en sofistikerad och behaglig miljö.
            </p>
        </div>

        {/* TRYGGHET */}
        <div className="home-value-card">
            <h3 className="home-value-title">TRYGGHET</h3>
            <p className="home-value-description">
                Vi är här för att erbjuda dig en säker och pålitlig upplevelse med service av högsta klass. Vår ambition är att du alltid ska känna dig trygg och nöjd efter varje besök.
            </p>
        </div>
    </div>
</div>


        {/* Consultation Section */}
        <div className="consultation-section" style={{ backgroundImage: `url(${ConsultationImage})` }}>
        <div className="consultation-overlay">
          <div className="consultation-content">
            <h2 className="consultation-title">Boka en kostnadsfri digital konsultation</h2>
           
            <Link to="/Bokatid" className="consultation-button">
              Boka nu
            </Link>
          </div>
        </div>
      </div>

       {/* RECENTIONER*/}

       <div className="home-testimonials-section">
    <div className="testimonials-header">
        <h2 className="home-testimonials-title">Vad våra kunder säger</h2>
        <div className="testimonial-navigation">
        <button onClick={goToPrevious} className="testimonial-arrow">
        <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <button onClick={goToNext} className="testimonial-arrow">
        <FontAwesomeIcon icon={faChevronRight} />
    </button>
        </div>
    </div>
    <div className="testimonials-container">
        {displayedTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
                <p className="testimonial-quote">“{testimonial.text}”</p>
                <p className="testimonial-author">– {testimonial.author}</p>
            </div>
        ))}
    </div>
</div>

        </div>

      );
    };

export default Hem;
