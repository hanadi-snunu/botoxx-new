import React from "react";
import CommonTreatmentPage from "../ansiktsbehandlingar/CommonTreatmentPage";
import injection2 from "../../../img/injection.png";



export const RrsEyes = () => (
  <CommonTreatmentPage
    backgroundImage={injection2}
    title="Skinbooster | RRS Eyes"
    description="Behandling framtagen specifikt för det känsliga ögonområdet."
    extraDescription="Är du ute efter att behandla ögonområdet så är denna behandlingen speciellt framtagen för det! Den ljusar upp, stimulerar kollagen och jobbar även på fina linjer. <br /><br />Kombinationen av hyaluronsyra, antioxidanter och vitaminer dränerar vätska, reparerar och fyller ut huden. <br /><br />Rekommendationen är en kur på 4–6 gånger med intervall på 10–14 dagar."
    details={[
        { label: 'Pris', value: '799 kr' },
        { label: 'Tid', value: '15 minuter' },
        { label: "Rekommenderad kur", 
        value: "4–6 behandlingar" }, 
        { label: "Behandlingsintervall", 
            value: "10–14 dagar" }, { label: "Område", value: "Runt ögonen" }]}
    beforeText="Undvik alkohol, smink och blodförtunnande mediciner innan behandling."
    afterText="Ingen träning, bastu eller smink på 48h. Lätt svullnad kan förekomma."
    bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/skinbooster-rrs-eyes-1963977"
    bookButtonText="Boka | RRS Eyes"
  />
);
