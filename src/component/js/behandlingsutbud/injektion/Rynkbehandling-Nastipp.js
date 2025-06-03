import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import nastippImage from '../../../img/injection.png'; // Du kan byta till specifik bild om du har

const RynkbehandlingNastipp = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={nastippImage}
      title="Botox | Nästippen"
      description="Lyft nästippen diskret med hjälp av muskelavslappnande behandling."
      extraDescription={`Genom att injicera små mängder botox i muskeln som drar ned nästippen kan du få ett subtilt lyft av näsan. <br /><br />
      Behandlingen ger ett balanserat och harmoniskt uttryck, särskilt i profil. Den är snabb, effektiv och utan återhämtningstid.`}
      details={[
        { label: 'Behandlingstid', value: '15 minuter' },
        { label: 'Pris', value: '1 700 kr' },
        { label: 'Fördelar', value: 'Lyfter nästippen, förbättrad profil' },
        { label: 'Rekommenderat för', value: 'Personer med nedåtdragen nästipp vid leende eller i vila' },
      ]}
      beforeText={`Undvik alkohol, koffein och smink innan behandlingen. Ta inte blodförtunnande 24 timmar före.`}
      afterText={`Ingen beröring eller tryck på näsan första timmarna. Undvik glasögon och solglasögon om möjligt första dygnet.<br />
      Effekten märks inom några dagar och varar upp till 3–4 månader.`}
      bookLink="https://www.bokadirekt.se/places/house-of-aesthetics-34817?rs=1040534"
      bookButtonText="Boka Botox | Nästippen"
    />
  );
};

export default RynkbehandlingNastipp;
