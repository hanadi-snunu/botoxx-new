import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import masseterImage from '../../../img/injection.png'; // Byt gärna till specifik bild

const RynkbehandlingMasseter = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={masseterImage}
      title="Botox | Käkmuskler (Masseter)"
      description="Minska spända käkar, tandgnissling och få en smalare ansiktsform."
      extraDescription={`Masseterbehandling med botox är perfekt för dig som lider av spända käkar, huvudvärk eller tandgnissling. <br /><br />
      Genom att injicera botox i käkmuskeln (masseter) minskas muskelaktiviteten, vilket ger avslappnade käkar och kan även ge en smalare käklinje för ett mer feminint utseende.`}
      details={[
        { label: 'Behandlingstid', value: '15 minuter' },
        { label: 'Pris', value: '3000' },
        { label: 'Fördelar', value: 'Minskad spänning, minskad huvudvärk, smalare käklinje' },
        { label: 'Rekommenderat för', value: 'Personer med tandgnissling, spända käkar eller bred ansiktsform' },
      ]}
      beforeText={`Undvik koffein och träning innan behandlingen. Informera om eventuell tandläkarbehandling eller bettskena.`}
      afterText={`Undvik att tugga tuggummi, massera området eller träna första 24 timmarna.<br />
      Effekten märks gradvis och håller i upp till 4–6 månader.`}
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/masseter-slimming-jawline-slimming-gnisslande-tander-1040527"
      bookButtonText="Boka Botox | Käkmuskler"
    />
  );
};

export default RynkbehandlingMasseter;
