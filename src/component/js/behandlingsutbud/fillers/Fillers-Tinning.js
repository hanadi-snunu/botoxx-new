import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import fillerImage from '../../../img/injection.png';

const FillersTinning = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={fillerImage}
      title="Fillers | Tinning"
      description="Återställ volym och förbättra konturer i tinningarna."
      extraDescription="Fillers i tinningarna är en behandling som syftar till att återställa förlorad volym och fyllighet. <br /><br />
      Med åldern förlorar huden sin elasticitet och underliggande fettvävnad vilket leder till att tinningarna ser insjukna ut och ändrar ansiktsformen. <br /><br />
      Genom att injicera fillers kan man förbättra konturerna och skapa mer definierade ansiktsdrag. Behandlingen ger även en subtil lyftningseffekt och kan i vissa fall minska rynkor i panna och ögonområdet."
      details={[
        { label: 'Behandlingstid', value: '30 minuter' },
        { label: 'Pris', value: 'Från 3 000 kr' },
        { label: 'Fördelar', value: 'Förbättrad ansiktsform, mer balans, minskade insjunkna områden' },
        { label: 'Rekommenderat för', value: 'Personer med insjunkna tinningar och önskan om förbättrad kontur' },
      ]}
      beforeText="Undvik sol, bad, bastu, alkohol och intensiv träning inom 48h efter behandlingen. Inga flygresor inom 24h. Undvik smink och att röra vid behandlingsområdet i minst 12h."
      afterText="Svullnad, rodnad eller blåmärken kan förekomma. Undvik tryck på det behandlade området under första dygnet. Följ noggrant eftervårdsinstruktioner."
      bookLink="https://www.bokadirekt.se/places/house-of-aesthetics-34817?rs=1040534"
      bookButtonText="Boka Fillers | Tinning"
    />
  );
};

export default FillersTinning;
