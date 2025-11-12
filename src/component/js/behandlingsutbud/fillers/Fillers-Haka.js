import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import fillerImage from '../../../img/fillers.png';

const FillersHaka = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={fillerImage}
      title="Fillers | Haka"
      description="Forma eller justera hakan för ett mer balanserat ansiktsintryck."
      extraDescription="Fillers i hakan används för att förbättra eller justera hakans form och proportioner i ansiktet. <br /><br />
      Behandlingen kan hjälpa till att skapa en mer definierad käklinje, balansera ansiktsdrag eller korrigera en svag eller indragen haka. Med tiden kan hakan förlora volym och form, och fillers är då ett effektivt sätt att återställa dess kontur utan kirurgi. <br /><br />
      Genom att injicera fillers i hakan kan man även förbättra profilens utseende, vilket ger ett mer harmoniskt och balanserat intryck."
      details={[
        { label: 'Behandlingstid', value: '30 minuter' },
        { label: 'Pris', value: '2 500–8 800 kr beroende på mängd' },
        { label: 'Fördelar', value: 'Förbättrad profil, balanserat ansikte, definierad haka' },
        { label: 'Rekommenderat för', value: 'Personer med svag eller tillbakadragen haka' },
      ]}
      beforeText="Undvik sol, bad, bastu, alkohol och intensiv träning inom 48h efter behandlingen. Inga flygresor inom 24h. Undvik smink och att röra vid behandlingsområdet i minst 12h."
      afterText="Viss svullnad, ömhet eller blåmärken kan förekomma. Undvik att vila hakan på händerna första dygnet och följ behandlarens rekommendationer."
      bookLink="https://www.bokadirekt.se/places/house-of-aesthetics-34817?rs=1040534"
      bookButtonText="Boka Fillers | Haka"
    />
  );
};

export default FillersHaka;
