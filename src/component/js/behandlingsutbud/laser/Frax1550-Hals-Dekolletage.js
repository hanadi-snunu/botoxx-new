import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import laserImage from '../../../img/injection.png';

const FraxHalsDekolletage = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={laserImage}
      title="Frax 1550 | Hals eller Dekolletage"
      description="Rikta behandlingen till hals eller dekolletage."
      extraDescription="Med Frax 1550 kan du behandla antingen hals eller dekolletage separat. Förbättrar hudens elasticitet och reducerar synliga linjer.<br /><br />Mild rodnad och värme kan uppstå efter behandling."
      details={[
        { label: 'Behandlingstid', value: '35 minuter' },
        { label: 'Pris', value: '2 500 kr' },
        { label: 'Fördelar', value: 'Huduppstramning och jämnare hudton' },
        { label: 'Rekommenderat för', value: 'Linjer och förlorad spänst i hals eller dekolletage' },
      ]}
      beforeText="Undvik direkt solexponering, bastu och träning det första dygnet efter behandlingen. Använd alltid solskydd SPF 50."
      afterText="Huden kan bli något röd och varm efter behandlingen. Återfuktande kräm rekommenderas. Undvik att pilla på behandlade områden."
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/frax-1550-hals-eller-dekolletage-3183324"
      bookButtonText="Boka Frax 1550 | Hals eller Dekolletage"
    />
  );
};

export default FraxHalsDekolletage;