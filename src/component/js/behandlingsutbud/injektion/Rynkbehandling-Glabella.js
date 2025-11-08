import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import glabellaImage from '../../../img/injection.png'; // Byt gärna till en specifik bild om du har

const RynkbehandlingGlabella = () => {
  return (
    <CommonTreatmentPage
      /*backgroundImage={glabellaImage}*/
       headerStyle="plain" 
      title="Botox | Glabella (bekymmersrynkan)"
      description="Minska de vertikala rynkorna mellan ögonbrynen för ett mer avslappnat utseende."
      extraDescription={`Glabellaområdet, även kallat bekymmersrynkan, är vanligt att behandla med muskelavslappnande injektioner. <br /><br />
      Denna behandling mjukar upp djupa linjer som skapas av mimik och spända muskler mellan ögonbrynen. Det ger ett piggare och mindre stramt uttryck utan att påverka andra delar av ansiktet. Resultatet varar i flera månader och är ett av de mest efterfrågade områdena för rynkreducering.`}
      details={[
        { label: 'Behandlingstid', value: '15 minuter' },
        { label: 'Pris', value: '1 700 kr' },
        { label: 'Fördelar', value: 'Mindre stram blick, slätare mellan ögonbrynen' },
        { label: 'Rekommenderat för', value: 'Personer med bekymmersrynkor eller spända muskler i glabellaområdet' },
      ]}
      beforeText={`Undvik blodförtunnande läkemedel, alkohol och koffein minst 24 timmar innan behandling. Kom osminkad.`}
      afterText={`Rör inte det behandlade området första timmarna efter behandling.<br />
      - Undvik träning samma dag.<br />
      - Undvik att ligga ner de första 4 timmarna.<br />
      Resultat syns vanligtvis inom 3–5 dagar och håller i sig upp till 4–5 månader.`}
      bookLink="https://www.bokadirekt.se/places/house-of-aesthetics-34817?rs=1040534"
      bookButtonText="Boka Botox | Glabella"
    />
  );
};

export default RynkbehandlingGlabella;
