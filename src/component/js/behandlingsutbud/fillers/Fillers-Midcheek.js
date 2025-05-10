import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import fillerImage from '../../../img/injection.png';

const FillersMidcheek = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={fillerImage}
      title="Fillers | Midcheek"
      description="Återställ volym och fyllighet mitt på kinden för ett fräschare utseende."
      extraDescription="Området mitt på kinden under kindbenet behandlas för att återställa volym och fyllighet som förlorats med åldern. <br /><br />
      Med tiden tappar huden sin elasticitet och den underliggande fettvävnaden minskar, vilket gör att kinderna kan framstå som insjunkna och ge ett tröttare utseende. Genom att injicera filler i midcheek-området kan man återställa volymen och skapa ett mer ungdomligt och fräschare helhetsintryck."
      details={[
        { label: 'Behandlingstid', value: '30–60 min beroende på volym' },
        { label: 'Pris', value: '2 500–8 800 kr beroende på ml' },
        { label: 'Fördelar', value: 'Fräschare intryck, återställd volym, piggare utseende' },
        { label: 'Rekommenderat för', value: 'Personer med insjunkna kinder eller trött ansiktsuttryck' },
      ]}
      beforeText="Undvik sol, bad, bastu, alkohol och intensiv träning inom 48h efter behandlingen. Inga flygresor inom 24h. Undvik smink och att röra vid behandlingsområdet i minst 12h."
      afterText="Eventuell svullnad eller blåmärken kan uppstå efter behandlingen. Dessa är tillfälliga och försvinner oftast inom några dagar. Följ alltid behandlarens instruktioner för optimal återhämtning."
      bookLink="/Bokatid"
      bookButtonText="Boka Fillers | Midcheek"
    />
  );
};

export default FillersMidcheek;
