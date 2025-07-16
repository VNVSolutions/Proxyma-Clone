import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function CryptoSecondAdvantages() {
    const { t } = useTranslation();

    return (
        <section className="cryptoSecondAdvantages">
            <Container>
                <ul className="cryptoSecondAdvantages__list">
                    <li className="cryptoSecondAdvantages__item">
                        <div className="cryptoSecondAdvantages__item-icon">
                            <img
                                src="https://proxyma.io/images/pages/layout/product/advantages-crypto/advantages-1.svg"
                                alt="img"
                            />
                        </div>
                        <div className="cryptoSecondAdvantages__item-title">
                            {t("cryptoSecondAdvantages.items.item1.title")}
                        </div>
                        <div className="cryptoSecondAdvantages__item-text">
                            {t("cryptoSecondAdvantages.items.item1.text")}
                        </div>
                    </li>

                    <li className="cryptoSecondAdvantages__item">
                        <div className="cryptoSecondAdvantages__item-icon">
                            <img
                                src="https://proxyma.io/images/pages/layout/product/advantages-crypto/advantages-2.svg"
                                alt="img"
                            />
                        </div>
                        <div className="cryptoSecondAdvantages__item-title">
                            {t("cryptoSecondAdvantages.items.item2.title")}
                        </div>
                        <div className="cryptoSecondAdvantages__item-text">
                            {t("cryptoSecondAdvantages.items.item2.text")}
                        </div>
                    </li>

                    <li className="cryptoSecondAdvantages__item">
                        <div className="cryptoSecondAdvantages__item-icon">
                            <img
                                src="https://proxyma.io/images/pages/layout/product/advantages-crypto/advantages-3.svg"
                                alt="img"
                            />
                        </div>
                        <div className="cryptoSecondAdvantages__item-title">
                            {t("cryptoSecondAdvantages.items.item3.title")}
                        </div>
                        <div className="cryptoSecondAdvantages__item-text">
                            {t("cryptoSecondAdvantages.items.item3.text")}
                        </div>
                    </li>
                </ul>
            </Container>
        </section>
    );
}

export default CryptoSecondAdvantages;
