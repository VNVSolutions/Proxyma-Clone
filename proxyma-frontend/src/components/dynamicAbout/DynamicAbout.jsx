import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function DynamicAbout() {
    const { t } = useTranslation();

    return (
        <section className="dynamicAbout-section">
            <h2 className="dynamic-about__title">
                {t("dynamicAbout.title")}
            </h2>
            <div className="dynamicAbout-wrap">
                <Container className="dynamicAbout-container">
                    <ul className="dynamic_about__list">
                        <li className="dynamic_about__item">
                            <span>{t("dynamicAbout.list.1.bold")}</span> - {t("dynamicAbout.list.1.text")}
                        </li>
                        <li className="dynamic_about__item">
                            <span>{t("dynamicAbout.list.2.bold")}</span> - {t("dynamicAbout.list.2.text")}
                        </li>
                        <li className="dynamic_about__item">
                            {t("dynamicAbout.list.3.text")}
                        </li>
                        <li className="dynamic_about__item">
                            <span>{t("dynamicAbout.list.4.bold")}</span>, {t("dynamicAbout.list.4.text")}
                        </li>
                    </ul>
                </Container>
            </div>
        </section>
    );
}

export default DynamicAbout;
