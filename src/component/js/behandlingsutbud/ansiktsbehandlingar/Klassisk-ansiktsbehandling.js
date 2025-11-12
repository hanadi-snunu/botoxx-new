import React from 'react';
import CommonTreatmentPage from './CommonTreatmentPage';
import klassiskImage from '../../../img/ansiktsbehandling2.jpg'; // Byt ut till rätt bildfil

const KlassiskAnsiktsbehandling = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={klassiskImage}
      title="Klassisk Ansiktsbehandling"
      description="En komplett behandling som ger din hud näring, rengöring och återfuktning."
      extraDescription="Vår klassiska ansiktsbehandling handlar allt om din huds behov och målet är att du får 
det din hud behöver samtidigt som du får en djupgående och avkopplande upplevelse.
Hudterapeuten kommer erbjuda dig det bästa som din hud är behov av men även en 
hudanalys för att du ska lära känna din hud bättre. I behandlingen ingår det även 
rengöring, peeling och portömnimg. Därefter återfuktas din hud med fukt och 
ansiktsmask och en avslappnande ansikts massage! "
      details={[
        { label: 'Behandlingstid', value: '60 min' },
        { label: 'Pris', value: '749 kr' },
        { label: 'Fördelar', value: 'Rengjord hud, förbättrad återfuktning, frisk lyster' },
        { label: 'Rekommenderat för', value: 'Alla hudtyper som behöver en boost' },
      ]}
      beforeText="Kom osminkad och undvik exfoliering minst 24 timmar före behandlingen."
      afterText="Återfukta huden regelbundet och använd solskydd efter behandlingen. Undvik exfoliering i minst 7 dagar för att skydda huden."
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/klassisk-ansiktsbehandling-60-min-1693234"
      bookButtonText="Boka Klassisk Ansiktsbehandling"
    />
  );
};

export default KlassiskAnsiktsbehandling;
