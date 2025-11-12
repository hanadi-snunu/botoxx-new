import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import laserImage from '../../../img/nordlysbild.jpg';

const FraxAnsikte = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={laserImage}
      title="Frax 1550 | Ansikte"
      description="Behandling för hudföryngring i ansiktet."
      extraDescription="Frax 1550 använder fraktionerad laser för att förbättra hudstruktur, minska rynkor och stimulera kollagen. Behandlingen passar för dig som önskar jämnare hudton och fastare hud.<br /><br />Efter behandling uppstår en lätt rodnad som oftast försvinner inom ett par dagar."
      details={[
        { label: 'Behandlingstid', value: '35 minuter' },
        { label: 'Pris', value: '2 800 kr' },
        { label: 'Fördelar', value: 'Förbättrad hudstruktur och elasticitet' },
        { label: 'Rekommenderat för', value: 'Rynkor, ärr och ojämn hud i ansiktet' },
      ]}
      beforeText="Undvik direkt solexponering, bastu och träning det första dygnet efter behandlingen. Använd alltid solskydd SPF 50."
      afterText="Huden kan bli något röd och varm efter behandlingen. Återfuktande kräm rekommenderas. Undvik att pilla på behandlade områden."
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/frax-1550-ansikte-3183319"
      bookButtonText="Boka Frax 1550 | Ansikte"
    />
  );
};

export default FraxAnsikte;