import Container from "../utils/Container/Container.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Tariff({ showTittle }) {
    const { t } = useTranslation();
    const [activeType, setActiveType] = useState('residential');

    const plans = [
        {
            title: 'STARTUNA',
            price: '$5',
            period: 'Month',
            badge: t("tariff.badges.best"),
            data: { price: '$5 / Gb', traffic: '1 Gb', ports: '1000', countries: '190' },
        },
        {
            title: 'NEBULA SET',
            price: '$30',
            period: 'Month',
            data: { price: '$3 / Gb', traffic: '10 Gb', ports: '1000', countries: '190' },
        },
        {
            title: 'PROTOSTAR SET',
            price: '$78',
            period: 'Month',
            badge: t("tariff.badges.effective"),
            data: { price: '$2.6 / Gb', traffic: '30 Gb', ports: '1000', countries: '190' },
        },
        {
            title: 'SUPERNOVA SET',
            price: '$160',
            period: 'Month',
            data: { price: '$2 / Gb', traffic: '80 Gb', ports: '1000', countries: '190' },
        },
        {
            title: 'PULSAR SET',
            price: '$272',
            period: 'Month',
            badge: t("tariff.badges.popular"),
            data: { price: '$1.7 / Gb', traffic: '160 Gb', ports: '1000', countries: '190' },
        }
    ];

    return (
        <section className="tariff-section section-blue">
            <Container>
                {showTittle && <h3 className="tariff-aditional-title">{t("tariff.additionalTitle")}</h3>}

                <h2 className="tariff__title">{t("tariff.title")}</h2>

                <div className="tariff-type-switch">
                    <button
                        className={`tariff-type-btn ${activeType === 'residential' ? 'active' : ''}`}
                        onClick={() => setActiveType('residential')}
                    >
                        {t("tariff.types.residential")}
                    </button>
                    <button
                        className={`tariff-type-btn ${activeType === 'isp' ? 'active' : ''}`}
                        onClick={() => setActiveType('isp')}
                    >
                        {t("tariff.types.isp")}
                    </button>
                </div>

                {activeType === 'residential' ? (
                    <div className="plans-swiper">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={20}
                            slidesPerView={1.2}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                            pagination={{ clickable: true }}
                        >
                            {plans.map((plan, index) => (
                                <SwiperSlide className="tariff-swiper" key={index}>
                                    <div className={`plan-card ${plan.badge ? 'has-badge' : ''}`}>
                                        {plan.badge && <div className="plan-badge">{plan.badge}</div>}
                                        <h3 className="plan-title">{plan.title}</h3>
                                        <p className="plan-price">
                                            <span>{plan.price}</span><small>/{plan.period}</small>
                                        </p>
                                        <ul className="plan-data">
                                            <li><strong>Price:</strong> {plan.data.price}</li>
                                            <li><strong>Traffic:</strong> {plan.data.traffic}</li>
                                            <li><strong>Ports:</strong> {plan.data.ports}</li>
                                            <li><strong>Countries:</strong> {plan.data.countries}</li>
                                        </ul>
                                        <button className="plan-button">{t("tariff.buttons.buyNow")}</button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <>
                        <div className="tariff__feedback">
                            <div className="tariff__feedback-inner">
                                <div className="tariff__feedback--text">{t("tariff.isp.feedback")}</div>
                                <NavLink to="#" className="tariff__feedback-link button-accent">
                                    {t("tariff.buttons.contactUs")}
                                </NavLink>
                            </div>
                        </div>

                        <div className="tariff__precedence">
                            {t("tariff.isp.advantages", { returnObjects: true }).map((item, idx) => (
                                <div key={idx} className="tariff__precedence-item">{item}</div>
                            ))}
                        </div>
                    </>
                )}
            </Container>
        </section>
    );
}

export default Tariff;
