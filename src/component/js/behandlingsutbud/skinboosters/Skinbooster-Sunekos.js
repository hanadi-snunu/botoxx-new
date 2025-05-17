import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import injection2 from '../../../img/injection.png';


export const SkinboosterSunekos = () => (
  <CommonTreatmentPage
    backgroundImage={injection2}
    title="Skinbooster | Sunekos"
    description="Ger naturlig föryngring och förbättrad elasticitet utan fillers."
    extraDescription="Sunekos Performa är en skonsam och effektiv behandling som passar för dig som vill ha synliga resultat utan fillers eller botox. Den motverkar mörka ringar, påsar, fina linjer och slapp hud. <br /><br />
    Den innehåller hyaluronsyra och aminosyror som stimulerar hudens kollagen- och elastinproduktion. För bästa resultat rekommenderas en kur på tre behandlingar."
    details={[
         { label: 'Pris', value: '2 300 kr' },
        { label: 'Tid', value: '30 minuter' },
      { label: 'Områden', value: 'Ögon, kinder, panna, hals' },
      { label: 'Fördelar', value: 'Lyster, elasticitet, mindre påsar' },
      { label: 'Behandlingsupplägg', value: 'Kur på 3 behandlingar' },
    ]}
    beforeText="Undvik makeup, blodförtunnande medel och alkohol före behandling."
    afterText="Huden kan vara svullen – undvik fysisk ansträngning och direkt sol i 48h."
    bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/skinbooster-sunekos-performa-3210686"
    bookButtonText="Boka Sunekos"
  />
);
