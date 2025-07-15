import ParsingHero from "../../components/parsingHero/ParsingHero.jsx";
import ParsingAdvantages from "../../components/parsingAdvantages/ParsingAdvantages.jsx";
import GeoSelector from "../../components/geoSelector/GeoSelector.jsx";
import ParsingSecondAdvantages from "../../components/parsingSecondAdvantages/ParsingSecondAdvantages.jsx";
import DynamicAdvantages from "../../components/dynamicAdvantages/DynamicAdvantages.jsx";
import Integration from "../../components/integration/Integration.jsx";
import Tariff from "../../components/tariff/Tariff.jsx";
import Feedbacks from "../../components/feedbacks/Feedbacks.jsx";
import Start from "../../components/start/Start.jsx";


function DataParsing() {

    return <main>
        <ParsingHero/>
        <ParsingAdvantages/>
        <GeoSelector/>
        <ParsingSecondAdvantages/>
        <DynamicAdvantages/>
        <Integration/>
        <Tariff/>
        <Feedbacks/>
        <Start/>
    </main>
}

export default DataParsing;