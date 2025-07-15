import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function IspHero() {
    const { t } = useTranslation();

    return (
        <section className="IspHero-section">
            <Container className="IspHero-container">
                <div className="breads" itemScope="" itemType="https://schema.org/BreadcrumbList">
                    <div itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                        <a href="https://proxyma.io" className="breads-item" itemProp="item">
                            <span itemProp="name">{t("ispHero.breadcrumbs.home")}</span>
                            <meta itemProp="position" content="1" />
                        </a>
                    </div>
                    <div className="breads-sep">›</div>
                    <div itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                        <span className="breads-item active" itemProp="item">
                            <span itemProp="name">{t("ispHero.breadcrumbs.current")}</span>
                            <meta itemProp="position" content="2" />
                        </span>
                    </div>
                </div>

                <h1 className="hero__title">
                    <span className="hero__title-blue">{t("ispHero.title.main")}</span>{" "}
                    <span className="hero__title-small">{t("ispHero.title.small")}</span>
                </h1>

                <div className="hero__bottom">
                    <div className="hero__bottom-left">
                        <div className="hero__subtitle">{t("ispHero.subtitle")}</div>
                        <a href="https://cabinet.proxyma.io/ru/register" className="hero__button button-accent">
                            {t("ispHero.button")}
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default IspHero;
