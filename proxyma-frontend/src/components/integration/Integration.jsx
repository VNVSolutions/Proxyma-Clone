import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function Integration() {
    const { t } = useTranslation();

    return (
        <section className="integration-section">
            <Container className="integration-container">
                <h2 className="integration__title">{t("integration.title")}</h2>
                <p className="integration__text">{t("integration.text1")}</p>
                <p className="integration__text">
                    {t("integration.text2.before")}{" "}
                    <span className="highlight">{t("integration.text2.highlight")}</span>
                </p>
            </Container>
        </section>
    );
}

export default Integration;
