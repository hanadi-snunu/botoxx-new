import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import laserImage from '../../../img/nordlysbild.jpg';

const IPLAnsikteHalsDekolletage = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={laserImage}
      title="IPL | Ansikte + Hals + Dekolletage"
      description="Omfattande behandling för ansikte, hals och dekolletage."
      extraDescription="IPL är en skonsam behandling som använder intensivt pulserande ljus för att behandla hudproblem som pigmentfläckar, rosacea och ytliga blodkärl. Behandlingen är icke-invasiv och kräver minimal återhämtningstid. Den är anpassad för att ge ett jämnare hudton och förbättrad hudstruktur.<br /><br />Efter behandlingen kan huden kännas varm och lätt rodnad kan uppstå, men detta lägger sig inom några timmar."
      details={[
        { label: 'Behandlingstid', value: '50 minuter' },
        { label: 'Pris', value: '4 000 kr' },
        { label: 'Fördelar', value: 'Jämn hudton över ett större område' },
        { label: 'Rekommenderat för', value: 'Solskador, pigment och rodnad på flera områden' },
      ]}
      beforeText="Undvik direkt solexponering, bastu och träning det första dygnet efter behandlingen. Använd alltid solskydd SPF 50."
      afterText="Huden kan bli något röd och varm efter behandlingen. Återfuktande kräm rekommenderas. Undvik att pilla på behandlade områden."
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/ipl-ansikte-hals-dekolletage-3183316"
      bookButtonText="Boka IPL | Ansikte + Hals + Dekolletage"
    />
  );
};

export default IPLAnsikteHalsDekolletage;
