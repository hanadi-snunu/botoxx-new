import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import fillerImage from '../../../img/injection.png';

const FillersTearTrough = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={fillerImage}
      title="Fillers | Tear Trough"
      description="Fyll ut under ögonen för ett piggare utseende."
      extraDescription="Under tid så åldras vi och förlorar därmed en viss volym i ansiktet, ett utsatt område är oftast under ögonen. <br /><br />
      När volymen under ögonen minskar kan detta orsaka ett tröttare utseende samt mörka skuggor i ögonpartiet. <br /><br />
      Genom att injicera en väldigt fin och tunn filler kan man återskapa denna volymförlust och genast få ett piggare resultat."
      details={[
        { label: 'Behandlingstid', value: '30 minuter' },
        { label: 'Pris', value: 'Från 3 300 kr' },
        { label: 'Fördelar', value: 'Piggare utseende, minskad skuggning, återställd volym' },
        { label: 'Rekommenderat för', value: 'Personer med mörka ringar eller insjunkningar under ögonen' },
      ]}
      beforeText="Undvik sol, bad, bastu, alkohol och intensiv träning inom 48h efter behandlingen. Inga flygresor inom 24h. Undvik smink och att röra vid behandlingsområdet i minst 12h."
      afterText="Lätt svullnad och blåmärken kan förekomma. Undvik tryck på det behandlade området under första dygnet och följ eftervårdsinstruktionerna noggrant."
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/tear-trough-1040534"
      bookButtonText="Boka Fillers | Tear Trough"
    />
  );
};

export default FillersTearTrough;