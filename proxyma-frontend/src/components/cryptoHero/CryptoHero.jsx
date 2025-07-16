import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function CryptoHero() {
    const { t } = useTranslation();

    return (
        <section className="cryptoHero-section">
            <Container className="cryptoHero-container">
                <div className="breads" itemScope="" itemType="https://schema.org/BreadcrumbList">
                    <div itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                        <a href="https://proxyma.io" className="breads-item" itemProp="item">
                            <span itemProp="name">{t("cryptoHero.breadcrumbs.home")}</span>
                            <meta itemProp="position" content="1" />
                        </a>
                    </div>
                    <div className="breads-sep">›</div>
                    <div itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                        <span className="breads-item active" itemProp="item">
                            <span itemProp="name">{t("cryptoHero.breadcrumbs.current")}</span>
                            <meta itemProp="position" content="2" />
                        </span>
                    </div>
                </div>

                <h1 className="hero__title">
                    {t("cryptoHero.title.main")}{" "}
                    <span className="hero__title-blue">{t("cryptoHero.title.highlight")}</span>
                </h1>

                <div className="hero__bottom">
                    <div className="hero__bottom-left">
                        <ul className="hero__list">
                            <li className="hero__item">{t("cryptoHero.list.item1")}</li>
                            <li className="hero__item">{t("cryptoHero.list.item2")}</li>
                            <li className="hero__item">{t("cryptoHero.list.item3")}</li>
                        </ul>
                        <a
                            href="https://cabinet.proxyma.io/ru/register"
                            className="hero__button button-accent"
                        >
                            {t("cryptoHero.button")}
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default CryptoHero;
