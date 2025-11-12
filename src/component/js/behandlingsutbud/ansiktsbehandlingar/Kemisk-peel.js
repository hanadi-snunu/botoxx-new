import React from 'react';
import CommonTreatmentPage from './CommonTreatmentPage';
import kemiskPeelImage from '../../../img/ansiktsbehandling2.jpg';

const KemiskPeel = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={kemiskPeelImage}
      title="Milk Peel"
      description="En behandling som förnyar huden genom att exfoliera och förbättra hudens textur och lyster."
      extraDescription="Milk Peel är idealisk för att reducera fina linjer, akneärr och ojämn hudton."
      details={[
        { label: 'Behandlingstid', value: '30 min' },
        { label: 'Pris från', value: '777 kr' },
        { label: 'Fördelar', value: 'Jämnare hudton, reducerade ärr, föryngring' },
        { label: 'Rekommenderat för', value: 'Alla som vill förbättra hudens textur och lyster' },
      ]}
      beforeText="Inför behandlingen behöver du pausa retinol 2 veckor innan och undvika sol 48h 
innan. Om du är gravid eller ammande kan du inte utföra 
denna behandling.
"
      afterText="Undvik sol och exfoliering i minst 7 dagar för att skydda huden."
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/milk-peel-1693260"
      bookButtonText="Boka Milk Peel" 
    />

    
  );
};

export default KemiskPeel;
