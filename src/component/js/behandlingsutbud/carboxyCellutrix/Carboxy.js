import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import injectionImage from '../../../img/injection.png';

const Carboxy = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={injectionImage}
      title="Carboxy"
      description="Reducerar fett och stramar upp huden med koldioxidterapi."
      extraDescription={`Koldioxidterapi eller carboxy brukar kallas \u201dmirakelgasen\u201d och har av vissa kallats \u201ddet st\u00f6rsta som h\u00e4nt estetiska behandlingar sedan botox\u201d.<br /><br />
      Vid carboxy-behandlingar levereras koldioxidgas med en tunn n\u00e5l som \u00e4r f\u00e4st vid ett r\u00f6r, som avger sm\u00e5 kvantiteter av kvalitativ koldioxid in under hudytan i ett kontrollerat fl\u00f6de.<br /><br />
      Omr\u00e5den som kan behandlas inkluderar baksida/framsida l\u00e5r, mage, k\u00e4rlekshandtag, ovanf\u00f6r kn\u00e4n, rumpa, dekolletage, hals, bristningar, armar, dubbelhaka och hamsterkinder.<br /><br />
      Man kan behandla slapp hud, minska fett och celluliter. Innan behandling b\u00f6r en konsultation bokas.<br /><br />
      <strong>N\u00e4r ska man inte behandlas?</strong> Vid graviditet, sjukdomstillst\u00e5nd, hj\u00e4rt- och k\u00e4rlsjukdom, h\u00f6gt blodtryck, nedsatt lungkapacitet, njurfel, epilepsi eller aktiv acne.`}
      details={[
        { label: 'Behandlingstid', value: '30–75 minuter' },
        { label: 'Pris', value: '1 200–2 700 kr' },
        { label: 'Behandlingsområden', value: 'Lår, mage, hals, dubbelhaka, armar, mm' },
        { label: 'Rekommenderas', value: '4–6 behandlingar med 1 veckas intervall' },
      ]}
      beforeText={`Kom utan smink, undvik alkohol och blodförtunnande läkemedel 24 timmar innan behandling.`}
      afterText={`- Undvik fysisk aktivitet i 48h efter behandlingen<br />
      - Drick rikligt med vatten<br />
      - Undvik att röra vid behandlat område första dygnet<br />
      - Rodnad, svullnad eller lätt ömhet är normalt och övergående`}
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/carboxy-1-omrade-1888717"
      bookButtonText="Boka | Carboxy"
    />
  );
};

export default Carboxy;
