import React from "react";
import CommonTreatmentPage from "./CommonTreatmentPage";
import heroImage from "../../../img/ansiktsbehandling1.jpg"; // valfri header-bild

const AnsiktsmassageX5 = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={heroImage}
      title="Ansiktsmassage X5"
      description="Paket med fem behandlingar för ökad cirkulation, avslappning och förbättrad hudkvalitet."
      extraDescription={`Det här paketet innehåller fem skräddarsydda ansiktsmassager som hjälper till att minska spänningar, 
      stimulera lymfflödet och ge en frisk lyster över tid. <br /><br />
      Perfekt för dig som vill ha regelbunden egenvård och långsiktigt resultat.`}
      details={[
        { label: "Antal behandlingar", value: "5 st" },
        { label: "Behandlingstid", value: "ca 30–45 min per tillfälle" },
        { label: "Pris", value: "—" }, // fyll i senare
        { label: "Fördelar", value: "Minskar spänningar, ökar cirkulation, förbättrar lyster" },
        { label: "Rekommenderas för", value: "Alla hudtyper, särskilt vid spänd käke/panna" },
      ]}
      beforeText={`Kom med ren hud utan makeup. Undvik kraftig exfoliering 24 h innan.`}
      afterText={`Återfukta huden väl. Undvik hård träning och bastu i ca 24 h för bästa effekt.`}
      bookLink="https://www.bokadirekt.se/places/house-of-aesthetics-34817"  // byt till exakt tjänst när den finns
      bookButtonText="Boka Ansiktsmassage X5"
    />
  );
};

export default AnsiktsmassageX5;
