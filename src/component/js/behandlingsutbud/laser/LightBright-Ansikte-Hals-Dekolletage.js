import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import laserImage from '../../../img/injection.png';

const LightBrightAnsikteHalsDekolletage = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={laserImage}
      title="Light & Bright | Ansikte + Hals + Dekolletage"
      description="Helhetsbehandling för överkroppen med IPL och Frax laser."
      extraDescription="Den mest omfattande Light & Bright-behandlingen. Täcker ansikte, hals och dekolletage för en jämn, strålande hud över hela det synliga området.<br /><br />En idealisk behandling för dig som önskar maximal effekt och föryngring i de mest exponerade områdena. Stimulerar kollagen och jämnar ut hudtonen."
      details={[
        { label: 'Behandlingstid', value: '90 minuter'}, 
        { label: 'Pris', value: '5 500 kr'}, 
        { label: 'Fördelar', value: 'Helhetsresultat, föryngring, reducerade linjer och pigment'}, 
        { label: 'Rekommenderat för', value: 'Personer som söker tydlig hudförbättring i alla områden'}]}
      beforeText="Undvik solexponering, bastu och träning första dygnet. Använd alltid solskydd efter behandlingen."
      afterText="Rodnad eller lätt svullnad kan förekomma. Återfukta huden regelbundet och undvik att pilla på behandlat område."
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/light-bright-ansikte-hals-dekolletage-3183332"
      bookButtonText="Boka Light & Bright | Ansikte + Hals + Dekolletage"
    />
  );
};

export default LightBrightAnsikteHalsDekolletage;
