import React from 'react';
import CommonTreatmentPage from '../ansiktsbehandlingar/CommonTreatmentPage';
import injection2 from '../../../img/injection.png';

const Hyalase = () => (
  <CommonTreatmentPage
    backgroundImage={injection2}
    title="Hyalase | Borttagning av befintlig fillers"
    description="Säker och effektiv borttagning av fillers baserade på hyaluronsyra."
    extraDescription="Hyalase används för att ta bort befintliga fillers som är baserade på hyaluronsyra (HA). Det är ett enzym som katalyserar nedbrytningen av fillermaterial och används både vid kosmetiska justeringar och vid akuta situationer där filler injicerats fel eller påverkat blodkärl.<br /><br />
    Hyalase är det enda godkända preparatet som snabbt och effektivt kan lösa upp hyaluronbaserade fillers, vilket gör den till ett viktigt verktyg vid komplikationer eller missnöje med tidigare behandling."
    details={[
      { label: 'Behandlingstid', value: '30 minuter' },
      { label: 'Pris', value: '2 000 kr' },
      { label: 'Används för', value: 'Akuta komplikationer eller estetisk korrigering' },
    ]}
    beforeText="Undvik alkohol, blodförtunnande mediciner och kom utan smink till behandlingen."
    afterText="Undvik träning, alkohol, smink, bastu och flygresor under de första 48 timmarna."
    bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/hyalase-borttagning-av-befintlig-fillers-2082049"
    bookButtonText="Boka Hyalase"
  />
);

export default Hyalase;
