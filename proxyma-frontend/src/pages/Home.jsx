import Container from "../components/utils/Container/Container.jsx";
import { useTranslation } from 'react-i18next';
import {useEffect} from "react";


function Home() {
    const { t, i18n } = useTranslation();

    useEffect(()=>{
        i18n.changeLanguage('uk');
    },[])
    return<>
        <Container>
            {t('welcome')}
        </Container>
    </>
}

export default Home;