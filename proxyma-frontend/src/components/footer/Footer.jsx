import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <Container className="container-footer">

                <div className="footer__middle-content">
                    <div className="footer__bar">
                        <a className="footer__logo" href="https://proxyma.io/en">
                            <img src="https://proxyma.io/images/footer-logo.png" alt="Logo proxyma" />
                        </a>

                        <div className="footer__bar-text">
                            <p>{t("footer.disclaimer1")}</p>
                            <p>{t("footer.disclaimer2")}</p>
                        </div>
                    </div>

                    <div className="footer__right">
                        <div className="footer__cols">
                            <div className="footer__col">
                                <h3 className="footer__col-title">{t("footer.titles.residential")}</h3>
                                <ul className="footer__col-list">
                                    <li className="footer__col-item">
                                        <a href="https://proxyma.io/en/product/rotating-residential-proxy" className="footer__col-link">
                                            {t("footer.links.dynamic")}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer__col">
                                <h3 className="footer__col-title">{t("footer.titles.proxyma")}</h3>
                                <ul className="footer__col-list">
                                    <li><a href="https://proxyma.io/en/buy" className="footer__col-link">{t("footer.links.pricing")}</a></li>
                                    <li><a href="https://proxyma.io/en/faq" className="footer__col-link">{t("footer.links.help")}</a></li>
                                    <li><a href="https://cabinet.proxyma.io/en/login" className="footer__col-link">{t("footer.links.login")}</a></li>
                                    <li><a href="https://cabinet.proxyma.io/en/register" className="footer__col-link">{t("footer.links.signup")}</a></li>
                                </ul>
                            </div>

                            <div className="footer__col">
                                <h3 className="footer__col-title">{t("footer.titles.documents")}</h3>
                                <ul className="footer__col-list">
                                    <li><a href="https://proxyma.io/en/terms-of-use" className="footer__col-link">{t("footer.links.terms")}</a></li>
                                    <li><a href="https://proxyma.io/en/privacy-policy" className="footer__col-link">{t("footer.links.privacy")}</a></li>
                                    <li><a href="https://proxyma.io/en/ethics" className="footer__col-link">{t("footer.links.ethics")}</a></li>
                                    <li><a href="https://proxyma.io/en/cookie-policy" className="footer__col-link">{t("footer.links.cookie")}</a></li>
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
                    <div className="footer__copy">{t("footer.copy")}</div>

                    <div className="footer__email">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.7974 4.56934L15.822 11.4998L22.7974 18.4303C22.9235 18.1668 23 17.8754 23 17.5643V5.43538C23 5.12421 22.9235 4.83289 22.7974 4.56934Z" fill="#FE3059"></path>
                            <path d="M20.9786 3.41406H2.02157C1.71039 3.41406 1.41907 3.49056 1.15552 3.61666L10.0708 12.4871C10.8591 13.2754 12.141 13.2754 12.9293 12.4871L21.8446 3.61666C21.5811 3.49056 21.2898 3.41406 20.9786 3.41406Z" fill="#FE3059"></path>
                            <path d="M0.202598 4.56934C0.076502 4.83289 0 5.12421 0 5.43538V17.5643C0 17.8755 0.076502 18.1668 0.202598 18.4303L7.17802 11.4998L0.202598 4.56934Z" fill="#FE3059"></path>
                            <path d="M14.8692 12.4526L13.8822 13.4397C12.5687 14.7532 10.4314 14.7532 9.11796 13.4397L8.13094 12.4526L1.15552 19.3831C1.41907 19.5092 1.71039 19.5857 2.02157 19.5857H20.9786C21.2898 19.5857 21.5811 19.5092 21.8446 19.3831L14.8692 12.4526Z" fill="#FE3059"></path>
                        </svg>
                        <span className="footer__emain-text">{t("footer.email")}</span>
                        <a className="footer__email-link" href="mailto:support@proxyma.io">support@proxyma.io</a>
                    </div>

                    <div className="footer__copy">{t("footer.trademark")}</div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
