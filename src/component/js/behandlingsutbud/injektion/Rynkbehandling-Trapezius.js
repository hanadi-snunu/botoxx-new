import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import trapeziusImage from '../../../img/injection.png'; // Ändra till specifik bild om du har

const RynkbehandlingTrapezius = () => {
  return (
    <CommonTreatmentPage
      /*backgroundImage={trapeziusImage}*/
       headerStyle="plain" 
      title="Botox | Trapezius (axelavslappning)"
      description="Lindra spänningar i axlar och nacke med hjälp av botoxinjektioner."
      extraDescription={`Trapeziusbehandling med botox hjälper till att minska spända och stela axlar, vilket är vanligt vid stress eller statiskt arbete. <br /><br />
      Genom att injicera muskelavslappnande medel i trapeziusmuskeln upplevs ofta en lättnad i nacke, axlar och ibland även spänningshuvudvärk. Som bonus kan axlarna sjunka något vilket ger en mer elegant hållning.`}
      details={[
        { label: 'Behandlingstid', value: '15 minuter' },
        { label: 'Pris', value: '3000' },
        { label: 'Fördelar', value: 'Minskad spänning, lindring av huvudvärk, förbättrad hållning' },
        { label: 'Rekommenderat för', value: 'Personer med spända axlar, stressrelaterad värk eller estetiskt axellyft' },
      ]}
      beforeText={`Undvik massage och träning innan behandling. Informera om pågående muskelrelaxantia eller fysioterapi.`}
      afterText={`Ingen fysisk ansträngning eller massage första dygnet.<br />
      - Mild ömhet i området kan förekomma.<br />
      - Resultatet känns gradvis inom 3–7 dagar och varar upp till 4 månader.`}
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/barbie-botox-trapezius-2966403"
      bookButtonText="Boka Botox | Trapezius"
    />
  );
};

export default RynkbehandlingTrapezius;
