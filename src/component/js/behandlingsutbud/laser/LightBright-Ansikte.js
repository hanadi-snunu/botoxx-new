import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import laserImage from '../../../img/injection.png';

const LightBrightAnsikte = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={laserImage}
      title="Light & Bright | Ansikte"
      description="Kombinerad behandling med IPL och Frax laser för hela ansiktet."
      extraDescription="Denna behandling kombinerar IPL och fraktionerad laser (Frax) för att föryngra huden, förbättra hudtonen och reducera pigmentering och rodnad i hela ansiktet. Light & Bright arbetar djupt i huden för att stimulera kollagenproduktionen och jämna ut hudstrukturen.<br /><br />Behandlingen är skonsam men effektiv och har minimal återhämtningstid."
      details={[
        { label: 'Behandlingstid', value: '60 minuter'}, 
        { label: 'Pris', value: '3 900 kr'}, 
        { label: 'Fördelar', value: 'Jämnare hudton, reducerad pigmentering, förbättrad struktur'}, 
        { label: 'Rekommenderat för', value: 'Personer med ojämn hudton eller synliga kärl i ansiktet'}]}
      beforeText="Undvik solexponering, bastu och träning första dygnet. Använd alltid solskydd efter behandlingen."
      afterText="Rodnad eller lätt svullnad kan förekomma. Återfukta huden regelbundet och undvik att pilla på behandlat område."
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/light-bright-ansikte-3183327"
      bookButtonText="Boka Light & Bright | Ansikte"
    />
  );
};

export default LightBrightAnsikte;
