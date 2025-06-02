import React from 'react';
import CommonTreatmentPage from './CommonTreatmentPage';
import peelImage from '../../../img/ansiktsbehandling2.jpg';

const MaskPeel = () => (
  <CommonTreatmentPage
    backgroundImage={peelImage}
    title="Mask Peel"
    description="Djuprengörande peeling för fet och acnebenägen hud."
    extraDescription="Mask Peel behandlar orenheter, finnar och pormaskar. En kombination av salicylsyra och AHA/BHA rengör huden på djupet, balanserar talgproduktionen och förebygger acneärr. Passar dig som vill ha klarare hud med mindre inflammation."
    details={[
      { label: 'Behandlingstid', value: '30 min' },
      { label: 'Pris', value: 'från 597 kr' },
      { label: 'Fördelar', value: 'Renare hud, mindre finnar, dämpad inflammation' },
      { label: 'Rekommenderat för', value: 'Fet, blandad och acnebenägen hud' },
    ]}
    beforeText="Undvik syror, retinol, rakning och vaxning 4–5 dagar innan behandling."
    afterText="Skydda huden med fukt och SPF. Undvik starka produkter några dagar efter behandling."
    bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/mask-peel-1693261"
    bookButtonText="Boka Mask Peel"
  />
);

export default MaskPeel;
