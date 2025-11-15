import React from "react";
import CommonTreatmentPage from "../ansiktsbehandlingar/CommonTreatmentPage";
import injection2 from "../../../img/PRPPRF.png";


export const PrpEksemPsoriasis = () => (
  <CommonTreatmentPage
    backgroundImage={injection2}
    title="PRP | Eksem och Psoriasis"
    description="Lindring för hudtillstånd med hjälp av kroppens egen plasma."
    extraDescription="Har du problem med eksem eller psoriasis? Vår klinik erbjuder en innovativ behandling med plasmarik plasma (PRP). Genom att använda din egen plasma kan vi hjälpa till att bekämpa eksem och psoriasis. <br /><br />PRP-behandlingen har visat lovande resultat och kan bidra till att lindra obehag och förbättra hudens tillstånd. Kontakta oss för att boka en konsultation."
    details={[
      { label: "Pris", value: "2 500 kr" },
      { label: "Tid", value: "45 minuter" },
      { label: "Behandlingsområde", value: "Eksem & Psoriasisområden" }
    ]}
    beforeText={`Att tänka på inför behandling<br />
- Dricka mycket vatten. Gärna 2-3 L. Detta hjälper kvaliteten på plasman.<br />
- Tvätta håret inför behandling & undvik hårprodukter<br />
- Undvik alkoholintag och droger<br />
- Undvik smärtstillande & Omega3 5 dagar innan<br />
- Exponera inte hårbotten för sol 7 dagar innan<br />
- Antalet behandlingar är individuellt men generellt rekommenderas en kur på 4-6 gånger med 4 veckors mellanrum. Därefter behövs underhållsbehandling minst två gånger om året.`}



afterText={`Att tänka på efter behandling<br />
- Byt örngott<br />
- Undvik träning 48 h efter<br />
- Undvik Alkohol på 24 h<br />
- Hårtvätt och hårprodukter bör undvikas tills dagen efter<br />
- Exponering av sol på behandlade området bör undvikas i 7 dagar<br />
- Det är normalt att känna klåda, ömhet, svullnad och rodnad.<br />
- Initialt kan man uppleva en tillfällig ökning av håravfall. Detta på grund av att hårfollikeln stimuleras av tillväxtfaktorer. Detta gör att det nya, hälsosammare och starkare håret pressar ut det gamla och tunnare håret.`}

    bookLink="https://www.bokadirekt.se/boka-tjanst/house-of-aesthetics-34817/prp-eksem-och-psoriasis-2183109"
    bookButtonText="Boka | PRP Eksem & Psoriasis"
  />
);