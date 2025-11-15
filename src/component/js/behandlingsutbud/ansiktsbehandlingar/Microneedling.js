import React from 'react';
import CommonTreatmentPage from './CommonTreatmentPage';
import microneedlingImage from '../../../img/ansiktsbehandling2.jpg'; // Byt till rätt bild

const Microneedling = () => {
  return (
    <CommonTreatmentPage
      backgroundImage={microneedlingImage}
      title="Microneedling"
      description="En behandling som stimulerar hudens kollagenproduktion och förbättrar hudens struktur."
      extraDescription={`Microneedling är en populär behandling som 
        stimulerar kollagenproduktionen och förbättrar hudens struktur 
        och kvalitet. Genom att skapa mikrokanaler i huden behandlas problem 
        som akneärr, fina linjer, förstorade porer och pigmentfläckar. 
        Behandlingen resulterar i en föryngrad hud med ökad elasticitet 
        och lyster. Näringsämnen kan också slussas in för att maximera effekten.<br /><br />

        Att tänka på:<br /><br />
        Behandlingen kan kännas något obehaglig trots bedövning, 
        och huden kan bli röd och känslig efteråt. SPF rekommenderas 
        för att skydda huden. Behandlingen är inte lämplig för gravida 
        eller personer med aktiv akne eller hudsjukdomar.<br /><br />

      Behandlingsområden:
 <ul>
          <li>Ansikte</li>
          <li>Hals</li>
          <li>Dekoltage</li>
         
        </ul>
`}
      details={[
        { label: 'Behandlingstid', value: 'Varierar' },
        { label: 'Pris', value: 'Varierar' },
        { label: 'Fördelar', value: 'Ökad kollagenproduktion, jämnare hudton, minskade ärr' },
        { label: 'Rekommenderat för', value: 'Alla hudtyper som vill förbättra hudens struktur' },
      ]}
      beforeText="Inför behandlingen behöver du pausa retinol 2 veckor innan och undvika sol 48h 
innan behandlingen. Om du är gravid eller ammande kan du inte utföra 
denna behandling.
"
      afterText="Undvik sol och exfoliering i minst 7 dagar för att skydda huden."
      bookLink="https://www.bokadirekt.se/places/house-of-aesthetics-34817"
      bookButtonText="Boka Microneedling"
    />
  );
};

export default Microneedling;
