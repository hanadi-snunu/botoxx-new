import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import gummysmileImage from '../../../img/injection.png'; // Byt till specifik bild om du har

const RynkbehandlingGummysmile = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={gummysmileImage}
      title="Botox | Gummysmile"
      description="Behandla ett synligt tandköttsleende med hjälp av muskelavslappnande injektioner."
      extraDescription={`Gummysmile innebär att en stor del av tandköttet syns vid leende, något många upplever som störande. <br /><br />
      Med hjälp av botox injiceras små mängder i överläppens muskel för att minska dess dragkraft. Detta ger ett mer balanserat leende utan att påverka din naturliga mimik. Behandlingen är snabb och kräver ingen återhämtning.`}
      details={[
        { label: 'Behandlingstid', value: '15 minuter' },
        { label: 'Pris', value: '1 700 kr' },
        { label: 'Fördelar', value: 'Mindre synligt tandkött, naturligare leende' },
        { label: 'Rekommenderat för', value: 'Personer som visar mycket tandkött vid leende' },
      ]}
      beforeText={`Undvik rökning, alkohol och smink på behandlingsdagen. Kom med ren hud och informera om eventuella mediciner.`}
      afterText={`Undvik att le stort, gnugga området eller träna under första 24 timmarna.<br />
      - Resultatet märks ofta inom 3 dagar och håller i upp till 3–4 månader.`}
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/botox-1-omrade-1040523"
      bookButtonText="Boka Botox | Gummysmile"
    />
  );
};

export default RynkbehandlingGummysmile;
