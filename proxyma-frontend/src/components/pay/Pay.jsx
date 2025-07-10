import Container from "../utils/Container/Container.jsx";
import {NavLink} from "react-router-dom";


function Pay() {

    return <section className="section-pay">
        <Container>
            <h2 className="pay__title">Fast and secure payment options</h2>

            <ul className="pay__list">
                <li className="pay__item">
                    <img src="https://proxyma.io/images/pages/layout/buy-now/pay/visa.png" alt="visa"/>
                </li>
                <li className="pay__item">
                    <img src="https://proxyma.io/images/pages/layout/buy-now/pay/mastercard.png" alt="masstercard"/>
                </li>
                <li className="pay__item">
                    <img src="https://proxyma.io/images/pages/layout/buy-now/pay/tether.png" alt="tether"/>
                </li>
                <li className="pay__item">
                    <img src="https://proxyma.io/images/pages/layout/buy-now/pay/paypal.png" alt="paypal"/>
                </li>
                <li className="pay__item">
                    <img src="https://proxyma.io/images/pages/layout/buy-now/pay/binance.png" alt="binance"/>
                </li>
                <li className="pay__item">
                    <img src="https://proxyma.io/images/pages/layout/buy-now/pay/ton.png" alt="ton"/>
                </li>
            </ul>

            <div className="pay__text">
                In PROXYMA, we believe that when it comes to buying proxies, our users want a payment process that is
                fast, secure, and hassle-free. We offer a range of simple and convenient payment options, including
                credit/debit cards, PayPal, cryptocurrencies, and others. You can learn more about our payment methods
                and security features by visiting our <NavLink to="#" target="_blank" className='pay_text_link' >FAQ
                page</NavLink> or contacting our support team.
            </div>
        </Container>
    </section>
}


export default Pay;