import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import fillerImage from '../../../img/injection.png';

const FillersNasolabialveck = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={fillerImage}
      title="Fillers | Nasolabialveck"
      description="Minska linjer mellan näsa och mun för ett fräschare uttryck."
      extraDescription="Fillers för nasolabiala veck används för att minska synligheten för rynkor som sträcker sig från näsan ner till mungiporna. <br /><br />
      Dessa veck blir ofta mer framträdande med åldern på grund av volymförlust och minskad elasticitet i huden. <br /><br />
      Genom att injicera fillers i dessa områden kan man återställa volymen och släta ut linjerna, vilket resulterar i ett mer ungdomligt och balanserat ansiktsuttryck. Behandlingen bidrar även till att förbättra ansiktets konturer."
      details={[
        { label: 'Behandlingstid', value: '30 minuter' },
        { label: 'Pris', value: 'Från 3 300 kr' },
        { label: 'Fördelar', value: 'Mjukare linjer, återställd volym, förbättrad symmetri' },
        { label: 'Rekommenderat för', value: 'Personer med tydliga veck från näsa till mun' },
      ]}
      beforeText="Undvik sol, bad, bastu, alkohol och intensiv träning inom 48h efter behandlingen. Inga flygresor inom 24h. Undvik smink och att röra vid behandlingsområdet i minst 12h."
      afterText="Svullnad, rodnad eller blåmärken kan förekomma. Undvik tryck på det behandlade området under första dygnet. Följ noggrant eftervårdsinstruktioner."
      bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/naskorrigering-ml-1040533"
      bookButtonText="Boka Fillers | Nasolabialveck"
    />
  );
};

export default FillersNasolabialveck;
