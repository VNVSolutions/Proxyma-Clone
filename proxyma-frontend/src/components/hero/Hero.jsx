import Container from "../utils/Container/Container.jsx";
import msg from "../../../public/img/hero-MSG.png"
import {NavLink} from "react-router-dom";

function Hero () {

    return<section className='hero-section'>
        <Container className="hero-container">
            <div className="hero-msg-box">
                <img width={220} src={msg} alt="message"/>
            </div>
            <h1 className="hero-title">
                <span className="hero__title-blue">PROXYMA</span>— 60+ million of unique IPs with <span
                className="hero__title-accent">24/7</span> support
            </h1>
            <div className="hero__subtitle">
                Reliable provider of dynamic and static proxies, maintaining the stability of your web activity.
            </div>
            <div className="hero__bottom">
                <ul className="hero__list">

                    <li className="hero__item"><span>60,000,000</span> proxies available for any GEO</li>
                    <li className="hero__item">Each IP belongs to a real person</li>
                    <li className="hero__item">Proxy uptime up to <span>99%</span></li>
                    <li className="hero__item">
                        Average support response time - <span>1 minutes 24/7</span>
                    </li>

                </ul>
                <div className="hero__promo">
                    <div className="hero__promo-label">500MB of stability for $2.5</div>
                    <div className="hero__promo-title">
                        Register in <span>2 clicks</span> and get <span>500MB of proxy</span>
                    </div>
                    <NavLink to="/#"
                       className="hero__promo-button button-accent">
                        Get 500MB
                    </NavLink>
                </div>
            </div>
        </Container>
    </section>
}

export default Hero;