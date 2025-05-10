import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import fillerImage from '../../../img/injection.png';

const FillersMarionettlinjer = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={fillerImage}
      title="Fillers | Marionettlinjer"
      description="Lyft sura mungipor och minska linjer."
      extraDescription="Att “lyfta” sura mungipor som börjar dra sig nedåt gör stor skillnad för hela utseendet. <br /><br />
      Med fillers kan man återskapa volymförlusten med små injektioner av fillers i området runt och under mungiporna. <br /><br />
      Eventuella linjer fylls i och eftersom mungiporna fylls i med mer volym underifrån kommer de att återgå till ett läge som hänger samman med en vackert naturlig mun. <br /><br />
      Behandlingen ger ett snabbt och synligt resultat. En injektionsbehandling med filler mot “trötta” mungipor eller marionettlinjer varar i mellan fyra och sju månader beroende på varje patients unika förutsättningar. <br /><br />
      För att upprätthålla effekten bör behandlingen upprepas med några månaders mellanrum."
      details={[
        { label: 'Behandlingstid', value: '30 minuter' },
        { label: 'Pris', value: 'Från 3 000 kr' },
        { label: 'Fördelar', value: 'Lyfter mungipor, minskar linjer, naturligt utseende' },
        { label: 'Rekommenderat för', value: 'Personer med nedåtgående mungipor eller volymförlust kring munnen' },
      ]}
      beforeText="Undvik sol, bad, bastu, alkohol och intensiv träning inom 48h efter behandlingen. Inga flygresor inom 24h. Undvik smink och att röra vid behandlingsområdet i minst 12h."
      afterText="Lätt svullnad och blåmärken kan förekomma. Följ noggrant eftervårdsråd för bästa resultat och hållbarhet."
      bookLink="/Bokatid"
      bookButtonText="Boka Fillers | Marionettlinjer"
    />
  );
};

export default FillersMarionettlinjer;
