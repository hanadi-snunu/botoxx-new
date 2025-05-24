import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import laserImage from '../../../img/injection.png';

const FraxAnsikteHalsDekolletage = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={laserImage}
      title="Frax 1550 | Ansikte + Hals + Dekolletage"
      description="Fullständig hudföryngring av övre delen av kroppen."
      extraDescription="Denna behandling täcker hela området: ansikte, hals och dekolletage. Idealisk för dig som söker ett helhetslyft med förbättrad hudkvalitet och struktur.<br /><br />Känslan av lätt värme och rodnad är vanlig men övergående."
      details={[
        { label: 'Behandlingstid', value: '50 minuter' },
        { label: 'Pris', value: '4 200 kr' },
        { label: 'Fördelar', value: 'Helhetsförbättring av hudton och fasthet' },
        { label: 'Rekommenderat för', value: 'Ojämn hudstruktur och åldrad hud' },
      ]}
      beforeText="Undvik direkt solexponering, bastu och träning det första dygnet efter behandlingen. Använd alltid solskydd SPF 50."
      afterText="Huden kan bli något röd och varm efter behandlingen. Återfuktande kräm rekommenderas. Undvik att pilla på behandlade områden."
      bookLink="/Bokatid"
      bookButtonText="Boka Frax 1550 | Ansikte + Hals + Dekolletage"
    />
  );
};

export default FraxAnsikteHalsDekolletage;