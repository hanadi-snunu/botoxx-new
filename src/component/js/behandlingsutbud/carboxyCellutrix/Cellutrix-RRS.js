import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import treatmentImage from '../../../img/injection.png';

const CarboxyCellutrixRRS = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={treatmentImage}
      title="RRS Cellutrix"
      description="Slätar ut ojämnheter, minskar celluliter och fettdepåer."
      extraDescription={`Cellutrix är en speciellt utvecklad formula som skapar mikro cirkulatorisk stimulering vilket slätar ut ojämnheter på huden, har en sammandragande effekt samt minskar mängden av fettdepåer. Preparatet innehåller hyaluronsyra, vitaminer och mineraler.<br /><br />
      Efter 3-4 dagar börjar huden bli slapp vilket är normalt eftersom fettdepåerna har minskat. Celluliter minskar och hudstrukturen blir jämnare. Slutresultatet ser man efter ca 2 månader.<br /><br />
      <strong>Celluliter:</strong> 4-6 behandlingar med cirka 1 veckas intervall.<br />
      <strong>Fettdepåer:</strong> 1-5 behandlingar med ca 1 veckas intervall beroende på hur stora fettdepåerna är.`}
      details={[
        { label: 'Behandlingstid', value: '30 minuter' },
        { label: 'Pris', value: '1 500 kr' },
        { label: 'Behandlingskur', value: '4 behandlingar - 5 000 kr' },
        { label: 'Rekommenderas för', value: 'Celluliter och fettdepåer' },
      ]}
      beforeText={`Drick mycket vatten (2-3L) dagarna innan.<br />
        - Undvik alkohol, smärtstillande och Omega 3 i 5 dagar.<br />
        - Exponera inte huden för sol 7 dagar innan behandling.`}
      afterText={`- Undvik träning i 48 h efteråt.<br />
        - Undvik alkohol i 24 h.<br />
        - Undvik massage och sol på behandlade områden i minst 7 dagar.`}
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/rrs-cellutrix-1963979"
      bookButtonText="Boka | RRS Cellutrix"
    />
  );
};

export default CarboxyCellutrixRRS;
