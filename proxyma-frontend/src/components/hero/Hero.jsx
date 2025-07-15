import Container from "../utils/Container/Container.jsx";
import msg from "../../../public/img/hero-MSG.png"
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Hero () {
    const {t} = useTranslation();

    return <section className="hero-section">
        <Container className="hero-container">
            <div className="hero-msg-box">
                <img width={220} src={msg} alt="message"/>
            </div>
            <h1
                className="hero-title"
                dangerouslySetInnerHTML={{__html: t("hero.title")}}
            ></h1>
            <div className="hero__subtitle">{t("hero.subtitle")}</div>
            <div className="hero__bottom">
                <ul className="hero__list">
                    <li
                        className="hero__item"
                        dangerouslySetInnerHTML={{__html: t("hero.list.item1")}}
                    ></li>
                    <li className="hero__item">{t("hero.list.item2")}</li>
                    <li
                        className="hero__item"
                        dangerouslySetInnerHTML={{__html: t("hero.list.item3")}}
                    ></li>
                    <li
                        className="hero__item"
                        dangerouslySetInnerHTML={{__html: t("hero.list.item4")}}
                    ></li>
                </ul>
                <div className="hero__promo">
                    <div className="hero__promo-label">{t("hero.promo.label")}</div>
                    <div
                        className="hero__promo-title"
                        dangerouslySetInnerHTML={{__html: t("hero.promo.title")}}
                    ></div>
                    <NavLink to="/#" className="hero__promo-button button-accent">
                        {t("hero.promo.button")}
                    </NavLink>
                </div>
            </div>
        </Container>
    </section>
}

export default Hero;