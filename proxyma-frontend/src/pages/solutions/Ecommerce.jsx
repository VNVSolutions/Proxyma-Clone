import EcommerceHero from "../../components/ecommerceHero/EcommerceHero.jsx";
import EcommerceAdvantages from "../../components/ecommerceAdvantages/EcommerceAdvantages.jsx";
import GeoSelector from "../../components/geoSelector/GeoSelector.jsx";
import ParsingSecondAdvantages from "../../components/parsingSecondAdvantages/ParsingSecondAdvantages.jsx";
import DynamicAdvantages from "../../components/dynamicAdvantages/DynamicAdvantages.jsx";
import Integration from "../../components/integration/Integration.jsx";
import Tariff from "../../components/tariff/Tariff.jsx";
import Feedbacks from "../../components/feedbacks/Feedbacks.jsx";
import Start from "../../components/start/Start.jsx";


function Ecommerce(){

    return <main>
        <EcommerceHero/>
        <EcommerceAdvantages/>
        <GeoSelector/>
        <ParsingSecondAdvantages/>
        <DynamicAdvantages/>
        <Integration/>
        <Tariff/>
        <Feedbacks/>
        <Start/>
    </main>
}

export default Ecommerce;