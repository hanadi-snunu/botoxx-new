import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import platysmaImage from '../../../img/injection.png'; // Byt gärna till en specifik bild

const RynkbehandlingPlatysma = () => {
  return (
    <CommonTreatmentPage
      /*backgroundImage={platysmaImage}*/
       headerStyle="plain" 
      title="Botox | Platysma"
      description="Behandla vertikala band och horisontella linjer på halsen för ett föryngrat utseende."
      extraDescription={`Platysma är muskeln som löper från käken ned längs halsen. När den blir spänd med åren kan vertikala band och horisontella linjer framträda. <br /><br />
      Med botox kan dessa drag mjukas upp vilket ger en jämnare, mer ungdomlig hals och definierad käklinje – helt utan kirurgi.`}
      details={[
        { label: 'Behandlingstid', value: '30 minuter' },
        { label: 'Pris', value: '3000' },
        { label: 'Fördelar', value: 'Slätare hals, reducerade linjer, mer definierad käklinje' },
        { label: 'Rekommenderat för', value: 'Personer med tydliga halsband eller vertikala strängar i halsen' },
      ]}
      beforeText={`Undvik nikotin, alkohol och träning innan behandling. Kom med ren hud utan krämer eller smink.`}
      afterText={`Ingen träning, bastu eller massage på halsområdet första 24 timmarna.<br />
      Resultaten syns successivt inom 5–7 dagar och varar upp till 4 månader.`}
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/platysma-1040528"
      bookButtonText="Boka Botox | Platysma"
    />
  );
};

export default RynkbehandlingPlatysma;
