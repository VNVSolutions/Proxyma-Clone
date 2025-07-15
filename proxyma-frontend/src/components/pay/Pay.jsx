import Container from "../utils/Container/Container.jsx";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Pay() {
    const { t } = useTranslation();

    return (
        <section className="section-pay">
            <Container>
                <h2 className="pay__title">{t("pay.title")}</h2>

                <ul className="pay__list">
                    <li className="pay__item">
                        <img src="https://proxyma.io/images/pages/layout/buy-now/pay/visa.png" alt="visa" />
                    </li>
                    <li className="pay__item">
                        <img src="https://proxyma.io/images/pages/layout/buy-now/pay/mastercard.png" alt="masstercard" />
                    </li>
                    <li className="pay__item">
                        <img src="https://proxyma.io/images/pages/layout/buy-now/pay/tether.png" alt="tether" />
                    </li>
                    <li className="pay__item">
                        <img src="https://proxyma.io/images/pages/layout/buy-now/pay/paypal.png" alt="paypal" />
                    </li>
                    <li className="pay__item">
                        <img src="https://proxyma.io/images/pages/layout/buy-now/pay/binance.png" alt="binance" />
                    </li>
                    <li className="pay__item">
                        <img src="https://proxyma.io/images/pages/layout/buy-now/pay/ton.png" alt="ton" />
                    </li>
                </ul>

                <div className="pay__text">
                    {t("pay.text").replace("FAQ page", "")}
                    <NavLink to="#" target="_blank" className="pay_text_link">
                        {t("pay.faqLink")}
                    </NavLink>
                </div>
            </Container>
        </section>
    );
}

export default Pay;
