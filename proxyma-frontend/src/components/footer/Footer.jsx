import Container from "../utils/Container/Container.jsx";


function Footer() {

    return<footer className="footer">
        <Container className="container-footer">

            <div className="footer__middle-content">
                <div className="footer__bar">
                    <a className="footer__logo" href="https://proxyma.io/en">
                        <img src="https://proxyma.io/images/footer-logo.png" alt="Logo proxyma"/>
                    </a>

                    <div className="footer__bar-text">
                        <p>
                            All other trademarks and logos used on this website are the property of their respective
                            owners. The use of these trademarks does not imply endorsement, affiliation or sponsorship
                            by PROXYMA Solutions Ltd.
                        </p>

                        <p>
                            PROXYMA Solutions Ltd. reserves the right to make changes to the website and the content,
                            products, or services described on the website at any time without notice.
                        </p>
                    </div>
                </div>

                <div className="footer__right">
                    <div className="footer__cols">
                        <div className="footer__col">
                            <h3 className="footer__col-title">RESIDENTIAL PROXIES</h3>

                            <ul className="footer__col-list">
                                <li className="footer__col-item">
                                    <a href="https://proxyma.io/en/product/rotating-residential-proxy"
                                       className="footer__col-link">
                                        Dynamic&nbsp;residential proxies
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__col">
                            <h3 className="footer__col-title">PROXYMA</h3>

                            <ul className="footer__col-list">
                                <li className="footer__col-item">
                                    <a href="https://proxyma.io/en/buy" className="footer__col-link">
                                        Pricing plan </a>
                                </li>
                                <li className="footer__col-item">
                                    <a href="https://proxyma.io/en/faq" className="footer__col-link">
                                        Help Center </a>
                                </li>
                                <li className="footer__col-item">
                                    <a href="https://cabinet.proxyma.io/en/login" className="footer__col-link">
                                        Login </a>
                                </li>
                                <li className="footer__col-item">
                                    <a href="https://cabinet.proxyma.io/en/register" className="footer__col-link">
                                        Sign Up </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__col">
                            <h3 className="footer__col-title">DOCUMENTS</h3>

                            <ul className="footer__col-list">
                                <li className="footer__col-item">
                                    <a href="https://proxyma.io/en/terms-of-use" className="footer__col-link">
                                        Terms of Use </a>
                                </li>
                                <li className="footer__col-item">
                                    <a href="https://proxyma.io/en/privacy-policy" className="footer__col-link">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="footer__col-item">
                                    <a href="https://proxyma.io/en/ethics" className="footer__col-link">
                                        Ethics
                                    </a>
                                </li>
                                <li className="footer__col-item">
                                    <a href="https://proxyma.io/en/cookie-policy" className="footer__col-link">
                                        Cookie Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer__requisites">
                        MISUTECH LIMITED LTD
                        SUITE C, LEVEL 7, WORLD TRUST TOWER,
                        50 STANLEY STREET, CENTRAL, HONG KONG
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__copy">Proxyma. © 2023. All Rights Reserved.</div>

                <div className="footer__email">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.7974 4.56934L15.822 11.4998L22.7974 18.4303C22.9235 18.1668 23 17.8754 23 17.5643V5.43538C23 5.12421 22.9235 4.83289 22.7974 4.56934Z"
                            fill="#FE3059"></path>
                        <path
                            d="M20.9786 3.41406H2.02157C1.71039 3.41406 1.41907 3.49056 1.15552 3.61666L10.0708 12.4871C10.8591 13.2754 12.141 13.2754 12.9293 12.4871L21.8446 3.61666C21.5811 3.49056 21.2898 3.41406 20.9786 3.41406Z"
                            fill="#FE3059"></path>
                        <path
                            d="M0.202598 4.56934C0.076502 4.83289 0 5.12421 0 5.43538V17.5643C0 17.8755 0.076502 18.1668 0.202598 18.4303L7.17802 11.4998L0.202598 4.56934Z"
                            fill="#FE3059"></path>
                        <path
                            d="M14.8692 12.4526L13.8822 13.4397C12.5687 14.7532 10.4314 14.7532 9.11796 13.4397L8.13094 12.4526L1.15552 19.3831C1.41907 19.5092 1.71039 19.5857 2.02157 19.5857H20.9786C21.2898 19.5857 21.5811 19.5092 21.8446 19.3831L14.8692 12.4526Z"
                            fill="#FE3059"></path>
                    </svg>
                    <span className="footer__emain-text">Email:</span>
                    <a className="footer__email-link" href="mailto:support@proxyma.io">support@proxyma.io</a>
                </div>

                <div className="footer__copy">
                    PROXYMA® is a registered trademark of PROXYMA Solutions Ltd.
                </div>
            </div>

        </Container>
    </footer>
}

export default Footer