import Container from "../utils/Container/Container.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
    [
        {
            icon: "https://proxyma.io/images/pages/layout/index/skills/skills-1.svg",
            title: "Outstanding Performance",
            text: "Our ISP proxies are fast, reliable, and secure, giving you an uninterrupted browsing experience with a solid bandwidth for various use cases."
        },
        {
            icon: "https://proxyma.io/images/pages/layout/index/skills/skills-2.svg",
            title: "Global Coverage",
            text: "Access high-speed proxy service without geo-restrictions from multiple locations worldwide, including North America, Europe, Asia, and more."
        },
        {
            icon: "https://proxyma.io/images/pages/layout/index/skills/skills-5.svg",
            title: "Easy Integration",
            text: "Buy proxy IPs and integrate with your existing workflows using our user-friendly tools and documentation."
        },
        {
            icon: "https://proxyma.io/images/pages/layout/index/skills/skills-2.svg",
            title: "Multiple Proxy Types",
            text: "Buy a proxy choosing from a range of options, including mobile, residential, and datacenter proxies."
        },
    ],
    [
        {
            icon: "https://proxyma.io/images/pages/layout/index/skills/skills-2.svg",
            title: "Global Coverage",
            text: "Access high-speed proxy service without geo-restrictions from multiple locations worldwide, including North America, Europe, Asia, and more."
        },
        {
            icon: "https://proxyma.io/images/pages/layout/index/skills/skills-3.svg",
            title: "Ethically Sourced Residential Proxy Pool",
            text: "Our bulk proxies are ethically sourced from verified data centers to ensure reliability and legality."
        },
        {
            icon: "https://proxyma.io/images/pages/layout/index/skills/skills-6.svg",
            title: "Multiple Proxy Types",
            text: "Buy proxies based on your tasks: mobile, residential, datacenter."
        },
        {
            icon: "https://proxyma.io/images/pages/layout/index/skills/skills-7.svg",
            title: "Affordable Premium Proxies",
            text: "Buy proxy server addresses cheap, without compromising on quality or performance."
        },
    ],
    [
        {
            icon: "https://proxyma.io/images/pages/layout/index/skills/skills-3.svg",
            title: "Ethically Sourced Residential Proxy Pool",
            text: "Our proxies are ethically sourced, ensuring legal and reliable use."
        },
        {
            icon: "https://proxyma.io/images/pages/layout/index/skills/skills-4.svg",
            title: "24/7 Customer Support",
            text: "Get help any time regarding plans, APIs, IPv6, payment, etc."
        },
        {
            icon: "https://proxyma.io/images/pages/layout/index/skills/skills-7.svg",
            title: "Affordable Premium Proxies",
            text: "Benefit from cheap proxies with great performance."
        },
        {
            icon: "https://proxyma.io/images/pages/layout/index/skills/skills-8.svg",
            title: "Anonymous Browsing",
            text: "Protect your identity and surf the internet anonymously."
        },
    ],
];

function Superpowers() {

    return <section className="superpowers-section">
        <Container>

            <h2 className="skills__title">
                Our superpowers
            </h2>

            <div className="superpowers-box">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={30}


                >
                    {slides.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="superpowers-grid">
                                {slide.map((item, index) => (
                                    <div className="skills-item" key={index}>
                                        <img src={item.icon} alt={item.title} className="skills-icon" />
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
}

export default Superpowers;