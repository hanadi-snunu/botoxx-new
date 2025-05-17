import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import treatmentImage from '../../../img/injection.png';

const CarboxyOgon = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={treatmentImage}
      title="Carboxy | Ögon"
      description="Behandling med koldioxid för att förbättra huden runt ögonen."
      extraDescription={`Carboxy terapi, även kallad "mirakelgasen", har hyllats som en av de mest innovativa estetiska behandlingarna sedan botox. <br /><br />
      Behandlingen går ut på att leverera små mängder koldioxidgas under huden med hjälp av en tunn nål, vilket förbättrar cirkulationen och stimulerar kollagenproduktionen. <br /><br />
      Carboxy runt ögonen kan:<br />
      - Minska mörka ringar genom ökad syresättning<br />
      - Reducera påsar genom hudåtstramning och fettminskning<br />
      - Släta ut kråksparkar och rynkor runt ögonen<br />
      - Förbättra hudstrukturen på övre ögonlock och runt ögonen generellt`} 
      details={[
        { label: 'Behandlingstid', value: '30 minuter' },
        { label: 'Pris', value: '1 000 kr' },
        { label: 'Fördelar', value: 'Ljusa upp, strama åt, förbättra hudkvalitet runt ögonen' },
        { label: 'Rekommenderat för', value: 'Personer med mörka ringar, påsar eller fina linjer under ögonen' },
      ]}
      beforeText={`Undvik koffein, alkohol och blodförtunnande 24 timmar innan behandlingen. Kom utan smink.`}
      afterText={`- Undvik att röra området de första timmarna<br />
      - Ingen träning eller makeup inom 24 timmar<br />
      - Lätt svullnad eller rodnad är normalt och försvinner vanligtvis inom 1–2 dagar`}
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/carboxy-ogon-1888716"
      bookButtonText="Boka Carboxy | Ögon"
    />
  );
};

export default CarboxyOgon;