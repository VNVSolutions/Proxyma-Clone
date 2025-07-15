import GeoSelector from "../../components/geoSelector/GeoSelector.jsx";
import Tariff from "../../components/tariff/Tariff.jsx";
import Feedbacks from "../../components/feedbacks/Feedbacks.jsx";
import Start from "../../components/start/Start.jsx";
import DynamicHero from "../../components/dynamicHero/DynamicHero.jsx";
import DynamicAbout from "../../components/dynamicAbout/DynamicAbout.jsx";
import DynamicAdvantages from "../../components/dynamicAdvantages/DynamicAdvantages.jsx";
import Integration from "../../components/integration/Integration.jsx";


function Dynamic() {

    return <main className="dynamicPage">
        <DynamicHero/>
        <DynamicAbout/>
        <DynamicAdvantages/>
        <GeoSelector/>
        <Integration/>
        <Tariff/>
        <Feedbacks/>
        <Start/>
    </main>
}

export default Dynamic