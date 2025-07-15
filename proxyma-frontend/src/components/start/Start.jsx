import Container from "../utils/Container/Container.jsx";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Start() {
    const { t } = useTranslation();

    return (
        <section>
            <Container>
                <div className="start__inner">
                    <h2 className="start__title">{t("start.title")}</h2>
                    <NavLink to="#" className="start__button--stroke">
                        {t("start.startNow")}
                    </NavLink>
                    <NavLink to="#" className="start__button--white">
                        {t("start.contact")}
                    </NavLink>
                </div>
            </Container>
        </section>
    );
}

export default Start;
