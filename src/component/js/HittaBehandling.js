
import "../css/behandlingsutbud.css";
import HeroImage from "../img/bild1.jpg";
import ConsultationImage from "../img/kostnadsfrikonsultation.png";
import { Link } from "react-router-dom";
import React, { useRef, useState  } from 'react';
import emailjs from '@emailjs/browser';


const Hittabehandling = () => {

  const form = useRef();
const [isChecked, setIsChecked] = useState(false); // <-- Nytt state

  const sendEmail = (e) => {
    e.preventDefault();

     if (!isChecked) {
      alert("Du måste godkänna vår integritetspolicy innan du skickar formuläret.");
      return;
    }

    emailjs.sendForm(
      'service_26glygt',      // <-- Byt ut med ditt service ID från EmailJS
      'template_6fz1brp',     // <-- Byt ut med din template ID
      form.current,
      'oce6GxkDflFA3eDLe'       // <-- Byt ut med din public key
    ).then(
      () => {
        alert("Tack! Ditt meddelande har skickats.");
        form.current.reset();
         setIsChecked(false);
      },
      (error) => {
        alert("Något gick fel: " + error.text);
      }
    );
  };

     return (
       <div>
         {/* Hero Section */}
         <div className="hero-section" style={{ backgroundImage: `url(${HeroImage})` }}>
           <div className="hero-overlay">
             <div className="hero-content">
               <h1 className="hero-title"> Hitta rätt behandling</h1>
               <p className="hero-subtitle">
                 Utforska våra behandlingar med professionell expertis.
               </p>
               <Link to="/Bokatid" className="hero-button">
                 Boka tid
               </Link>
             </div>
           </div>
         </div>
   

          {/* Kontaktformulär */}
      <section className="kontakt-formulär" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2>Kontakta oss för konsultation</h2>
        <form ref={form} onSubmit={sendEmail} style={{ maxWidth: '500px', margin: '0 auto' }}>
          <input type="text" name="namn" placeholder="Förnamn" required />
          <input type="text" name="efternamn" placeholder="Efternamn" required />
          <input type="tel" name="telefon" placeholder="Telefon (valfritt)" />

          {/*<input type="text" name="personnummer" placeholder="Personnummer (ÅÅÅÅMMDD-XXXX)" required />*/}
          <input type="email" name="email" placeholder="E-postadress" required />
          <textarea name="beskrivning" placeholder="Vad behöver du hjälp med?" required />



           {/* Checkbox med integritetspolicy */}
          <label className="policy-checkbox">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
            <span>
              Jag godkänner att mina personuppgifter behandlas enligt vår{' '}
              <Link to="/Integritetspolicy" className="policy-link">integritetspolicy</Link>.
            </span>
          </label>

          <button type="submit" className="hero-button" style={{ marginTop: "10px" }}>Skicka</button>
        </form>
      </section>
   
         {/* Consultation Section */}
         <div
           className="consultation-section"
           style={{ backgroundImage: `url(${ConsultationImage})` }}
         >
           <div className="consultation-overlay">
             <div className="consultation-content">
               <h2 className="consultation-title">
                 Boka en kostnadsfri digital konsultation
               </h2>
               <p className="consultation-description">
                 Vi erbjuder kostnadsfria konsultationer för att hjälpa dig att förstå
                 vilken behandling som passar dig bäst.
               </p>
               <Link to="/Bokatid" className="consultation-button">
                 Boka nu
               </Link>
             </div>
           </div>
         </div>
       </div>
     );
   }

export default Hittabehandling;
