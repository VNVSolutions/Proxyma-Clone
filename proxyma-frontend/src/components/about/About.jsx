import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();

    return (
        <section className="about-section">
            <Container>
                <h2 className="about__title">{t("about.title")}</h2>
                <div className="about__top">
                    <div className="about__desc">{t("about.desc")}</div>

                    <ul className="about__list">
                        {["anonymity", "cache", "filtering", "blocks"].map((key, idx) => (
                            <li className="about__item" key={idx}>
                                <h4 className="about__item-title">{t(`about.items.${key}.title`)}</h4>
                                <ul>
                                    {t(`about.items.${key}.list`, { returnObjects: true }).map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="about__footer">
                    <h3 className="about__footer-title">{t("about.footer.title")}</h3>
                    <div className="about__footer-text">{t("about.footer.text")}</div>
                </div>
            </Container>
        </section>
    );
}

export default About;
