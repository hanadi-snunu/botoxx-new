import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import laserImage from '../../../img/nordlysbild.jpg';

const IPLMindreOmrade = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={laserImage}
      title="IPL | Mindre område"
      description="Behandling för små lokaliserade hudproblem."
      extraDescription="IPL är en skonsam behandling som använder intensivt pulserande ljus för att behandla hudproblem som pigmentfläckar, rosacea och ytliga blodkärl. Behandlingen är icke-invasiv och kräver minimal återhämtningstid. Den är anpassad för att ge ett jämnare hudton och förbättrad hudstruktur.<br /><br />Efter behandlingen kan huden kännas varm och lätt rodnad kan uppstå, men detta lägger sig inom några timmar."
      details={[
        { label: 'Behandlingstid', value: '25 minuter' },
        { label: 'Pris', value: '1 500 kr' },
        { label: 'Fördelar', value: 'Reducerar små blodkärl och pigmentfläckar' },
        { label: 'Rekommenderat för', value: 'Små ytliga kärl eller fläckar' },
      ]}
      beforeText="Undvik direkt solexponering, bastu och träning det första dygnet efter behandlingen. Använd alltid solskydd SPF 50."
      afterText="Huden kan bli något röd och varm efter behandlingen. Återfuktande kräm rekommenderas. Undvik att pilla på behandlade områden."
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/ipl-mindre-omrade-3183311"
      bookButtonText="Boka IPL | Mindre område"
    />
  );
};

export default IPLMindreOmrade;
