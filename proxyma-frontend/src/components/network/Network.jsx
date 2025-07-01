import Container from "../utils/Container/Container.jsx";
import {NavLink} from "react-router-dom";



const countries = [
    { name: "France", addresses: "392k", flag: "https://proxyma.io/images/pages/layout/flags/france.png" },
    { name: "United Kingdom", addresses: "410k", flag: "https://proxyma.io/images/pages/layout/flags/gb.png" },
    { name: "Belgium", addresses: "94k", flag: "https://proxyma.io/images/pages/layout/flags/belgia.png" },
    { name: "Germany", addresses: "512k", flag: "https://proxyma.io/images/pages/layout/flags/germany.png" },
    { name: "Spain", addresses: "381k", flag: "https://proxyma.io/images/pages/layout/flags/spain.png" },
    { name: "Malta", addresses: "12k", flag: "https://proxyma.io/images/pages/layout/flags/malta.png" },
    { name: "Netherlands", addresses: "354k", flag: "https://proxyma.io/images/pages/layout/flags/nederland.png" },
    { name: "Ukraine", addresses: "1210k", flag: "https://proxyma.io/images/pages/layout/flags/ukraine.png" },
    { name: "Sweden", addresses: "178k", flag: "https://proxyma.io/images/pages/layout/flags/swiden.png" },
    { name: "Switzerland", addresses: "128k", flag: "https://proxyma.io/images/pages/layout/flags/switzerland.png" },
    { name: "Poland", addresses: "965k", flag: "https://proxyma.io/images/pages/layout/flags/poland.png" },
    { name: "Italy", addresses: "196k", flag: "https://proxyma.io/images/pages/layout/flags/italy.png" },
    { name: "Canada", addresses: "535k", flag: "https://proxyma.io/images/pages/layout/flags/canada.png" },
    { name: "USA", addresses: "9721k", flag: "https://proxyma.io/images/pages/layout/flags/usa.png" },
    { name: "Serbia", addresses: "175k", flag: "https://proxyma.io/images/pages/layout/flags/serbia.png" },
];

function Network() {

    return <section className="network-section">
        <Container>
            <h2 className="network__title">Impressive coverage</h2>

            <div className="flags-grid">
                {countries.map((country, index) => (
                    <div key={index} className="flag-card">
                        <NavLink to="#" className="network__item-link"><img src={country.flag} alt={country.name}/>
                            <p className="country-name">{country.name}</p>
                            <p className="country-addresses">{country.addresses} Addresses</p>
                        </NavLink>
                    </div>
                ))}
                <div className="network__item network__item--msg network__msg">
                    <div className="network__msg-inner">
                        <div className="network__msg-title">Residential Proxies</div>
                        <div className="network__msg-text">
                            Get proxies from any corner of the world. Easily filter IP addresses by country, region,
                            city, or provider right in the dashboard.
                        </div>
                        <NavLink to="#" className="network__msg-button button-accent">
                            Try for $2.5
                        </NavLink>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}

export default Network;