import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function DynamicAdvantages() {
    const { t } = useTranslation();

    return (
        <section className="dynamicAdvantages-section">
            <Container className="dynamicAdvantages-container">
                <h2 className="dynamicAdvantages__title">
                    {t("dynamicAdvantages.title")}
                </h2>

                <ul className="dynamicAdvantages__list">
                    <li className="dynamicAdvantages__item">
                        <div className="dynamicAdvantages__item-icon">
                            <img
                                src="https://proxyma.io/images/pages/layout/product/advantages/advantages-1.png"
                                alt="img"
                            />
                        </div>
                        <div className="dynamicAdvantages__item-text">
                            {t("dynamicAdvantages.list.1")}
                        </div>
                    </li>

                    <li className="dynamicAdvantages__item">
                        <div className="dynamicAdvantages__item-icon">
                            <img
                                src="https://proxyma.io/images/pages/layout/product/advantages/advantages-2.png"
                                alt="img"
                            />
                        </div>
                        <div className="dynamicAdvantages__item-text">
                            {t("dynamicAdvantages.list.2")}
                        </div>
                    </li>

                    <li className="dynamicAdvantages__item">
                        <div className="dynamicAdvantages__item-icon">
                            <img
                                src="https://proxyma.io/images/pages/layout/product/advantages/advantages-3.png"
                                alt="img"
                            />
                        </div>
                        <div className="dynamicAdvantages__item-text">
                            {t("dynamicAdvantages.list.3")}
                        </div>
                    </li>
                </ul>
            </Container>
        </section>
    );
}

export default DynamicAdvantages;
