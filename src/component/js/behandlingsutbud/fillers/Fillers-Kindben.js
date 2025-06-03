import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import fillerImage from '../../../img/injection.png';

const FillersKindben = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={fillerImage}
      title="Fillers | Kindben"
      description="Återskapa och förstärk kindbenens konturer."
      extraDescription="Fillers i kindbenen är en populär behandling för att skapa mer definierade och framträdande kindben. <br /><br />
      Med åren förlorar ansiktet sin naturliga volym, vilket gör att kindbenen framstår som plattare och mindre markanta. Genom att använda fillers kan man återställa förlorad volym eller förstärka kindbenens konturer, vilket ger ansiktet ett mer ungdomligt och balanserat utseende. <br /><br />
      Behandlingen kan också bidra till att lyfta och ge ett mer naturligt lyft till hela ansiktet, då mer volym i kindbenen ofta ger ett piggare och mer strukturerat intryck."
      details={[
        { label: 'Behandlingstid', value: '30 minuter' },
        { label: 'Pris', value: '-' },
        { label: 'Fördelar', value: 'Mer definierade kindben, föryngrat ansiktsuttryck, återställd volym' },
        { label: 'Rekommenderat för', value: 'Personer med förlorad volym i kindområdet eller som önskar mer markerade kindben' },
      ]}
      beforeText="Undvik sol, bad, bastu, alkohol och högintensiv träning inom 48h efter behandling. Inom 24h inga flygresor efter behandling. Undvik att sminka, vidröra eller gnugga området 12h efter behandling."
      afterText="Du kan uppleva svullnad eller blåmärken i det behandlade området, vilket vanligtvis lägger sig inom några dagar. Undvik tryck eller massage på området den första tiden."
      bookLink="https://www.bokadirekt.se/places/house-of-aesthetics-34817?rs=1040534"
      bookButtonText="Boka Fillers | Kindben"
    />
  );
};

export default FillersKindben;
