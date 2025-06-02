import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer"; 
import Hem from "./component/js/Hem";
import Behandlingsutbud from "./component/js/behandlingsutbud/Behandlingsutbud";
import Huvudbehandling from "./component/js/Huvudbehandlingar";
import Hittabehandling from "./component/js/HittaBehandling";
import Kontakt from "./component/js/Kontakt";
import Omoss from "./component/js/Omoss";
import Priser from "./component/js/behandlingsutbud/priser/Priser";
import Utbildning from "./component/js/Utbildningar";
import BokaTid from "./component/js/Bokatid";
import Integritetspolicy from "./component/js/Integritetspolicy";
import Ansikte from "./component/js/behandlingsutbud/ansiktsbehandlingar/Ansiktsbehandlingar";
import Laser from "./component/js/behandlingsutbud/laser/Laserbehandlingar";
import Injektion from "./component/js/behandlingsutbud/injektion/Injektionsbehandlingar";
import ScrollToTop from "./component/js/ScrollToTop";
import "./App.css";
import Trådlyft from "./component/js/behandlingsutbud/tradlyft/Trådlyft";
import HydraFacial from "./component/js/behandlingsutbud/hydrafacial/HydraFacial";
import Massage from "./component/js/behandlingsutbud/massage/Massagee";
import Vaxning from "./component/js/behandlingsutbud/vaxningg/Vaxning";
import RelaxTime from "./component/js/behandlingsutbud/massage/RelaxingTime";
import KlippkortX5 from "./component/js/behandlingsutbud/massage/KlippkortX5";
import AnsiktsMassage from "./component/js/behandlingsutbud/massage/Ansiktsmassage";
import Armar from "./component/js/behandlingsutbud/vaxningg/Armar";
import ArmarMan from "./component/js/behandlingsutbud/vaxningg/ArmarMen";
import Armhala from "./component/js/behandlingsutbud/vaxningg/Armhala";
import Bikini from "./component/js/behandlingsutbud/vaxningg/Bikini";
import Brasiliansk from "./component/js/behandlingsutbud/vaxningg/Brasiliansk";
import BrostMage from "./component/js/behandlingsutbud/vaxningg/Brost+Mage";
import Halvaben from "./component/js/behandlingsutbud/vaxningg/Halvaben";
import HalvabenBikini from "./component/js/behandlingsutbud/vaxningg/Halvaben+bikini";
import Helaben from "./component/js/behandlingsutbud/vaxningg/Helaben";
import HelabenBikini from "./component/js/behandlingsutbud/vaxningg/Helaben+bikini";
import Helkropp from "./component/js/behandlingsutbud/vaxningg/Helkropp";
import Overlapp from "./component/js/behandlingsutbud/vaxningg/Overlapp";
import OverlappHaka from "./component/js/behandlingsutbud/vaxningg/Overlapp+haka";
import Rygg from "./component/js/behandlingsutbud/vaxningg/Rygg";
import Dermaplaning from "./component/js/behandlingsutbud/ansiktsbehandlingar/Dermaplaning";
import DjuprensandeAnsiktsbehandling from "./component/js/behandlingsutbud/ansiktsbehandlingar/Djuprensande-ansiktsbehandling";
import HydraFa from "./component/js/behandlingsutbud/ansiktsbehandlingar/Hydra-facial";
import InstantClean from "./component/js/behandlingsutbud/ansiktsbehandlingar/Instant-clean";
import InstantGlow from "./component/js/behandlingsutbud/ansiktsbehandlingar/Instant-glow";
import KemiskPeel from "./component/js/behandlingsutbud/ansiktsbehandlingar/Kemisk-peel";
import KlassiskAnsiktsbehandling from "./component/js/behandlingsutbud/ansiktsbehandlingar/Klassisk-ansiktsbehandling";
import LEDLjusterapi from "./component/js/behandlingsutbud/ansiktsbehandlingar/LED-Ljusterapi";
import LyxAnsiktsbehandling from "./component/js/behandlingsutbud/ansiktsbehandlingar/Lyx-ansiktsbehandling";
import Microneedling from "./component/js/behandlingsutbud/ansiktsbehandlingar/Microneedling";
import PRXT33 from "./component/js/behandlingsutbud/ansiktsbehandlingar/PRXT-33";
import DeluxHydraFacial from "./component/js/behandlingsutbud/hydrafacial/Deluxe-HydraFacial";
import PlatinumHydraFacial from "./component/js/behandlingsutbud/hydrafacial/Platinum-HydraFacial";
import StandardHydraFacial from "./component/js/behandlingsutbud/hydrafacial/Standard-HydraFacial";
import GravidaHydraFacial from "./component/js/behandlingsutbud/hydrafacial/HydraFacial-Gravida";
import MonoKinder from "./component/js/behandlingsutbud/tradlyft/Mono-Kinder";
import MonoMarionettlinjer from "./component/js/behandlingsutbud/tradlyft/Mono-Marionettlinjer";
import MonoNasolabiala from "./component/js/behandlingsutbud/tradlyft/Mono-Nasolabiala";
import MonoOgon from "./component/js/behandlingsutbud/tradlyft/Mono-Ogon";
import MonoSuramungipor from "./component/js/behandlingsutbud/tradlyft/Mono-Suramungipor";
import TradlyftDubbelhaka from "./component/js/behandlingsutbud/tradlyft/Tradlyft-Dubbelhaka";
import TradlyftHalslyft from "./component/js/behandlingsutbud/tradlyft/Tradlyft-Halslyft";
import TradlyftKaklinjen from "./component/js/behandlingsutbud/tradlyft/Tradlyft-Kaklinjen";
import TradlyftKindben from "./component/js/behandlingsutbud/tradlyft/Tradlyft-Kindben";
import TradlyftMidface from "./component/js/behandlingsutbud/tradlyft/Tradlyft-Midface";
import InjektionsbehandlingarPris from "./component/js/behandlingsutbud/priser/injektionsbehandlingar-priser";
import TradlyftPriser from "./component/js/behandlingsutbud/priser/tradlyft-priser";
import VaxningPriser from "./component/js/behandlingsutbud/priser/vaxning-priser";
import MassagePriser from "./component/js/behandlingsutbud/priser/massage-priser";
import HydraFacialPriser from "./component/js/behandlingsutbud/priser/hydra-facial-priser";
import AnsiktsbehandlingarPriser from "./component/js/behandlingsutbud/priser/ansiktsbehandlingar-priser";
import LaserbehandlingarPris from "./component/js/behandlingsutbud/priser/laserbehandlingar-priser";
import Rynkreducerand from "./component/js/behandlingsutbud/injektion/Rynkreducerande";
import RynkbehandlingPannan from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Panna";
import RynkbehandlingGlabella from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Glabella";
import RynkbehandlingKrakparkar from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Krakparkar";
import RynkbehandlingMun from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Mun";
import RynkbehandlingBrowlift from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Browlift";
import RynkbehandlingBunnylines from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Bunnylines";
import RynkbehandlingNastipp from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Nastipp";
import RynkbehandlingGummysmile from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Gummysmile";
import RynkbehandlingLipflip from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Lipflip";
import RynkbehandlingMungipor from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Mungipor";
import RynkbehandlingApelsinhaka from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Apelsinhaka";
import RynkbehandlingPlatysma from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Platysma";
import RynkbehandlingHyperhidros from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Hyperhidros";
import RynkbehandlingMasseter from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Masseter";
import RynkbehandlingTrapezius from "./component/js/behandlingsutbud/injektion/Rynkbehandling-Trapezius";
import Fillers from "./component/js/behandlingsutbud/fillers/Fillers";
import FillersKindben from "./component/js/behandlingsutbud/fillers/Fillers-Kindben";
import FillersMidcheek from "./component/js/behandlingsutbud/fillers/Fillers-Midcheek";
import FillersKaklinje from "./component/js/behandlingsutbud/fillers/Fillers-Kaklinje";
import FillersHaka from "./component/js/behandlingsutbud/fillers/Fillers-Haka";
import FillersNasolabialveck from "./component/js/behandlingsutbud/fillers/Fillers-Nasolabialveck";
import FillersTinning from "./component/js/behandlingsutbud/fillers/Fillers-Tinning";
import FillersTearTrough from "./component/js/behandlingsutbud/fillers/Fillers-TearTrough";
import FillersMarionettlinjer from "./component/js/behandlingsutbud/fillers/Fillers-Marionettlinjer";
import Skinbooster from "./component/js/behandlingsutbud/skinboosters/Skinboosters";
import { SkinboosterLongLasting } from "./component/js/behandlingsutbud/skinboosters/Skinbooster-LongLasting";
import { SkinboosterSunekos } from "./component/js/behandlingsutbud/skinboosters/Skinbooster-Sunekos";
import { SkinboosterRestylane } from "./component/js/behandlingsutbud/skinboosters/Skinbooster-Restylane";
import { SkinboosterEjal40 } from "./component/js/behandlingsutbud/skinboosters/Skinbooster-Ejal40";
import Hyalase from "./component/js/behandlingsutbud/fillers/Fillers-Hyalase";
import Prohilo from "./component/js/behandlingsutbud/prohilo/Profhilo";
import PrpPrf from "./component/js/behandlingsutbud/prpprf/PRP";
import { PrpAnsikte } from "./component/js/behandlingsutbud/prpprf/PrpPrf-Ansikte";
import { PrpEksemPsoriasis } from "./component/js/behandlingsutbud/prpprf/PrpPrf-EksemPsoriasis";
import { PrpHar } from "./component/js/behandlingsutbud/prpprf/PrpPrf-Har";
import { RrsXlHair } from "./component/js/behandlingsutbud/prpprf/PrpPrf-RrsHair";
import PrfTearTrough from "./component/js/behandlingsutbud/prpprf/PrpPrf-TearTrough";
import { RrsEyes } from "./component/js/behandlingsutbud/skinboosters/Skinbooster-RRSEyes";
import CarboxyCellutrix from "./component/js/behandlingsutbud/carboxyCellutrix/Carboxy-Cellutrix";
import CarboxyOgon from "./component/js/behandlingsutbud/carboxyCellutrix/Carboxy-Ogon";
import Carboxy from "./component/js/behandlingsutbud/carboxyCellutrix/Carboxy";
import CarboxyCellutrixRRS from "./component/js/behandlingsutbud/carboxyCellutrix/Cellutrix-RRS";
import VitaminDropp from "./component/js/behandlingsutbud/vitamindrop/VitaminDropp";
import BioRepeel from "./component/js/behandlingsutbud/ansiktsbehandlingar/BioRepeel";
import MaskPeel from "./component/js/behandlingsutbud/ansiktsbehandlingar/MaskPeel";
import NordlysIPL from "./component/js/behandlingsutbud/laser/NordlysIpl";
import IPLMindreOmrade from "./component/js/behandlingsutbud/laser/IPL-MindreOmrade";
import IPLAnsikte from "./component/js/behandlingsutbud/laser/IPL-Ansikte";
import IPLAnsikteHals from "./component/js/behandlingsutbud/laser/IPL-Ansikte-Hals";
import IPLAnsikteHalsDekolletage from "./component/js/behandlingsutbud/laser/IPL-Ansikte-Hals-Dekolletage";
import IPLDekolletageHals from "./component/js/behandlingsutbud/laser/IPL-Dekolletage-Hals";
import Frax1550 from "./component/js/behandlingsutbud/laser/Nordlys-Frax1550";
import FraxAnsikteHalsDekolletage from "./component/js/behandlingsutbud/laser/Frax1550-Ansikte-Hals-Dekolletage";
import FraxAnsikteHals from "./component/js/behandlingsutbud/laser/Frax1550-Ansikte-Hals";
import FraxAnsikte from "./component/js/behandlingsutbud/laser/Frax1550-Ansikte";
import FraxHalsDekolletage from "./component/js/behandlingsutbud/laser/Frax1550-Hals-Dekolletage";
import LightBright from "./component/js/behandlingsutbud/laser/Nordlys-LightBright";
import LightBrightAnsikte from "./component/js/behandlingsutbud/laser/LightBright-Ansikte";
import LightBrightAnsikteHals from "./component/js/behandlingsutbud/laser/LightBright-Ansikte-Hals";
import LightBrightAnsikteHalsDekolletage from "./component/js/behandlingsutbud/laser/LightBright-Ansikte-Hals-Dekolletage";
import AvkopplandeMassage from "./component/js/behandlingsutbud/massage/AvkopplandeMassage";
import HotstoneMassage from "./component/js/behandlingsutbud/massage/HotstoneMassage";
import Helkroppsmassage from "./component/js/behandlingsutbud/massage/Helkroppsmassage";
import Sportmassage from "./component/js/behandlingsutbud/massage/Sportmassage";
import Fotmassage from "./component/js/behandlingsutbud/massage/Fotmassage";
import Ryggmassage from "./component/js/behandlingsutbud/massage/Ryggmassage";
import Gravidmassage from "./component/js/behandlingsutbud/massage/Gravidmassage";


function App() {
  return (
    
     <div className="App"> {/* App-klass för layout */}
    <ScrollToTop />
      <Navbar />
    
      <div className="main-content"> {/* Main-content-klass för att placera innehåll rätt */}
        <Routes>
          <Route path="/LightBright-Ansikte" element={<LightBrightAnsikte />} />
          <Route path="/LightBright-Ansikte-Hals" element={<LightBrightAnsikteHals />} />
          <Route path="/LightBright-Ansikte-Hals-Dekolletage" element={<LightBrightAnsikteHalsDekolletage />} />

          <Route path="/Nordlys-LightBright" element={<LightBright />} />

          <Route path="/Frax1550-Ansikte-Hals-Dekolletage" element={<FraxAnsikteHalsDekolletage />} />
          <Route path="/Frax1550-Ansikte-Hals" element={<FraxAnsikteHals />} />
          <Route path="/Frax1550-Ansikte" element={<FraxAnsikte />} />
          <Route path="/Frax1550-Hals-Dekolletage" element={<FraxHalsDekolletage />} />



          <Route path="/Nordlys-Frax1550" element={<Frax1550 />} />
           <Route path="/Laserbehandlingar" element={<Laser />} />
            <Route path="/NordlysIpl" element={<NordlysIPL />} />
             <Route path="/IPL-MindreOmrade" element={<IPLMindreOmrade />} />
        <Route path="/IPL-Ansikte" element={<IPLAnsikte />} />
        <Route path="/IPL-Ansikte-Hals" element={<IPLAnsikteHals />} />
        <Route path="/IPL-Ansikte-Hals-Dekolletage" element={<IPLAnsikteHalsDekolletage />} />
        <Route path="/IPL-Dekolletage-Hals" element={<IPLDekolletageHals />} />

        <Route path="/VitaminDropp" element={<VitaminDropp/>} />


        <Route path="/Carboxy-Cellutrix" element={<CarboxyCellutrix/>} />
        <Route path="/Carboxy-Ogon" element={<CarboxyOgon/>} />
        <Route path="/Carboxy" element={<Carboxy/>} />
        <Route path="/Cellutrix-RRS" element={<CarboxyCellutrixRRS/>} />

          

          <Route path="/PRP" element={<PrpPrf/>} />

          <Route path="/PrpPrf-Ansikte" element={<PrpAnsikte/>} />
          <Route path="/PrpPrf-AnsikteHals" element={<PrpAnsikte/>} />
          <Route path="/PrpPrf-EksemPsoriasis" element={<PrpEksemPsoriasis/>} />
          <Route path="/PrpPrf-Har" element={<PrpHar/>} />
          <Route path="/PrpPrf-RrsHair" element={<RrsXlHair/>} />
          <Route path="/PrpPrf-TearTrough" element={<PrfTearTrough/>} />


       
        <Route path="/Profhilo" element={<Prohilo/>} />
        <Route path="/Skinboosters" element={<Skinbooster/>} />
        <Route path="/Skinbooster-LongLasting" element={<SkinboosterLongLasting/>} />
        <Route path="/Skinbooster-Sunekos" element={<SkinboosterSunekos/>} />
        <Route path="/Skinbooster-Restylane" element={<SkinboosterRestylane/>} />
        <Route path="/Skinbooster-Ejal40" element={<SkinboosterEjal40/>} />
        <Route path="/Skinbooster-RRSEyes" element={<RrsEyes/>} />


        <Route path="/Fillers" element={<Fillers/>} />
        <Route path="/Fillers-Kindben" element={<FillersKindben />} />
        <Route path="/Fillers-Midcheek" element={<FillersMidcheek />} />
        <Route path="/Fillers-Kaklinje" element={<FillersKaklinje />} />
        <Route path="/Fillers-Haka" element={<FillersHaka />} />
        <Route path="/Fillers-Nasolabialveck" element={<FillersNasolabialveck />} />
        <Route path="/Fillers-Tinning" element={<FillersTinning />} />
        <Route path="/Fillers-TearTrough" element={<FillersTearTrough />} />
        <Route path="/Fillers-Marionettlinjer" element={<FillersMarionettlinjer />} />  
        <Route path="/Fillers-Hyalase" element={<Hyalase />} />  


        
          <Route path="/Rynkbehandling-Trapezius" element={<RynkbehandlingTrapezius/>} />
          <Route path="/Rynkbehandling-Masseter" element={<RynkbehandlingMasseter/>} />
          <Route path="/Rynkbehandling-Hyperhidros" element={<RynkbehandlingHyperhidros/>} />
          <Route path="/Rynkbehandling-Platysma" element={<RynkbehandlingPlatysma/>} />
          <Route path="/Rynkbehandling-Apelsinhaka" element={<RynkbehandlingApelsinhaka/>} />
          <Route path="/Rynkbehandling-Mungipor" element={<RynkbehandlingMungipor/>} />
          <Route path="/Rynkbehandling-Lipflip" element={<RynkbehandlingLipflip/>} />
          <Route path="/Rynkbehandling-Gummysmile" element={<RynkbehandlingGummysmile />} />
          <Route path="/Rynkbehandling-Nastipp" element={<RynkbehandlingNastipp />} />
          <Route path="/Rynkbehandling-Bunnylines" element={<RynkbehandlingBunnylines />} />
          <Route path="/Rynkbehandling-Browlift" element={<RynkbehandlingBrowlift />} />
          <Route path="/Rynkbehandling-Mun" element={<RynkbehandlingMun />} />
          <Route path="/Rynkreducerande" element={<Rynkreducerand />} />
          <Route path="/Rynkbehandling-Panna" element={<RynkbehandlingPannan />} />
          <Route path="/Rynkbehandling-Glabella" element={<RynkbehandlingGlabella />} />
          <Route path="/Rynkbehandling-Krakparkar" element={<RynkbehandlingKrakparkar />} />


          <Route path="/Hem" element={<Hem />} />
          <Route path="/Behandlingsutbud" element={<Behandlingsutbud />} />
          <Route path="/Huvudbehandlingar" element={<Huvudbehandling />} /> {/* <-- DENNA SKA BORT*/ }
          <Route path="/Trådlyft" element={<Trådlyft />} /> 
          <Route path="/Mono-Kinder" element={<MonoKinder />} /> 
          <Route path="/Mono-Marionettlinjer" element={<MonoMarionettlinjer />} /> 
          <Route path="/Mono-Nasolabiala" element={<MonoNasolabiala />} /> 
          <Route path="/Mono-Ogon" element={<MonoOgon />} /> 
          <Route path="/Mono-Suramungipor" element={<MonoSuramungipor />} /> 
          <Route path="/Tradlyft-Dubbelhaka" element={<TradlyftDubbelhaka />} /> 
          <Route path="/Tradlyft-Halslyft" element={<TradlyftHalslyft />} /> 
          <Route path="/Tradlyft-Kaklinjen" element={<TradlyftKaklinjen />} /> 
          <Route path="/Tradlyft-Kindben" element={<TradlyftKindben />} />
          <Route path="/Tradlyft-Midface" element={<TradlyftMidface />} />
          
          
          <Route path="/HydraFacial" element={<HydraFacial />} /> 
          <Route path="/Deluxe-HydraFacial" element={<DeluxHydraFacial />} /> 
          <Route path="/Platinum-HydraFacial" element={<PlatinumHydraFacial />} />
          <Route path="/Standard-HydraFacial" element={<StandardHydraFacial />} /> 
          <Route path="/HydraFacial-Gravida" element={<GravidaHydraFacial />} /> 
          <Route path="/Massagee" element={<Massage />} /> 
          <Route path="/RelaxingTime" element={<RelaxTime />} /> 
          <Route path="/KlippkortX5" element={<KlippkortX5 />} /> 
          <Route path="/Ansiktsmassage" element={<AnsiktsMassage />} /> 
          <Route path="/AvkopplandeMassage" element={<AvkopplandeMassage />} /> 
          <Route path="/HotstoneMassage" element={<HotstoneMassage />} /> 
          <Route path="/Helkroppsmassage" element={<Helkroppsmassage />} />
          <Route path="/Sportmassage" element={<Sportmassage />} />
          <Route path="/Fotmassage" element={<Fotmassage />} />
          <Route path="/Ryggmassage" element={<Ryggmassage />} />
          <Route path="/Gravidmassage" element={<Gravidmassage />} />
          
          <Route path="/Vaxning" element={<Vaxning />} /> 
          <Route path="/Armar" element={<Armar />} /> 
          <Route path="/ArmarMen" element={<ArmarMan />} /> 
          <Route path="/Armhala" element={<Armhala />} /> 
          <Route path="/Bikini" element={<Bikini />} /> 
          <Route path="/Brasiliansk" element={<Brasiliansk />} /> 
          <Route path="/Brost+Mage" element={<BrostMage />} /> 
          <Route path="/Halvaben" element={<Halvaben />} /> 
          <Route path="/Halvaben+bikini" element={<HalvabenBikini />} /> 
          <Route path="/Helaben" element={<Helaben />} /> 
          <Route path="/Helaben+bikini" element={<HelabenBikini />} /> 
          <Route path="/Helkropp" element={<Helkropp />} /> 
          <Route path="/Overlapp" element={<Overlapp />} /> 
          <Route path="/Pverlapp+haka" element={<OverlappHaka />} /> 
          <Route path="/Rygg" element={<Rygg />} /> 
          <Route path="/Ansiktsbehandlingar" element={<Ansikte />} />
          <Route path="/Dermaplaning" element={<Dermaplaning />} />
          <Route path="/Djuprensande-ansiktsbehandling" element={<DjuprensandeAnsiktsbehandling />} />
          <Route path="/Hydra-facial" element={<HydraFa />} />
          <Route path="/Instant-clean" element={<InstantClean />} />
          <Route path="/Instant-glow" element={<InstantGlow />} />
          <Route path="/Kemisk-peel" element={<KemiskPeel />} />

<Route path="/BioRepeel" element={<BioRepeel />} />
<Route path="/MaskPeel" element={<MaskPeel />} />

          <Route path="/Klassisk-ansiktsbehandling" element={<KlassiskAnsiktsbehandling />} />
          <Route path="/LED-Ljusterapi" element={<LEDLjusterapi />} />
          <Route path="/Lyx-ansiktsbehandling" element={<LyxAnsiktsbehandling />} />
          <Route path="/Microneedling" element={<Microneedling />} />
          <Route path="/PRXT-33" element={<PRXT33 />} />




          <Route path="/Hittabehandling" element={<Hittabehandling />} />
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path="/Omoss" element={<Omoss />} />
          <Route path="/Priser" element={<Priser />} />
          <Route path="/injektionsbehandlingar-priser" element={<InjektionsbehandlingarPris />} />
          <Route path="/tradlyft-priser" element={<TradlyftPriser />} />
          <Route path="/vaxning-priser" element={<VaxningPriser />} />
          <Route path="/massage-priser" element={<MassagePriser />} />
          <Route path="/hydra-facial-priser" element={<HydraFacialPriser />} />
          <Route path="/ansiktsbehandlingar-priser" element={<AnsiktsbehandlingarPriser />} />
          <Route path="/laserbehandlingar-priser" element={<LaserbehandlingarPris />} />

          
          <Route path="/Utbildningar" element={<Utbildning />} />
         
          <Route path="/Injektionsbehandlingar" element={<Injektion />} />
          <Route path="/Bokatid" element={<BokaTid />} />
          <Route path="/Integritetspolicy" element={<Integritetspolicy />} />
          <Route path="/" element={<Hem />} /> {/* Standardroute till Hem */}


          

          
        </Routes>
        
      </div>
      <Footer />
    </div>
  );
}
export default App;

