import Container from "../utils/Container/Container.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

const icons = [
    [
        "https://proxyma.io/images/pages/layout/index/skills/skills-1.svg",
        "https://proxyma.io/images/pages/layout/index/skills/skills-2.svg",
        "https://proxyma.io/images/pages/layout/index/skills/skills-5.svg",
        "https://proxyma.io/images/pages/layout/index/skills/skills-2.svg"
    ],
    [
        "https://proxyma.io/images/pages/layout/index/skills/skills-2.svg",
        "https://proxyma.io/images/pages/layout/index/skills/skills-3.svg",
        "https://proxyma.io/images/pages/layout/index/skills/skills-6.svg",
        "https://proxyma.io/images/pages/layout/index/skills/skills-7.svg"
    ],
    [
        "https://proxyma.io/images/pages/layout/index/skills/skills-3.svg",
        "https://proxyma.io/images/pages/layout/index/skills/skills-4.svg",
        "https://proxyma.io/images/pages/layout/index/skills/skills-7.svg",
        "https://proxyma.io/images/pages/layout/index/skills/skills-8.svg"
    ]
];

function Superpowers() {
    const { t } = useTranslation();
    const slides = t("superpowers.slides", { returnObjects: true });

    return (
        <section className="superpowers-section">
            <Container>
                <h2 className="skills__title">{t("superpowers.title")}</h2>

                <div className="superpowers-box">
                    <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={30}>
                        {slides.map((slide, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="superpowers-grid">
                                    {slide.map((item, index) => (
                                        <div className="skills-item" key={index}>
                                            <img src={icons[idx][index]} alt={item.title} className="skills-icon" />
                                            <div>
                                                <h4 className="skills-title">{item.title}</h4>
                                                <p className="skills-text">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    );
}

export default Superpowers;
