import Container from "../utils/Container/Container.jsx";
import { useTranslation, Trans } from "react-i18next";

function DynamicHero() {
    const { t } = useTranslation();

    return (
        <section className="dynamic-hero-section">
            <Container className="dynamic-hero-container">

                <div className="breads" itemScope itemType="https://schema.org/BreadcrumbList">
                    <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <a href="https://proxyma.io/en" className="breads-item" itemProp="item">
                            <span itemProp="name">{t("dynamicHero.breadcrumbs.main")}</span>
                            <meta itemProp="position" content="1" />
                        </a>
                    </div>
                    <div className="breads-sep">›</div>
                    <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <span className="breads-item active" itemProp="item">
                            <span itemProp="name">{t("dynamicHero.breadcrumbs.current")}</span>
                            <meta itemProp="position" content="2" />
                        </span>
                    </div>
                </div>

                <h1 className="hero__title">
                    <Trans i18nKey="dynamicHero.title">
                        Dynamic <span className="hero__title-blue">resident proxies</span>
                    </Trans>
                </h1>

                <div className="hero__bottom">
                    <div className="hero__bottom-left">
                        <ul className="hero__list">
                            <li className="hero__item">{t("dynamicHero.list.1")}</li>
                            <li className="hero__item">{t("dynamicHero.list.2")}</li>
                        </ul>
                        <a href="https://cabinet.proxyma.io/en/register" className="hero__button button-accent">
                            {t("dynamicHero.tryNow")}
                        </a>
                    </div>

                    <div className="hero__promo">
                        <div className="hero__promo-label">{t("dynamicHero.promo.label")}</div>
                        <div className="hero__promo-title">
                            <Trans i18nKey="dynamicHero.promo.title">
                                Register in <span>2 clicks</span> and get <span>500MB of proxies</span>
                            </Trans>
                        </div>
                        <a
                            href="https://cabinet.proxyma.io/cabinet/dynamic/list?tab=1"
                            className="hero__promo-button button-accent"
                        >
                            {t("dynamicHero.promo.button")}
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default DynamicHero;
