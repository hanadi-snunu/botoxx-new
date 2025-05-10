import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import hyperhidrosImage from '../../../img/injection.png'; // Byt till specifik bild om du har

const RynkbehandlingHyperhidros = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={hyperhidrosImage}
      title="Botox | Hyperhidros (överdriven svettning)"
      description="Effektiv behandling mot överdriven svettning i armhålor, händer eller fötter."
      extraDescription={`Hyperhidros är ett tillstånd där kroppen producerar mer svett än nödvändigt, vilket kan påverka livskvaliteten. <br /><br />
      Med hjälp av botox blockeras nervsignalerna som aktiverar svettkörtlarna. Behandlingen är säker, snabb och mycket effektiv – särskilt vid svettning i armhålor, handflator eller fotsulor.`}
      details={[
        { label: 'Behandlingstid', value: '30 minuter' },
        { label: 'Pris', value: '3000' },
        { label: 'Fördelar', value: 'Reducerad svettning, ökad livskvalitet, inga kirurgiska ingrepp' },
        { label: 'Rekommenderat för', value: 'Personer med besvärande svettning trots hygien och antiperspiranter' },
      ]}
      beforeText={`Raka inte området samma dag. Undvik alkohol, koffein och stark fysisk aktivitet före behandlingen.`}
      afterText={`Undvik deodorant i 24 timmar efter behandling (vid armhålor).<br />
      - Träning bör undvikas första dygnet.<br />
      - Resultat syns inom 3–7 dagar och håller i 4–8 månader beroende på område.`}
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/hyperhidros-svettbehandling-armhala-1040526"
      bookButtonText="Boka Botox | Hyperhidros"
    />
  );
};

export default RynkbehandlingHyperhidros;
