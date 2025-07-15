import Container from "../utils/Container/Container.jsx";
import refferalImg1 from '../../../public/img/refferal1.png';
import refferalImg2 from '../../../public/img/refferal2.png';
import refferalImg3 from '../../../public/img/refferal3.png';
import { NavLink } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

function Refferal() {
    const { t } = useTranslation();

    return (
        <section className="refferal-section">
            <Container>
                <h2 className="referral__title">
                    <Trans i18nKey="referral.title">
                        Affiliate program <span>Proxyma</span>
                    </Trans>
                </h2>

                <div className="referral__subtitle">{t("referral.subtitle")}</div>

                <div className="referral__content">
                    <div className="referral__content-pic">
                        <img src="https://proxyma.io/images/pages/layout/buy-now/referral-pic.png" alt="referral" />
                    </div>
                    <div className="referral__content-info">
                        <div className="referral__content-title">{t("referral.contentTitle")}</div>
                        <div className="referral__content-text">
                            <p>
                                <Trans i18nKey="referral.contentText1">
                                    Join our affiliate program and receive <span>10%</span>
                                </Trans>
                            </p>
                            <ul>
                                <li>{t("referral.contentList.1")}</li>
                                <li>{t("referral.contentList.2")}</li>
                                <li>{t("referral.contentList.3")}</li>
                            </ul>
                            <p>
                                <Trans i18nKey="referral.contentText2">
                                    Partnering with PROXYMA… <span>start earning</span>
                                </Trans>
                            </p>
                        </div>
                    </div>
                </div>

                <ul className="referral__list">
                    {[1, 2, 3].map((step) => (
                        <li className="referral__item" key={step}>
                            <div className="referral__item-icon">
                                <img src={[refferalImg1, refferalImg2, refferalImg3][step - 1]} alt="referral-icon" />
                            </div>
                            <div className="referral__item-title">
                                <span>{step}.</span> {t(`referral.steps.${step}.title`)}
                            </div>
                            <div className="referral__item-text">{t(`referral.steps.${step}.text`)}</div>
                        </li>
                    ))}
                </ul>

                <div className="referral__button-wrapper">
                    <NavLink to="#" className="referral__button">
                        {t("referral.button")}
                    </NavLink>
                </div>
            </Container>
        </section>
    );
}

export default Refferal;
