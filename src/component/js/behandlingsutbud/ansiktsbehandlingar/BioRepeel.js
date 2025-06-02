import React from 'react';
import CommonTreatmentPage from './CommonTreatmentPage';
import peelImage from '../../../img/ansiktsbehandling2.jpg';

const BioRepeel = () => (
  <CommonTreatmentPage
    backgroundImage={peelImage}
    title="BioRepeel"
    description="Mångsidig behandling för hudproblem som acne, pigmentfläckar och fina linjer."
    extraDescription="Med hjälp av AHA, BHA och PHA-syror förbättrar BioRepeel hudtextur, minskar porer, jämnar ut hudton, behandlar acne och pigmentfläckar. Behandlingen är smärtfri och nålfri – med minimal downtime. Rekommenderas som en kur på 4–6 behandlingar med 7–12 dagars mellanrum."
    details={[
      { label: 'Behandlingstid', value: '30 min' },
      { label: 'Pris', value: 'från 897 kr' },
      { label: 'Fördelar', value: 'Pigmentutjämning, porförminskning, anti-aging, acnebehandling' },
      { label: 'Rekommenderat för', value: 'Alla hudtyper – särskilt vid acne, pigment eller ojämn hudton' },
    ]}
    beforeText="Undvik retinolprodukter, antibiotika, vaxning, pågående herpes och skadad hud innan behandling."
    afterText="Rodnad och torrhet kan förekomma några dagar efteråt. Undvik solexponering direkt efter behandling."
    bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/biorepeel-2976516"
    bookButtonText="Boka BioRepeel"
  />
);

export default BioRepeel;
