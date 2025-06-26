import Container from "../utils/Container/Container.jsx";
import {NavLink} from "react-router-dom";

function Advantages() {

    return <section className="advantagesSection section-blue">
        <Container>
            <h2 className="title advantages__title">
                Only high-quality proxies <br/> for all types of earning and research on the web.
            </h2>
            <ul className="adventages__list">
                <li className="adventages__item">

                    <img className="adventages__image" src="https://proxyma.io/images/pages/layout/index/offer/offer-1.png"
                         alt="AFFILIATE"/>
                    <h3 className="adventages__item-title">AFFILIATE</h3>
                    <div className="adventages__text">Zuckerberg approved</div>
                </li>
                <li className="adventages__item">

                    <img className="adventages__image" src="https://proxyma.io/images/pages/layout/index/offer/offer-2.png"
                         alt="SNEAKER"/>
                    <h3 className="adventages__item-title">SNEAKER</h3>
                    <div className="adventages__text">Be the fastest in the raffle</div>
                </li>
                <li className="adventages__item">

                    <img className="adventages__image" src="https://proxyma.io/images/pages/layout/index/offer/offer-3.png"
                         alt="REDDIT"/>
                    <h3 className="adventages__item-title">REDDIT</h3>
                    <div className="adventages__text">Don`t worry about account lifespan</div>
                </li>
                <li className="adventages__item">

                    <img className="adventages__image" src="https://proxyma.io/images/pages/layout/index/offer/offer-4.png"
                         alt="SOCIAL"/>
                    <h3 className="adventages__item-title">SOCIAL</h3>
                    <div className="adventages__text">Access to blocked resources</div>
                </li>
                <li className="adventages__item">

                    <img className="adventages__image" src="https://proxyma.io/images/pages/layout/index/offer/offer-5.png"
                         alt="CRYPTO"/>
                    <h3 className="adventages__item-title">CRYPTO</h3>
                    <div className="adventages__text">Every drop securely in your wallet</div>
                </li>
                <li className="adventages__item">

                    <img className="adventages__image" src="https://proxyma.io/images/pages/layout/index/offer/offer-6.png"
                         alt="E-COM"/>
                    <h3 className="adventages__item-title">E-COM</h3>
                    <div className="adventages__text">Study your competitors anonymously</div>
                </li>
                <li className="adventages__item">

                    <img className="adventages__image" src="https://proxyma.io/images/pages/layout/index/offer/offer-7.png"
                         alt="DATA PARSING"/>
                    <h3 className="adventages__item-title">DATA PARSING</h3>
                    <div className="adventages__text">Continuous data collection</div>
                </li>
                <li className="adventages__item adventages__item--last">
                    <NavLink to='#'>
                        <svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.5 41L45 21.5L26.5 3" stroke="#FE3059" stroke-width="6"></path>
                            <path d="M3 41L22.5 21.5L4 3" stroke="#FE3059" stroke-width="6"></path>
                        </svg>
                        <div className="adventages__text">Discover all possibilities</div>
                    </NavLink>
                </li>
            </ul>
        </Container>
    </section>
}

export default Advantages;