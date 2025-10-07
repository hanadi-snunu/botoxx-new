import React, { useState, useEffect } from 'react';
import '../css/Hem.css';
import BackgroundImage from '../img/hemm.jpg';
import CommonImage from '../img/injektion.jpg';
import { Link } from 'react-router-dom';
import ConsultationImage from "../img/piccc.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";



const testimonials = [
    {
        text: "Underbar behandling och så skön massage under tiden masken verkade 🥰",
        author: "Sabrina N."
    },
    {
        text: "Lugn miljö Kompetens Rekommenderar",
        author: "Isabel K."
    },
    {
        text: "Fint bemötande, proffesionella tjejer och alltid lika nöjd!",
        author: "Siri B."
    },
    {
        text: "Alltid en lika fantastisk upplevelse 💕",
        author: "Linda F."
    },
    {
        text: "Jätte nöjd med mina ögonfransar",
        author: "Shams A."
    },
    {
        text: "Felicia är fantastisk! Får en att känna sig trygg med sin värme och enkelhet. Rekommenderar!",
        author: "Sandra L."
    }, 
    {
        text: "Jätte duktig och professionell. Blir alltid jätte nöjd🙏🏽",
        author: "Josefine R."
    },
    {
        text: "Felicia var fantastisk och tar hand om en så väl!",
        author: "Elin L."
    },
    {
        text: "Finns inga bättre än House of Aesthetics! Så professionella, snälla, trevliga, kunniga, underbara och otroliga proffs på det de gör. Man känner sig alltid så trygg, välkommen och otroligt nöjd efter varje besök!! 🥰😍❤️🤗",
        author: "Alina A."
    },
    {
        text: "Fantastiskt som alltid ❤️",
        author: "Karolina J."
    },
    {
        text: "Fantastiskt som vanligt, rekommenderar varmt Felicia för både botox och trådlyft. Hon är otroligt kunnig och professionell + gulligaste personen i världen. Hon ger ärliga råd om vad som passar och inte och har förmågan att vara både pedagogisk och vänlig på samma gång. Tog sig tid för att lugna min oro kring ett trådlyft utan att jag behövde känna mig som en besvärlig kund. Kan bara rekommendera. Har även varit hos Linda som också är toppen!",
        author: "Isabella B."
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

       <div className="home-section" style={{ backgroundImage: `url(${BackgroundImage})` }}> 
       <div className="overlay">
        <h1 className="home-title">HOUSE OF AESTHETICS</h1>
        <p className="home-location-text">Malmö •</p>
        <div className="home-button-group">
            <Link to="/Bokatid" className="home-action-button">Boka tid</Link>
            <Link to="/HittaBehandling" className="home-action-button">Hitta rätt behandling</Link>
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
                        <img src={CommonImage} alt="Behandling" className="home-treatment-image" />
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
                        <img src={CommonImage} alt="Behandling" className="home-treatment-image" />
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
                        <img src={CommonImage} alt="Behandling" className="home-treatment-image" />
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
                        <img src={CommonImage} alt="Behandling" className="home-treatment-image" />
                        <div className="home-treatment-content">
                            <h3 className="home-treatment-title">Laserbehandlingar</h3>
                            <p className="home-treatment-description">
                                Vi använder avancerad laserteknik för att behandla pigmenteringar, blodkärl och andra hudförändringar.
                            </p>
                            <Link to="/Laserbehandlingar" className="home-treatment-link">Läs mer om våra laserbehandlingar här</Link>
                        </div>
                    </div>

                    <div className="home-treatment-card">
                        <img src={CommonImage} alt="Behandling" className="home-treatment-image" />
                        <div className="home-treatment-content">
                            <h3 className="home-treatment-title">Trådlyft</h3>
                            <p className="home-treatment-description">
                            Få ett naturligt lyft och föryngring utan kirurgi. Trådlyft stimulerar hudens kollagenproduktion för långvariga resultat.                            </p>
                            <Link to="/Trådlyft" className="home-treatment-link">Läs mer om våra trådlyftsbehandlingar här</Link>
                        </div>
                    </div>

                    <div className="home-treatment-card">
                        <img src={CommonImage} alt="Behandling" className="home-treatment-image" />
                        <div className="home-treatment-content">
                            <h3 className="home-treatment-title">Massage</h3>
                            <p className="home-treatment-description">
                            Slappna av och lindra spänningar med våra professionella massagebehandlingar. Främjar cirkulation och allmänt välbefinnande.                            </p>
                            <Link to="/Massagee" className="home-treatment-link">Läs mer om massage här</Link>
                        </div>
                    </div>

                    <div className="home-treatment-card">
                        <img src={CommonImage} alt="Behandling" className="home-treatment-image" />
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
