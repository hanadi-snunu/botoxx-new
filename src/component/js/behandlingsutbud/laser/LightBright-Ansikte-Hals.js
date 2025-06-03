import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import laserImage from '../../../img/injection.png';

const LightBrightAnsikteHals = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={laserImage}
      title="Light & Bright | Ansikte + Hals"
      description="Kombinerad behandling med IPL och Frax för ansikte och hals."
      extraDescription="Light & Bright i ansikte och hals behandlar pigmenteringar, kärl och åldrad hud i dessa områden. Kombinationen av IPL och Frax stimulerar hudens läkningsprocess och minskar tecken på åldrande.<br /><br />Behandlingen är lämplig för dig som vill ha en heltäckande föryngring och uppstramning."
      details={[
         { label: 'Behandlingstid', value: '60 minuter'},
         { label: 'Pris', value: '4 600 kr'}, 
         { label: 'Fördelar', value: 'Föryngring och förbättrad hudkvalitet i både ansikte och hals'}, 
         { label: 'Rekommenderat för', value: 'Personer med ålderstecken i både ansikte och hals'}]}
      beforeText="Undvik solexponering, bastu och träning första dygnet. Använd alltid solskydd efter behandlingen."
      afterText="Rodnad eller lätt svullnad kan förekomma. Återfukta huden regelbundet och undvik att pilla på behandlat område."
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/light-bright-ansikte-hals-3183328"
      bookButtonText="Boka Light & Bright | Ansikte + Hals"
    />
  );
};

export default LightBrightAnsikteHals;
