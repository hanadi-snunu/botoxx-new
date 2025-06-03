import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import laserImage from '../../../img/injection.png';

const IPLDekolletageHals = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={laserImage}
      title="IPL | Dekolletage eller Hals"
      description="Fokuserad behandling på hals eller dekolletage."
      extraDescription="IPL är en skonsam behandling som använder intensivt pulserande ljus för att behandla hudproblem som pigmentfläckar, rosacea och ytliga blodkärl. Behandlingen är icke-invasiv och kräver minimal återhämtningstid. Den är anpassad för att ge ett jämnare hudton och förbättrad hudstruktur.<br /><br />Efter behandlingen kan huden kännas varm och lätt rodnad kan uppstå, men detta lägger sig inom några timmar."
      details={[
        { label: 'Behandlingstid', value: '35 minuter' },
        { label: 'Pris', value: '2 000 kr' },
        { label: 'Fördelar', value: 'Reducerar solskador och rodnad' },
        { label: 'Rekommenderat för', value: 'Hudföryngring av hals eller dekolletage' },
      ]}
      beforeText="Undvik direkt solexponering, bastu och träning det första dygnet efter behandlingen. Använd alltid solskydd SPF 50."
      afterText="Huden kan bli något röd och varm efter behandlingen. Återfuktande kräm rekommenderas. Undvik att pilla på behandlade områden."
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/ipl-dekolletage-eller-hals-3183318"
      bookButtonText="Boka IPL | Dekolletage eller Hals"
    />
  );
};

export default IPLDekolletageHals;
