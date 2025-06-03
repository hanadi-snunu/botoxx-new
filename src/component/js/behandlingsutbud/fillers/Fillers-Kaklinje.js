import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import fillerImage from '../../../img/injection.png';

const FillersKaklinje = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={fillerImage}
      title="Fillers | Käklinje"
      description="Framhäv eller återställ käklinjen för mer definition."
      extraDescription="Fillers används för att framhäva eller återställa volymen längs käklinjen, vilket har stor betydelse för både ansiktets och halsens konturer. <br /><br />
      Med tiden förlorar många volym och definition i käklinjen, vilket kan påverka ansiktets struktur. Behandlingen hjälper till att skapa tydligare linjer, förbättra balansen mellan ansiktsdrag och återställa en ungdomligare form."
      details={[
        { label: 'Behandlingstid', value: '30–60 min beroende på volym' },
        { label: 'Pris', value: '2 500–8 800 kr beroende på ml' },
        { label: 'Fördelar', value: 'Definierad käklinje, förbättrad ansiktskontur' },
        { label: 'Rekommenderat för', value: 'Personer med förlorad käklinje eller otydliga konturer' },
      ]}
      beforeText="Undvik sol, bad, bastu, alkohol och intensiv träning inom 48h efter behandlingen. Inga flygresor inom 24h. Undvik smink och att röra vid behandlingsområdet i minst 12h."
      afterText="En viss svullnad eller rodnad kan förekomma i området efter behandlingen. Undvik tryck på käken och följ din behandlares eftervårdsinstruktioner för bästa resultat."
      bookLink="https://www.bokadirekt.se/places/house-of-aesthetics-34817?rs=1040534"
      bookButtonText="Boka Fillers | Käklinje"
    />
  );
};

export default FillersKaklinje;
