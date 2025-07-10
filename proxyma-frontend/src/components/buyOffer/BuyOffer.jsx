import Container from "../utils/Container/Container.jsx";


function BuyOffer(){

    return <section className="buyOffer-section">
        <Container>
            <h2 className="buyOffer-title">
                Buy proxy servers from PROXYMA
            </h2>

            <p className="buyOffer-subtitle">
                PROXYMA offers high-quality proxy servers for your business. Our servers provide fast access to IP
                addresses, allowing quick switching to HTTPS.
            </p>

            <h3 className="buyOffer__subtitle-second">Advantages of PROXYMA proxy servers</h3>

            <ul className="buyOffer__list">
                <li className="buyOffer__item">
                    <img className="buyOffer__image"
                         src="https://proxyma.io/images/pages/layout/product/advantages/advantages-1.png"
                         alt="Reliable IP address protection for your client"/>
                    <h3 className="buyOffer__item-title">Reliable IP address protection for your client</h3>
                </li>
                <li className="buyOffer__item">
                    <img className="buyOffer__image"
                         src="https://proxyma.io/images/pages/layout/product/advantages/advantages-2.png"
                         alt="Identify cheap proxy server"/>
                    <h3 className="buyOffer__item-title">Identify cheap proxy server</h3>
                </li>
                <li className="buyOffer__item">
                    <img className="buyOfferr__image"
                         src="https://proxyma.io/images/pages/layout/product/advantages/advantages-3.png"
                         alt="Windows support"/>
                    <h3 className="buyOffer__item-title">Windows support</h3>
                </li>
            </ul>

            <h3 className="buyOffer__subtitle buyOffer__subtitle--bottom">What are proxy servers used for?</h3>

            <p className="buyOffer__desc buyOffer__desc--bottom">Proxy servers are used to protect and manage IPs,
                providing secure connections and access to data.</p>
        </Container>
    </section>
}

export default BuyOffer