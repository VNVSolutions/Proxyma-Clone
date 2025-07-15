import Container from "../utils/Container/Container.jsx";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Advantages() {
    const { t } = useTranslation();

    return (
        <section className="advantagesSection section-blue">
            <Container>
                <h2
                    className="title advantages__title"
                    dangerouslySetInnerHTML={{ __html: t("advantages.title") }}
                ></h2>

                <ul className="adventages__list">
                    <li className="adventages__item">
                        <img
                            className="adventages__image"
                            src="https://proxyma.io/images/pages/layout/index/offer/offer-1.png"
                            alt="AFFILIATE"
                        />
                        <h3 className="adventages__item-title">{t("advantages.list.affiliate.title")}</h3>
                        <div className="adventages__text">{t("advantages.list.affiliate.text")}</div>
                    </li>

                    <li className="adventages__item">
                        <img
                            className="adventages__image"
                            src="https://proxyma.io/images/pages/layout/index/offer/offer-2.png"
                            alt="SNEAKER"
                        />
                        <h3 className="adventages__item-title">{t("advantages.list.sneaker.title")}</h3>
                        <div className="adventages__text">{t("advantages.list.sneaker.text")}</div>
                    </li>

                    <li className="adventages__item">
                        <img
                            className="adventages__image"
                            src="https://proxyma.io/images/pages/layout/index/offer/offer-3.png"
                            alt="REDDIT"
                        />
                        <h3 className="adventages__item-title">{t("advantages.list.reddit.title")}</h3>
                        <div className="adventages__text">{t("advantages.list.reddit.text")}</div>
                    </li>

                    <li className="adventages__item">
                        <img
                            className="adventages__image"
                            src="https://proxyma.io/images/pages/layout/index/offer/offer-4.png"
                            alt="SOCIAL"
                        />
                        <h3 className="adventages__item-title">{t("advantages.list.social.title")}</h3>
                        <div className="adventages__text">{t("advantages.list.social.text")}</div>
                    </li>

                    <li className="adventages__item">
                        <img
                            className="adventages__image"
                            src="https://proxyma.io/images/pages/layout/index/offer/offer-5.png"
                            alt="CRYPTO"
                        />
                        <h3 className="adventages__item-title">{t("advantages.list.crypto.title")}</h3>
                        <div className="adventages__text">{t("advantages.list.crypto.text")}</div>
                    </li>

                    <li className="adventages__item">
                        <img
                            className="adventages__image"
                            src="https://proxyma.io/images/pages/layout/index/offer/offer-6.png"
                            alt="E-COM"
                        />
                        <h3 className="adventages__item-title">{t("advantages.list.ecom.title")}</h3>
                        <div className="adventages__text">{t("advantages.list.ecom.text")}</div>
                    </li>

                    <li className="adventages__item">
                        <img
                            className="adventages__image"
                            src="https://proxyma.io/images/pages/layout/index/offer/offer-7.png"
                            alt="DATA PARSING"
                        />
                        <h3 className="adventages__item-title">{t("advantages.list.dataParsing.title")}</h3>
                        <div className="adventages__text">{t("advantages.list.dataParsing.text")}</div>
                    </li>

                    <li className="adventages__item adventages__item--last">
                        <NavLink to="#">
                            <svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.5 41L45 21.5L26.5 3" stroke="#FE3059" strokeWidth="6"></path>
                                <path d="M3 41L22.5 21.5L4 3" stroke="#FE3059" strokeWidth="6"></path>
                            </svg>
                            <div className="adventages__text">{t("advantages.list.more.text")}</div>
                        </NavLink>
                    </li>
                </ul>
            </Container>
        </section>
    );
}

export default Advantages;
