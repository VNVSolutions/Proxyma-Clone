import Container from "../utils/Container/Container.jsx";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Offer() {
    const { t } = useTranslation();

    const items = [
        "stability",
        "parsing",
        "drops",
        "fail",
        "rotation"
    ];

    return (
        <section className="offerSection">
            <Container>
                <h2 className="offer__title">{t("offer.title")}</h2>

                <ul className="offer__list">
                    {items.map((key) => (
                        <li className="offer__item" key={key}>
                            <div className="offer__item-icon">
                                <img
                                    src={t(`offer.list.${key}.icon`)}
                                    alt={t(`offer.list.${key}.title`)}
                                />
                            </div>
                            <div className="offer__item-title">{t(`offer.list.${key}.title`)}</div>
                            <div className="offer__item-text">{t(`offer.list.${key}.text`)}</div>
                        </li>
                    ))}

                    <li className="offer__item advantages__item--last">
                        <div className="offer__item-title">{t("offer.list.last.title")}</div>
                        <NavLink to="#" className="offer__item-link offer-button-accent">
                            {t("offer.list.last.button")}
                        </NavLink>
                    </li>
                </ul>
            </Container>
        </section>
    );
}

export default Offer;
