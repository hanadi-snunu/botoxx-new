import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import munImage from '../../../img/injection.png'; // Byt vid behov till specifik bild

const RynkbehandlingMun = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={munImage}
      title="Botox | Rynkor runt munnen"
      description="Behandling av fina linjer runt munnen – periorala linjer."
      extraDescription={`De små vertikala linjerna runt munnen, även kallade rökrynkor eller periorala linjer, uppstår ofta med ålder, rökning eller solskador. <br /><br />
      Med noggrann botoxinjektion kan dessa linjer mjukas upp för ett yngre och mer avslappnat uttryck. Behandlingen påverkar inte din rörlighet att prata eller le, utan förbättrar endast hudens struktur och spänst.`}
      details={[
        { label: 'Behandlingstid', value: '15 minuter' },
        { label: 'Pris', value: '1 700 kr' },
        { label: 'Fördelar', value: 'Slätare hud runt munnen, yngre utseende' },
        { label: 'Rekommenderat för', value: 'Personer med fina linjer runt munnen' },
      ]}
      beforeText={`Undvik rökning, alkohol och blodförtunnande 24 timmar innan behandling. Kom utan smink och med ren hud.`}
      afterText={`Undvik att dricka med sugrör, röka eller belasta området första dagen.<br />
      - Undvik ansiktsmassage eller träning första 24 timmarna.<br />
      - Resultatet utvecklas under 3–5 dagar och håller i 3–4 månader.`}
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/botox-1-omrade-1040523"
      bookButtonText="Boka Botox | Runt munnen"
    />
  );
};

export default RynkbehandlingMun;
