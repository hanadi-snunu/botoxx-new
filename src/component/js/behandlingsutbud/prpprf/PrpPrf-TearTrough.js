import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import injection2 from '../../../img/injection.png';




const PrfTearTrough = () => (
  <CommonTreatmentPage
    backgroundImage={injection2}
    title="PRF | Tear Trough"
    description="Volymbyggande och kollagenstimulerande behandling under ögonen."
    extraDescription="PRF skiljer sig från PRP då den centrifugeras långsammare 
    och kortare tid och då utvinner man plasma som är mer volymbyggande. Den stimulerar 
    nybildning av kollagen och ger en ungdomligare, slätare och fastare hud.<br /><br />Behandlingen 
    börjar med blodprov, som centrifugeras och den plasmarika delen används. PRF injiceras i 
    Tear Trough med en trubbig kanyl. Svullnad under ögonen är vanligt och kan hålla i sig 
    upp till en vecka. Planera därefter. Har du problem med att ta blodprov bör du avstå denna behandling."
    details={[
      { label: "Pris", value: "3 000 kr" },
      { label: 'Behandlingsområde', value: 'Under ögonen (Tear Trough)' },
      { label: 'Typ', value: 'PRF – plasmarik fibrin' },
      { label: 'Rekommendation', value: 'Kur med individuell bedömning' },
    ]}
   beforeText={`Att tänka på inför behandling<br />
- Dricka mycket vatten. Gärna 2-3 L. Detta hjälper kvaliteten på plasman.<br />
- Tvätta håret inför behandling & undvik hårprodukter<br />
- Undvik alkoholintag och droger<br />
- Undvik smärtstillande & Omega3 5 dagar innan<br />
- Exponera inte hårbotten för sol 7 dagar innan<br />
- Antalet behandlingar är individuellt men generellt rekommenderas en kur på 4-6 gånger med 4 veckors mellanrum. Därefter behövs underhållsbehandling minst två gånger om året.`}



afterText={`Att tänka på efter behandling<br />
- Byt örngott<br />
- Undvik träning 48 h efter<br />
- Undvik Alkohol på 24 h<br />
- Hårtvätt och hårprodukter bör undvikas tills dagen efter<br />
- Exponering av sol på behandlade området bör undvikas i 7 dagar<br />
- Det är normalt att känna klåda, ömhet, svullnad och rodnad.<br />
- Initialt kan man uppleva en tillfällig ökning av håravfall. Detta på grund av att hårfollikeln stimuleras av tillväxtfaktorer. Detta gör att det nya, hälsosammare och starkare håret pressar ut det gamla och tunnare håret.`}

    bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/prf-teartrough-1693281"
    bookButtonText="Boka PRF | Tear Trough"
  />
);

export default PrfTearTrough;