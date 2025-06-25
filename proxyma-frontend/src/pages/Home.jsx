import Container from "../components/utils/Container/Container.jsx";
import { useTranslation } from 'react-i18next';
import Hero from "../components/hero/Hero.jsx";


function Home() {
    const { t, i18n } = useTranslation();

    return<main>
        <Hero/>
    </main>
}

export default Home;