import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import mungiporImage from '../../../img/injection.png'; // Byt till specifik bild vid behov

const RynkbehandlingMungipor = () => {
  return (
    <CommonTreatmentPage
      /*backgroundImage={mungiporImage}*/
       headerStyle="plain" 
      title="Botox | Sura mungipor"
      description="Lyft nedåtgående mungipor för ett gladare och mer öppet ansiktsuttryck."
      extraDescription={`Många upplever att deras mungipor dras nedåt med tiden, vilket kan ge ett trött eller surt intryck. <br /><br />
      Med hjälp av botox i de neddragande musklerna i området kan mungiporna lätt lyftas och ge ett gladare utseende – utan att påverka din naturliga mimik. Behandlingen är snabb, effektiv och ger resultat efter några dagar.`}
      details={[
        { label: 'Behandlingstid', value: '15 minuter' },
        { label: 'Pris', value: '1 700 kr' },
        { label: 'Fördelar', value: 'Gladare uttryck, mindre dragning nedåt i mungiporna' },
        { label: 'Rekommenderat för', value: 'Personer med nedåtgående linjer vid mungipor' },
      ]}
      beforeText={`Undvik alkohol, smink och stark ansiktsmimik före behandling. Kom med rengjord hud utan produkter.`}
      afterText={`Undvik stark mimik, massage och smink på området under första dygnet.<br />
      - Effekten syns ofta inom 3–5 dagar och håller i upp till 4 månader.`}
      bookLink="https://www.bokadirekt.se/places/house-of-aesthetics-34817?rs=1040534"
      bookButtonText="Boka Botox | Sura mungipor"
    />
  );
};

export default RynkbehandlingMungipor;
