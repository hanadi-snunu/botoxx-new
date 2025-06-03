import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import hakaImage from '../../../img/injection.png'; // Byt vid behov till en specifik bild

const RynkbehandlingApelsinhaka = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={hakaImage}
      title="Botox | Apelsinhaka"
      description="Släta ut gropar och ojämnheter i hakan för ett jämnare intryck."
      extraDescription={`Apelsinhaka uppstår av spänningar i hakmuskeln och ger ett ojämnt, gropigt utseende – likt en apelsinskalstruktur. <br /><br />
      Genom att injicera botox i hakmuskeln slappnar området av, vilket ger ett slätare och mer balanserat intryck. Behandlingen är diskret men effektiv, och passar både kvinnor och män.`}
      details={[
        { label: 'Behandlingstid', value: '15 minuter' },
        { label: 'Pris', value: '1 700 kr' },
        { label: 'Fördelar', value: 'Slätare haka, mjukare intryck' },
        { label: 'Rekommenderat för', value: 'Personer med stark hakmuskulatur och gropig struktur' },
      ]}
      beforeText={`Undvik rökning, alkohol och smink på behandlingsdagen. Kom utan produkter i ansiktet.`}
      afterText={`Undvik massage av området, träning och stark ansiktsmimik i 24 timmar.<br />
      Resultat märks ofta efter 2–4 dagar och håller i upp till 3–4 månader.`}
      bookLink="https://www.bokadirekt.se/places/house-of-aesthetics-34817?rs=1040534"
      bookButtonText="Boka Botox | Apelsinhaka"
    />
  );
};

export default RynkbehandlingApelsinhaka;
