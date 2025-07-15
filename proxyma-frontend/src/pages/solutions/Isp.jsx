import IspHero from "../../components/ispHero/IspHero.jsx";
import GeoSelector from "../../components/geoSelector/GeoSelector.jsx";
import DynamicAdvantages from "../../components/dynamicAdvantages/DynamicAdvantages.jsx";
import Tariff from "../../components/tariff/Tariff.jsx";
import Integration from "../../components/integration/Integration.jsx";
import Feedbacks from "../../components/feedbacks/Feedbacks.jsx";
import Start from "../../components/start/Start.jsx";


function Isp() {

    return<main>
        <IspHero/>
        <GeoSelector/>
        <DynamicAdvantages/>
        <Tariff/>
        <Integration/>
        <Feedbacks/>
        <Start/>
    </main>
}

export default Isp;