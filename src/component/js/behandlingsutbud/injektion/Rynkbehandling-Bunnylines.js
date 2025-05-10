import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import bunnylinesImage from '../../../img/injection.png'; // Byt gärna till en specifik bild

const RynkbehandlingBunnylines = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={bunnylinesImage}
      title="Botox | Bunnylines"
      description="Minska synliga skrattrynkor längs näsryggen för ett mjukare utseende."
      extraDescription={`Bunnylines är de små rynkor som uppstår längs näsryggen vid skratt eller när du rynkar på näsan. <br /><br />
      Med en botoxbehandling kan dessa linjer slätas ut på ett naturligt sätt utan att påverka mimiken. Behandlingen är snabb, smidig och ger ett piggare uttryck runt näsan.`}
      details={[
        { label: 'Behandlingstid', value: '15 minuter' },
        { label: 'Pris', value: '1 700 kr' },
        { label: 'Fördelar', value: 'Slätare näsrygg, naturligare leende' },
        { label: 'Rekommenderat för', value: 'Personer med synliga linjer längs näsan vid mimik' },
      ]}
      beforeText={`Undvik alkohol, blodförtunnande läkemedel och intensiv ansiktsrörelse innan behandlingen. Kom utan smink.`}
      afterText={`Undvik tryck på området de första timmarna. Ingen träning eller bastu på 24 timmar.<br />
      Resultatet märks vanligtvis inom 2–5 dagar och varar i cirka 3–4 månader.`}
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/botox-1-omrade-1040523"
      bookButtonText="Boka Botox | Bunnylines"
    />
  );
};

export default RynkbehandlingBunnylines;
