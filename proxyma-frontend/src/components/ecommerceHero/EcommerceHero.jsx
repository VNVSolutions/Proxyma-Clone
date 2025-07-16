import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function EcommerceHero() {
    const { t } = useTranslation();

    return (
        <section className="ecommerceHero-section">
            <Container className="ecommerceHero-container">
                <div className="breads" itemScope="" itemType="https://schema.org/BreadcrumbList">
                    <div itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                        <a href="https://proxyma.io" className="breads-item" itemProp="item">
                            <span itemProp="name">{t("ecommerceHero.breadcrumbs.home")}</span>
                            <meta itemProp="position" content="1" />
                        </a>
                    </div>
                    <div className="breads-sep">›</div>
                    <div itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                        <span className="breads-item active" itemProp="item">
                            <span itemProp="name">{t("ecommerceHero.breadcrumbs.current")}</span>
                            <meta itemProp="position" content="2" />
                        </span>
                    </div>
                </div>

                <h1 className="hero__title">
                    {t("ecommerceHero.title.main")}{" "}
                    <span className="hero__title-blue">{t("ecommerceHero.title.highlight")}</span>
                </h1>

                <div className="hero__bottom">
                    <div className="hero__bottom-left">
                        <ul className="hero__list">
                            <li className="hero__item">{t("ecommerceHero.list.item1")}</li>
                            <li className="hero__item">{t("ecommerceHero.list.item2")}</li>
                            <li className="hero__item">{t("ecommerceHero.list.item3")}</li>
                        </ul>
                        <a
                            href="https://cabinet.proxyma.io/ru/register"
                            className="hero__button button-accent"
                        >
                            {t("ecommerceHero.buttonMain")}
                        </a>
                    </div>
                    <div className="hero__promo">
                        <div className="hero__promo-label">{t("ecommerceHero.promo.label")}</div>
                        <div
                            className="hero__promo-title"
                            dangerouslySetInnerHTML={{ __html: t("ecommerceHero.promo.title") }}
                        ></div>
                        <a
                            href="https://cabinet.proxyma.io/cabinet/dynamic/list?tab=1"
                            className="hero__promo-button button-accent"
                        >
                            {t("ecommerceHero.promo.button")}
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default EcommerceHero;
