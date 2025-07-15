import Container from "../utils/Container/Container.jsx";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const countries = [
    { key: "france", addresses: "392k", flag: "https://proxyma.io/images/pages/layout/flags/france.png" },
    { key: "united_kingdom", addresses: "410k", flag: "https://proxyma.io/images/pages/layout/flags/gb.png" },
    { key: "belgium", addresses: "94k", flag: "https://proxyma.io/images/pages/layout/flags/belgia.png" },
    { key: "germany", addresses: "512k", flag: "https://proxyma.io/images/pages/layout/flags/germany.png" },
    { key: "spain", addresses: "381k", flag: "https://proxyma.io/images/pages/layout/flags/spain.png" },
    { key: "malta", addresses: "12k", flag: "https://proxyma.io/images/pages/layout/flags/malta.png" },
    { key: "netherlands", addresses: "354k", flag: "https://proxyma.io/images/pages/layout/flags/nederland.png" },
    { key: "ukraine", addresses: "1210k", flag: "https://proxyma.io/images/pages/layout/flags/ukraine.png" },
    { key: "sweden", addresses: "178k", flag: "https://proxyma.io/images/pages/layout/flags/swiden.png" },
    { key: "switzerland", addresses: "128k", flag: "https://proxyma.io/images/pages/layout/flags/switzerland.png" },
    { key: "poland", addresses: "965k", flag: "https://proxyma.io/images/pages/layout/flags/poland.png" },
    { key: "italy", addresses: "196k", flag: "https://proxyma.io/images/pages/layout/flags/italy.png" },
    { key: "canada", addresses: "535k", flag: "https://proxyma.io/images/pages/layout/flags/canada.png" },
    { key: "usa", addresses: "9721k", flag: "https://proxyma.io/images/pages/layout/flags/usa.png" },
    { key: "serbia", addresses: "175k", flag: "https://proxyma.io/images/pages/layout/flags/serbia.png" }
];

function Network() {
    const { t } = useTranslation();

    return (
        <section className="network-section">
            <Container>
                <h2 className="network__title">{t("network.title")}</h2>

                <div className="flags-grid">
                    {countries.map((country, index) => (
                        <div key={index} className="flag-card">
                            <NavLink to="#" className="network__item-link">
                                <img src={country.flag} alt={t(`network.countries.${country.key}`)} />
                                <p className="country-name">{t(`network.countries.${country.key}`)}</p>
                                <p className="country-addresses">
                                    {country.addresses} {t("network.addresses")}
                                </p>
                            </NavLink>
                        </div>
                    ))}
                    <div className="network__item network__item--msg network__msg">
                        <div className="network__msg-inner">
                            <div className="network__msg-title">{t("network.residentialTitle")}</div>
                            <div className="network__msg-text">{t("network.residentialText")}</div>
                            <NavLink to="#" className="network__msg-button button-accent">
                                {t("network.button")}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Network;
