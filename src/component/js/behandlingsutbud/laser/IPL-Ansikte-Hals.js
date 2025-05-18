import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import laserImage from '../../../img/injection.png';

const IPLAnsikteHals = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={laserImage}
      title="IPL | Ansikte + Hals"
      description="Kombinerad behandling för ansikte och hals."
      extraDescription="IPL är en skonsam behandling som använder intensivt pulserande ljus för att behandla hudproblem som pigmentfläckar, rosacea och ytliga blodkärl. Behandlingen är icke-invasiv och kräver minimal återhämtningstid. Den är anpassad för att ge ett jämnare hudton och förbättrad hudstruktur.<br /><br />Efter behandlingen kan huden kännas varm och lätt rodnad kan uppstå, men detta lägger sig inom några timmar."
      details={[
        { label: 'Behandlingstid', value: '45 minuter' },
        { label: 'Pris', value: '3 200 kr' },
        { label: 'Fördelar', value: 'Helhetsresultat i ansikte och hals' },
        { label: 'Rekommenderat för', value: 'Åldersrelaterade hudförändringar i ansikte och hals' },
      ]}
      beforeText="Undvik direkt solexponering, bastu och träning det första dygnet efter behandlingen. Använd alltid solskydd SPF 50."
      afterText="Huden kan bli något röd och varm efter behandlingen. Återfuktande kräm rekommenderas. Undvik att pilla på behandlade områden."
      bookLink="/Bokatid"
      bookButtonText="Boka IPL | Ansikte + Hals"
    />
  );
};

export default IPLAnsikteHals;
