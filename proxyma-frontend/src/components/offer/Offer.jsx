import Container from "../utils/Container/Container.jsx";
import {NavLink} from "react-router-dom";

function Offer() {

    return <section className="offerSection">
        <Container>
            <h2 className="offer__title">
                Forget about all problems with Proxyma
            </h2>
            <ul className="offer__list">
                <li className="offer__item">
                    <div className="offer__item-icon">
                        <img src="https://proxyma.io/images/pages/layout/index/advantages/advantages-1.png"
                             alt="Stability of advertising accounts"/>
                    </div>
                    <div className="offer__item-title">
                        Stability of advertising accounts
                    </div>
                    <div className="offer__item-text">
                        Your advertising accounts won`t fail at the worst possible moment
                    </div>
                </li>

                <li className="offer__item">
                    <div className="offer__item-icon">
                        <img src="https://proxyma.io/images/pages/layout/index/advantages/advantages-2.png"
                             alt="Hassle-free data parsing"/>
                    </div>
                    <div className="offer__item-title">
                        Hassle-free data parsing
                    </div>
                    <div className="offer__item-text">
                        What you start won`t crash halfway through the process
                    </div>
                </li>

                <li className="offer__item">
                    <div className="offer__item-icon">
                        <img src="https://proxyma.io/images/pages/layout/index/advantages/advantages-3.png"
                             alt="Long-term work on drops"/>
                    </div>
                    <div className="offer__item-title">
                        Long-term work on drops
                    </div>
                    <div className="offer__item-text">
                        Abuse of drops from a single Proxyma account typically lasts up to a year
                    </div>
                </li>

                <li className="offer__item">
                    <div className="offer__item-icon">
                        <img src="https://proxyma.io/images/pages/layout/index/advantages/advantages-4.png"
                             alt="Yes, 1% of our proxies might fail…"/>
                    </div>
                    <div className="offer__item-title">
                        Yes, 1% of our proxies might fail…
                    </div>
                    <div className="offer__item-text">
                        …But we are always available and replace proxies 24/7, typically within 30 minutes
                    </div>
                </li>

                <li className="offer__item">
                    <div className="offer__item-icon">
                        <img src="https://proxyma.io/images/pages/layout/index/advantages/advantages-5.png"
                             alt="Rotation period for your security"/>
                    </div>
                    <div className="offer__item-title">
                        Rotation period for your security
                    </div>
                    <div className="offer__item-text">
                        Upon request, we update the rotation period of your proxies down to the minute
                    </div>
                </li>

                <li className="offer__item advantages__item--last">
                    <div className="offer__item-title">
                        Reliable provider of your surfing
                    </div>
                    <NavLink to="#" className="offer__item-link offer-button-accent">
                        Try for $2.5
                    </NavLink>
                </li>
            </ul>
        </Container>
    </section>
}

export default Offer;