import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function CryptoAdvantages() {
    const { t } = useTranslation();

    return (
        <section className="cryptoAdvantages">
            <Container>
                <h2 className="cryptoAdvantages__title">
                    {t("cryptoAdvantages.title")}
                </h2>

                <ul className="cryptoAdvantages__list">
                    <li className="cryptoAdvantages__item">
                        <div className="cryptoAdvantages__item-icon">
                            <img
                                src="https://proxyma.io/images/pages/layout/product/expenses/expenses-1.svg"
                                alt="img"
                            />
                        </div>
                        <div className="cryptoAdvantages__item-text">
                            {t("cryptoAdvantages.items.item1")}
                        </div>
                    </li>

                    <li className="cryptoAdvantages__item">
                        <div className="cryptoAdvantages__item-icon">
                            <img
                                src="https://proxyma.io/images/pages/layout/product/expenses/expenses-2.svg"
                                alt="img"
                            />
                        </div>
                        <div className="cryptoAdvantages__item-text">
                            {t("cryptoAdvantages.items.item2")}
                        </div>
                    </li>

                    <li className="cryptoAdvantages__item">
                        <div className="cryptoAdvantages__item-icon">
                            <img
                                src="https://proxyma.io/images/pages/layout/product/expenses/expenses-3.svg"
                                alt="img"
                            />
                        </div>
                        <div className="cryptoAdvantages__item-text">
                            {t("cryptoAdvantages.items.item3")}
                        </div>
                    </li>
                </ul>
            </Container>
        </section>
    );
}

export default CryptoAdvantages;
