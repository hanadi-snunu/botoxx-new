import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import krakparkarImage from '../../../img/injection.png'; // Byt gärna till specifik bild vid behov

const RynkbehandlingKrakparkar = () => {
  return (
    <CommonTreatmentPage
      /*backgroundImage={krakparkarImage}*/
       headerStyle="plain" 
      title="Botox | Kråksparkar"
      description="Behandling för fina linjer kring ögonens ytterkanter, även kallat kråksparkar."
      extraDescription={`Kråksparkar uppstår naturligt med åren vid skratt, leenden och mimik. Med hjälp av botox kan dessa linjer reduceras för ett mjukare, mer ungdomligt utseende.<br /><br />
      Behandlingen påverkar inte din mimik i övrigt, men ger en slätare kontur runt ögonen. Perfekt för dig som vill minska synliga ålderstecken utan kirurgi.`}
      details={[
        { label: 'Behandlingstid', value: '15 minuter' },
        { label: 'Pris', value: '1 700 kr' },
        { label: 'Fördelar', value: 'Mjukare blick, reducerade linjer, piggare utseende' },
        { label: 'Rekommenderat för', value: 'Personer med fina linjer vid ögonen (kråksparkar)' },
      ]}
      beforeText={`Undvik koffein, alkohol och blodförtunnande medicin minst 24 timmar före behandlingen. Kom utan smink.`}
      afterText={`Rör inte ögonområdet första timmarna. Undvik att gnugga eller massera.<br />
      - Undvik träning och smink första dagen.<br />
      - Undvik värme och bastu första 48 timmarna.<br />
      Resultatet syns efter 2–5 dagar och håller i ca 3–4 månader.`}
      bookLink="https://www.bokadirekt.se/places/house-of-aesthetics-34817?rs=1040534"
      bookButtonText="Boka Botox | Kråksparkar"
    />
  );
};

export default RynkbehandlingKrakparkar;
