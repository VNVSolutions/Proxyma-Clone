import Tariff from "../components/tariff/Tariff.jsx";
import Container from "../components/utils/Container/Container.jsx";
import About from "../components/about/About.jsx";
import Offer from "../components/offer/Offer.jsx";
import Pay from "../components/pay/Pay.jsx";
import Refferal from "../components/refferal/Refferal.jsx";
import BuyOffer from "../components/buyOffer/BuyOffer.jsx";
import Feedbacks from "../components/feedbacks/Feedbacks.jsx";
import Start from "../components/start/Start.jsx";


function BuyNow() {

    return<div className="buyNowPage">
        <Tariff showTittle={true}/>
        <About/>
        <Offer/>
        <Pay/>
        <Refferal/>
        <BuyOffer/>
        <Feedbacks/>
        <Start/>
    </div>
}

export default BuyNow