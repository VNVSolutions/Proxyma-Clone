import CryptoHero from "../../components/cryptoHero/CryptoHero.jsx";
import CryptoAdvantages from "../../components/cryptoAdvantages/CryptoAdvantages.jsx";
import GeoSelector from "../../components/geoSelector/GeoSelector.jsx";
import CryptoSecondAdvantages from "../../components/cryptoSecondAdvantages/CryptoSecondAdvantages.jsx";
import DynamicAdvantages from "../../components/dynamicAdvantages/DynamicAdvantages.jsx";
import Integration from "../../components/integration/Integration.jsx";
import Tariff from "../../components/tariff/Tariff.jsx";
import Feedbacks from "../../components/feedbacks/Feedbacks.jsx";
import Start from "../../components/start/Start.jsx";

function Crypto(){

    return <main>
        <CryptoHero/>
        <CryptoAdvantages/>
        <GeoSelector/>
        <CryptoSecondAdvantages/>
        <DynamicAdvantages/>
        <Integration/>
        <Tariff/>
        <Feedbacks/>
        <Start/>
    </main>
}


export default Crypto