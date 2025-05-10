import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import browliftImage from '../../../img/injection.png'; // Byt gärna till en särskild bild om du har

const RynkbehandlingBrowlift = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={browliftImage}
      title="Botox | Browlift"
      description="Skapa ett subtilt lyft i ögonbrynen för ett piggare uttryck."
      extraDescription={`Browlift med botox är en populär behandling för att öppna upp blicken och ge ett lyft i ögonbrynsområdet – utan kirurgi. <br /><br />
      Genom att injicera små mängder toxin i specifika muskler får ögonbrynen en elegant höjning vilket ger ett yngre och mer utvilat utseende. Behandlingen är snabb, smärtfri och kräver ingen återhämtning.`}
      details={[
        { label: 'Behandlingstid', value: '15 minuter' },
        { label: 'Pris', value: '1 700 kr' },
        { label: 'Fördelar', value: 'Öppnare blick, piggare utseende, lyft i ögonbrynen' },
        { label: 'Rekommenderat för', value: 'Personer med tunga ögonlock eller som önskar lyft utan kirurgi' },
      ]}
      beforeText={`Kom utan smink och undvik alkohol, koffein och blodförtunnande 24 timmar före behandling.`}
      afterText={`Ligg inte ner och undvik träning de första 4 timmarna.<br />
      - Ingen massage eller tryck i området.<br />
      - Resultatet syns gradvis inom 3–5 dagar och håller i 3–4 månader.`}
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/botox-1-omrade-1040523"
      bookButtonText="Boka Botox | Browlift"
    />
  );
};

export default RynkbehandlingBrowlift;
