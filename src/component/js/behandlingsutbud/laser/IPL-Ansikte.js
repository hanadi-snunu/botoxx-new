import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import laserImage from '../../../img/injection.png';

const IPLAnsikte = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={laserImage}
      title="IPL | Ansikte"
      description="Förbättrar hudton och reducerar rodnad i hela ansiktet."
      extraDescription="IPL är en skonsam behandling som använder intensivt pulserande ljus för att behandla hudproblem som pigmentfläckar, rosacea och ytliga blodkärl. Behandlingen är icke-invasiv och kräver minimal återhämtningstid. Den är anpassad för att ge ett jämnare hudton och förbättrad hudstruktur.<br /><br />Efter behandlingen kan huden kännas varm och lätt rodnad kan uppstå, men detta lägger sig inom några timmar."
      details={[
        { label: 'Behandlingstid', value: '30 minuter' },
        { label: 'Pris', value: '2 200 kr' },
        { label: 'Fördelar', value: 'Jämnare hudton, reducerad rodnad' },
        { label: 'Rekommenderat för', value: 'Rodnad, pigment och ojämn hudstruktur i ansiktet' },
      ]}
      beforeText="Undvik direkt solexponering, bastu och träning det första dygnet efter behandlingen. Använd alltid solskydd SPF 50."
      afterText="Huden kan bli något röd och varm efter behandlingen. Återfuktande kräm rekommenderas. Undvik att pilla på behandlade områden."
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/ipl-ansikte-3183313"
      bookButtonText="Boka IPL | Ansikte"
    />
  );
};

export default IPLAnsikte;
