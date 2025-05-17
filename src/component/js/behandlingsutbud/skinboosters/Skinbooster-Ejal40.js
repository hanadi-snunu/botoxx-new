import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import injection2 from '../../../img/injection.png';

export const SkinboosterEjal40 = () => (
  <CommonTreatmentPage
    backgroundImage={injection2}
    title="Skinbooster | Ejal 40"
    description="Stimulerar kollagen och elastin för fastare och återfuktad hud."
    extraDescription="Ejal 40 är en biostimulerande behandling som innehåller icke-korslänkad hyaluronsyra. Den stimulerar hudcellerna att producera kollagen och elastin, vilket ger huden styrka, smidighet och fukt. <br /><br />
    Rekommenderas som kur om 3 behandlingar med två veckors mellanrum, därefter 2–3 gånger per år."
    details={[
        { label: 'Pris', value: '1 800 kr' },
        { label: 'Tid', value: '30 minuter' },
      { label: 'Områden', value: 'Ansikte och hals' },
      { label: 'Typ', value: 'Biostimulering med hyaluronsyra' },
      { label: 'Kur', value: '3 behandlingar + underhåll 2–3 ggr/år' },
    ]}
    beforeText="Rengör huden noggrant och undvik koffein samma dag."
    afterText="Undvik sol, bastu, alkohol och smink i 48 timmar."
    bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/biostimulerare-ejal40-1949342"
    bookButtonText="Boka | Ejal 40"
  />
);