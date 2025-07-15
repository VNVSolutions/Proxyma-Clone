import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function BuyOffer() {
    const { t } = useTranslation();

    return (
        <section className="buyOffer-section">
            <Container>
                <h2 className="buyOffer-title">{t("buyOffer.title")}</h2>

                <p className="buyOffer-subtitle">{t("buyOffer.subtitle")}</p>

                <h3 className="buyOffer__subtitle-second">{t("buyOffer.advantagesTitle")}</h3>

                <ul className="buyOffer__list">
                    <li className="buyOffer__item">
                        <img
                            className="buyOffer__image"
                            src="https://proxyma.io/images/pages/layout/product/advantages/advantages-1.png"
                            alt={t("buyOffer.advantages.1")}
                        />
                        <h3 className="buyOffer__item-title">{t("buyOffer.advantages.1")}</h3>
                    </li>
                    <li className="buyOffer__item">
                        <img
                            className="buyOffer__image"
                            src="https://proxyma.io/images/pages/layout/product/advantages/advantages-2.png"
                            alt={t("buyOffer.advantages.2")}
                        />
                        <h3 className="buyOffer__item-title">{t("buyOffer.advantages.2")}</h3>
                    </li>
                    <li className="buyOffer__item">
                        <img
                            className="buyOffer__image"
                            src="https://proxyma.io/images/pages/layout/product/advantages/advantages-3.png"
                            alt={t("buyOffer.advantages.3")}
                        />
                        <h3 className="buyOffer__item-title">{t("buyOffer.advantages.3")}</h3>
                    </li>
                </ul>

                <h3 className="buyOffer__subtitle buyOffer__subtitle--bottom">
                    {t("buyOffer.bottomTitle")}
                </h3>

                <p className="buyOffer__desc buyOffer__desc--bottom">{t("buyOffer.bottomText")}</p>
            </Container>
        </section>
    );
}

export default BuyOffer;
