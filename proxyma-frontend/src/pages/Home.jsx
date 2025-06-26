import Container from "../components/utils/Container/Container.jsx";
import { useTranslation } from 'react-i18next';
import Hero from "../components/hero/Hero.jsx";
import SocialMediaBar from "../components/socialMediaBar/SocialMediaBar.jsx";
import GeoSelector from "../components/geoSelector/GeoSelector.jsx";
import Advantages from "../components/advantages/Advantages.jsx";
import Offer from "../components/offer/Offer.jsx";
import Tariff from "../components/tariff/Tariff.jsx";


function Home() {
    const { t, i18n } = useTranslation();

    return<main>
        <Hero/>
        <SocialMediaBar/>
        <GeoSelector/>
        <Advantages/>
        <Offer/>
        <Tariff/>
    </main>
}

export default Home;