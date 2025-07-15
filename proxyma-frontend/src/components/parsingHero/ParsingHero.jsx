import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function ParsingHero() {
    const { t } = useTranslation();

    return (
        <section className="parsingHero-section">
            <Container className="parsingHero-container">
                <div className="breads" itemScope="" itemType="https://schema.org/BreadcrumbList">
                    <div itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                        <a href="https://proxyma.io" className="breads-item" itemProp="item">
                            <span itemProp="name">{t("parsingHero.breadcrumbs.home")}</span>
                            <meta itemProp="position" content="1" />
                        </a>
                    </div>
                    <div className="breads-sep">›</div>
                    <div itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                        <span className="breads-item active" itemProp="item">
                            <span itemProp="name">{t("parsingHero.breadcrumbs.current")}</span>
                            <meta itemProp="position" content="2" />
                        </span>
                    </div>
                </div>

                <h1 className="hero__title">
                    {t("parsingHero.title.main")}{" "}
                    <span className="hero__title-blue">{t("parsingHero.title.highlight")}</span>
                </h1>

                <div className="hero__bottom">
                    <div className="hero__bottom-left">
                        <ul className="hero__list">
                            <li className="hero__item">{t("parsingHero.list.item1")}</li>
                            <li className="hero__item">{t("parsingHero.list.item2")}</li>
                            <li className="hero__item">{t("parsingHero.list.item3")}</li>
                        </ul>
                        <a
                            href="https://cabinet.proxyma.io/ru/register"
                            className="hero__button button-accent"
                        >
                            {t("parsingHero.buttonMain")}
                        </a>
                    </div>
                    <div className="hero__promo">
                        <div className="hero__promo-label">
                            {t("parsingHero.promo.label")}
                        </div>
                        <div
                            className="hero__promo-title"
                            dangerouslySetInnerHTML={{
                                __html: t("parsingHero.promo.title"),
                            }}
                        />
                        <a
                            href="https://cabinet.proxyma.io/cabinet/dynamic/list?tab=1"
                            className="hero__promo-button button-accent"
                        >
                            {t("parsingHero.promo.button")}
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default ParsingHero;
