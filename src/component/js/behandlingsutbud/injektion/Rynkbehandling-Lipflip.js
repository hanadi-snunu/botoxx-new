import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import lipflipImage from '../../../img/injection.png'; // Byt vid behov

const RynkbehandlingLipflip = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={lipflipImage}
      title="Botox | Lipflip"
      description="Framhäv överläppens form med en subtil avslappning av muskeln."
      extraDescription={`Lipflip är en populär behandling som använder små mängder botox i överläppens muskel för att få läppen att "vändas utåt" en aning. <br /><br />
      Detta ger en illusion av en fylligare överläpp utan att använda fillers. Perfekt för dig som vill ha ett naturligt resultat och tydligare läpplinje utan volymökning.`}
      details={[
        { label: 'Behandlingstid', value: '15 minuter' },
        { label: 'Pris', value: '1 700 kr' },
        { label: 'Fördelar', value: 'Framhäver läppformen, naturligt resultat, ingen svullnad' },
        { label: 'Rekommenderat för', value: 'Personer med tunn överläpp eller vid behov av symmetrikorrigering' },
      ]}
      beforeText={`Undvik rökning, smink och blodförtunnande 24 timmar före behandling. Kom med ren hud.`}
      afterText={`- Undvik att dricka med sugrör eller göra starka munrörelser första dygnet.<br />
      - Resultatet syns inom 3–5 dagar och håller i cirka 2–3 månader.`}
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/botox-1-omrade-1040523"
      bookButtonText="Boka Botox | Lipflip"
    />
  );
};

export default RynkbehandlingLipflip;
