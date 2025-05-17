import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import injection2 from '../../../img/injection.png';

export const SkinboosterLongLasting = () => (
  <CommonTreatmentPage
    backgroundImage={injection2}
    title="Skinbooster | Long Lasting"
    description="Återfuktar huden och förbättrar hudstruktur med långvarig effekt."
    extraDescription="RRS HA Long Lasting består av hyaluronsyra och aminosyror. Du kan behandla flera områden som t.ex. ansikte, hals, dekolletage, läppar och händer. Long Lasting är en lätt filler och skinbooster i ett. <br /><br />
    Den ökar hudens fukthalt utan att ge ett pluffsigt resultat samtidigt som den behandlar synliga rynkor och förbättrar hudstrukturen. Eftersom Long Lasting är lätt korslänkad varar resultatet mycket längre jämfört med vanliga skinboosters. Redan efter 5–7 dagar syns förbättringen.<br /><br />
    Normalt är 1–3 behandlingar per år. Huden får en fantastisk glow och en återfuktning på djupet som varar."
    details={[
      { label: 'Pris', value: '2 995 kr 3 ml' },
        { label: 'Tid', value: '30 minuter' },
      { label: 'Områden', value: 'Ansikte, hals, dekolletage, läppar och händer' },
      { label: 'Behandlingstyp', value: 'Lätt filler och skinbooster' },
      { label: 'Frekvens', value: '1–3 gånger per år' },
    ]}
    beforeText="Kom osminkad och undvik alkohol 24 timmar innan behandling."
    afterText="Undvik träning, alkohol, bastu, flygresor och smink de första 48 timmarna."
    bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/skinbooster-rrs-longlasting-3ml-2990704"
    bookButtonText="Boka | Long Lasting"
  />
);