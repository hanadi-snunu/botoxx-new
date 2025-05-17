import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import injection2 from '../../../img/injection.png';

export const SkinboosterRestylane = () => (
  <CommonTreatmentPage
    backgroundImage={injection2}
    title="Skinbooster | Restylane"
    description="Ger näring och lyster samt minskar fina linjer och torrhet."
    extraDescription="Restylane Skinbooster återfuktar huden på djupet och ger näring. Det förbättrar hudens elasticitet, lyster och struktur. Används ofta för att boosta hela midface eller riktade områden med fina linjer. <br /><br />
    Produkten är effektiv vid torr, livlös hy och även vid behandling av acneärr."
    details={[
        { label: 'Pris', value: '2 500 kr' },
        { label: 'Tid', value: '30 minuter' },
      { label: 'Områden', value: 'Ansikte, hals, midface, acneärr' },
      { label: 'Behandlingstyp', value: 'Djup återfuktning med hyaluronsyra' },
      { label: 'Effekt', value: 'Fyllighet, elasticitet, minskade linjer' },
    ]}
    beforeText="Undvik alkohol, smink och blodförtunnande mediciner innan behandling."
    afterText="Ingen träning, bastu eller smink på 48h. Lätt svullnad kan förekomma."
    bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/skinbooster-restylane-1795129"
    bookButtonText="Boka | Restylane"
  />
);