import Container from "../utils/Container/Container.jsx";

import refferalImg1 from '../../../public/img/refferal1.png'
import refferalImg2 from '../../../public/img/refferal2.png'
import refferalImg3 from '../../../public/img/refferal3.png'
import {NavLink} from "react-router-dom";


function Refferal() {

    return <section className="refferal-section">
        <Container>
            <h2 className="referral__title">
                Affiliate program <span>Proxyma</span>
            </h2>

            <div className="referral__subtitle">
                Get exclusive technical support from your
            </div>


            <div className="referral__content">
                <div className="referral__content-pic">
                    <img src="https://proxyma.io/images/pages/layout/buy-now/referral-pic.png"
                         alt="Получайте исключительную техническую поддержку от своих"/>
                </div>
                <div className="referral__content-info">
                    <div className="referral__content-title">
                        Earn with us!
                    </div>
                    <div className="referral__content-text">
                        <p>
                            Join our affiliate program and receive
                            <span>10%</span> of all payments made by customers you refer.
                        </p>
                        <ul>
                            <li>Test our solutions</li>
                            <li>Use ready-made promo materials</li>
                            <li>Receive monthly payments</li>
                        </ul>
                        <p>
                            Partnering with PROXYMA is an opportunity to earn money for
                            content creators, digital business owners, Discord users, SEO specialists, bloggers, and
                            many others. Join now and
                            <span>start earning</span>!
                        </p>
                    </div>
                </div>
            </div>

            <ul className="referral__list">
                <li className="referral__item">
                    <div className="referral__item-icon">
                        <img src={refferalImg1} alt="refferal-icon"/>
                    </div>
                    <div className="referral__item-title">
                        <span>1.</span>
                        Sign up
                    </div>
                    <div className="referral__item-text">
                        Create an account, activate the affiliate program and get your unique referral link.
                    </div>
                </li>
                <li className="referral__item">
                    <div className="referral__item-icon">
                        <img src={refferalImg2} alt="refferal-icon"/>
                    </div>
                    <div className="referral__item-title">
                        <span>2.</span>
                        Attract customers
                    </div>
                    <div className="referral__item-text">
                        Get your referral link in your account and share it with your audience on your website or social
                        networks.
                    </div>
                </li>
                <li className="referral__item">
                    <div className="referral__item-icon">
                        <img src={refferalImg3} alt="refferal-icon"/>
                    </div>
                    <div className="referral__item-title"><span>3.</span>
                        GET REWARDS
                    </div>
                    <div className="referral__item-text">
                        Start receiving rewards - 10% immediately after the first deposit from the user you attracted.
                    </div>
                </li>
            </ul>

            <div className="referral__button-wrapper">
                <NavLink to="#" className="referral__button"> Learn more
                    › </NavLink>
            </div>
        </Container>
    </section>
}

export default Refferal;