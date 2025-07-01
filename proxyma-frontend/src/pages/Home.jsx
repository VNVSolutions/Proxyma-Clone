import Container from "../components/utils/Container/Container.jsx";
import { useTranslation } from 'react-i18next';
import Hero from "../components/hero/Hero.jsx";
import SocialMediaBar from "../components/socialMediaBar/SocialMediaBar.jsx";
import GeoSelector from "../components/geoSelector/GeoSelector.jsx";
import Advantages from "../components/advantages/Advantages.jsx";
import Offer from "../components/offer/Offer.jsx";
import Tariff from "../components/tariff/Tariff.jsx";
import Feedbacks from "../components/feedbacks/Feedbacks.jsx";
import Network from "../components/network/Network.jsx";
import Superpowers from "../components/superpowers/Superpowers.jsx";
import Start from "../components/start/Start.jsx";


function Home() {
    const { t, i18n } = useTranslation();

    return<main>
        <Hero/>
        <SocialMediaBar/>
        <GeoSelector/>
        <Advantages/>
        <Offer/>
        <Tariff/>
        <Feedbacks/>
        <Network/>
        <Superpowers/>
        <Start/>
    </main>
}

export default Home;