import Container from "../utils/Container/Container.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Feedbacks.css";


const feedbacks = [
    {
        name: "Avastar",
        date: "June 16, 2024",
        avatar: "https://proxyma.io/assets/static/gr3.png",
        message: "The proxy server service has become a reliable basis for my Internet research. I no longer worry about blocking and failures – everything works stably and efficiently."
    },
    {
        name: "Sam Knight",
        date: "June 9, 2024",
        avatar: "https://proxyma.io/assets/static/gr4.png",
        message: "The use of resident proxies has significantly improved the quality of analytics and increased the accuracy of the data collected for our clients."
    },
    {
        name: "Mike",
        date: "June 12, 2024",
        avatar: "https://proxyma.io/assets/static/gr2.png",
        message: "The site interface is intuitive, all settings are easily accessible and presented in a convenient format. Everything is obvious."
    },
    {
        name: "Sam Knight",
        date: "June 9, 2024",
        avatar: "https://proxyma.io/assets/static/gr4.png",
        message: "The use of resident proxies has significantly improved the quality of analytics and increased the accuracy of the data collected for our clients."
    }
];

function Feedbacks() {
    return <section className="feedbacks-section">
        <Container>
            <h2 className="title reviews__title">User feedback</h2>

            <div className="feedbacks-swiper-wrapper feedback-swipe-box">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".feedbacks-next",
                        prevEl: ".feedbacks-prev"
                    }}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        768: {slidesPerView: 2},
                        1024: {slidesPerView: 3},
                    }}
                >
                    {feedbacks.map((fb, index) => (
                        <SwiperSlide  key={index}>
                            <div className="feedback-card">
                                <div className="feedback-header">
                                    <img src={fb.avatar} alt={fb.name} className="feedback-avatar"/>
                                    <div>
                                        <h4 className="feedback-name">{fb.name}</h4>
                                        <p className="feedback-date">{fb.date}</p>
                                    </div>
                                </div>
                                <p className="feedback-message">{fb.message}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className="feedbacks-prev">&lt;</button>
                <button className="feedbacks-next">&gt;</button>
            </div>
        </Container>
    </section>
}

export default Feedbacks;