
import ledImage from '../../../img/ledljusterapi.png';

import React from 'react';
import CommonTreatmentPage from './CommonTreatmentPage';


const LEDLjusterapi = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={ledImage}
      title={<span style={{ paddingTop: "60px", display: "inline-block" }}>LED Ljusterapi</span>}
      description="Denna behandling använder ett terapeutiskt LED-ljus för att förbättra din huds naturliga cellåterhämtning, förkorta läkningstid, dämpa aktiv akne och främja hudföryngring."
      extraDescription={`<div style="white-space: normal; overflow: visible;">
      Denna behandling använder ett terapeutiskt LED-ljus för att förbättra din huds naturliga cellåterhämtning, förkorta läkningstid, dämpa aktiv akne och främja hudföryngring. Behandlingen är smärtfri och icke-invasiv och levererar koncentrerad energi ner i hudens vävnad.
      <br /><br />
      LED-ljusterapi kan användas fristående eller som återhämtningsboost efter aktiva behandlingar (microneedling, syrabehandlingar) eller som tillägg till ansiktsbehandlingar.
      <br /><br />
      <strong>Ljusprogram (anpassas efter din hud):</strong><br />
      <strong>Blått ljus:</strong> Motverkar bakterier, passar acnebenägen/fet hud.<br />
      <strong>Rött ljus:</strong> Ökar blodcirkulationen, stimulerar kollagen för fastare hud.<br />
      <strong>Grönt ljus:</strong> Jämnar hudton, jobbar mot fina linjer och rynkor.<br />
      <strong>Gult ljus:</strong> Påskyndar sårläkning och dämpar inflammation.
      <br /><br />
      <strong>Kur & effekt:</strong> Effekten märks vanligtvis efter 4–6 veckor. Vi rekommenderar en kur om 4 behandlingar.
      <br /><br />
      <strong>Behandlingsprotokoll:</strong><br />
      – Rengöring<br />
      – LED-mask & avkopplande skalpmassage<br />
      – Avslutande serum & kräm
      </div>`}
      details={[
        { label: 'Behandlingstid', value: '30 min' },
        { label: 'Pris', value: '650 kr' },
      ]}
      beforeText="Kom osminkad och undvik exfoliering 24 timmar före behandlingen."
      afterText="Återfukta huden och använd solskydd efter behandlingen. Undvik exfoliering i minst 7 dagar för att skydda huden."
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/led-ljusterapi-2014253"
      bookButtonText="Boka LED Ljusterapi"
    />
  );
};

export default LEDLjusterapi;
