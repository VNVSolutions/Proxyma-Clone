import Container from "../utils/Container/Container.jsx";


function SocialMediaBar() {

    return <section className="hero__best">
        <Container className="hero__best-container">
            <ul className="hero__best-list">
                <li className="hero__best-item">
                    <img src="https://proxyma.io/images/pages/layout/index/hero-best/telegram.svg" alt="telegram"/>
                </li>
                <li className="hero__best-item">
                    <img src="https://proxyma.io/images/pages/layout/index/hero-best/inst.svg" alt="instagram"/>
                </li>
                <li className="hero__best-item">
                    <img src="https://proxyma.io/images/pages/layout/index/hero-best/netflix.svg" alt="netflix"/>
                </li>
                <li className="hero__best-item">
                    <img src="https://proxyma.io/images/pages/layout/index/hero-best/reddit.svg" alt="reddit"/>
                </li>
                <li className="hero__best-item">
                    <img src="https://proxyma.io/images/pages/layout/index/hero-best/youtube.svg" alt="youtube"/>
                </li>
                <li className="hero__best-item">
                    <img src="https://proxyma.io/images/pages/layout/index/hero-best/fb.svg" alt="facebook"/>
                </li>
                <li className="hero__best-item">
                    <img src="https://proxyma.io/images/pages/layout/index/hero-best/pinter.svg" alt="pinterest"/>
                </li>
                <li className="hero__best-item">
                    <img src="https://proxyma.io/images/pages/layout/index/hero-best/google.svg" alt="google"/>
                </li>
                <li className="hero__best-item">
                    <img src="https://proxyma.io/images/pages/layout/index/hero-best/tinder.svg" alt="tinder"/>
                </li>
                <li className="hero__best-item" style={{transform: 'translateY(5px)'}}>
                    <img src="https://proxyma.io/images/pages/layout/index/hero-best/amazon.svg" alt="amazon"/>
                </li>
                <li className="hero__best-item">
                    <img src="https://proxyma.io/images/pages/layout/index/hero-best/binance.svg" alt="binance"/>
                </li>
                <li className="hero__best-item">
                    <img src="https://proxyma.io/images/pages/layout/index/hero-best/tiktok.svg" alt="tiktok"/>
                </li>
            </ul>
        </Container>
    </section>
}

export default SocialMediaBar;