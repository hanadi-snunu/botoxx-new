import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import pannanImage from '../../../img/injection.png'; // Du kan byta ut till en mer specifik bild om du vill

const RynkbehandlingPannan = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={pannanImage}
      title="Botox | Pannan"
      description="Behandling för att släta ut horisontella rynkor i pannan."
      extraDescription={`Pannan är ett av de vanligaste områdena för botoxbehandling. Med små doser toxin slappnas musklerna av vilket reducerar linjer och förebygger djupare rynkor. <br /><br />
      Behandlingen är snabb och säker, och resultatet är en slätare och mer avslappnad panna utan att förlora ansiktsuttryck. Effekten kommer gradvis inom några dagar och håller i sig upp till 3–5 månader.`}
      details={[
        { label: 'Behandlingstid', value: '15 minuter' },
        { label: 'Pris', value: '1 700 kr' },
        { label: 'Fördelar', value: 'Slätare panna, föryngrat utseende, förebygger rynkor' },
        { label: 'Rekommenderat för', value: 'Personer med horisontella linjer eller spänningar i pannan' },
      ]}
      beforeText={`Undvik blodförtunnande mediciner, koffein och alkohol minst 24 timmar innan behandling. Kom med ren hud utan smink.`}
      afterText={`Undvik att röra behandlat område, träna eller ligga ner inom 4 timmar efter behandlingen.<br />
      - Dag 1–3: Undvik smink och massage i området.<br />
      - Dag 4+: Resultatet börjar synas.<br />
      Effekten varar ca 3–5 månader.`}
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/botox-1-omrade-1040523"
      bookButtonText="Boka Botox | Pannan"
    />
  );
};

export default RynkbehandlingPannan;
