import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import laserImage from '../../../img/injection.png';

const FraxAnsikteHals = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={laserImage}
      title="Frax 1550 | Ansikte + Hals"
      description="Kombinerad behandling för ansikte och hals."
      extraDescription="Frax 1550 laserbehandling omfattar både ansikte och hals för en enhetlig hudton och fastare hud. Stimulerar kollagenproduktionen och förbättrar hudens utseende.<br /><br />Rodnad efter behandling är normalt och går över inom kort."
      details={[
        { label: 'Behandlingstid', value: '50 minuter' },
        { label: 'Pris', value: '3 500 kr' },
        { label: 'Fördelar', value: 'Slätare hud och reducering av fina linjer' },
        { label: 'Rekommenderat för', value: 'Mogen eller solskadad hud i ansikte och hals' },
      ]}
      beforeText="Undvik direkt solexponering, bastu och träning det första dygnet efter behandlingen. Använd alltid solskydd SPF 50."
      afterText="Huden kan bli något röd och varm efter behandlingen. Återfuktande kräm rekommenderas. Undvik att pilla på behandlade områden."
      bookLink="/Bokatid"
      bookButtonText="Boka Frax 1550 | Ansikte + Hals"
    />
  );
};

export default FraxAnsikteHals;