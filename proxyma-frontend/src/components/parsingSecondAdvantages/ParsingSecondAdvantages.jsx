import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function ParsingSecondAdvantages() {
    const { t } = useTranslation();

    const advantages = [
        {
            img: "https://proxyma.io/images/pages/layout/product/advantages-dataparsing/advantages-6.png",
            title: t("parsingSecondAdvantages.items.0.title"),
            text: t("parsingSecondAdvantages.items.0.text"),
        },
        {
            img: "https://proxyma.io/images/pages/layout/product/advantages-dataparsing/advantages-7.png",
            title: t("parsingSecondAdvantages.items.1.title"),
            text: t("parsingSecondAdvantages.items.1.text"),
        },
        {
            img: "https://proxyma.io/images/pages/layout/product/advantages-dataparsing/advantages-8.png",
            title: t("parsingSecondAdvantages.items.2.title"),
            text: t("parsingSecondAdvantages.items.2.text"),
        },
    ];

    return (
        <section className="parsingSecondAdvantages-section">
            <Container>
                <h2 className="parsingSecondAdvantages__title">
                    {t("parsingSecondAdvantages.title")}
                </h2>

                <ul className="parsingSecondAdvantages__list">
                    {advantages.map((item, index) => (
                        <li className="parsingSecondAdvantages__item" key={index}>
                            <div className="parsingSecondAdvantages__item-icon">
                                <img src={item.img} alt={item.title}/>
                            </div>
                            <div className="parsingSecondAdvantages__item-title">{item.title}</div>
                            <div className="parsingSecondAdvantages__item-text">{item.text}</div>
                        </li>
                    ))}
                </ul>
                <a href="https://cabinet.proxyma.io/ru/register" className="button-accent advantages__button">
                    Попробуйте сейчас за $2.5
                </a>
            </Container>
        </section>
    );
}

export default ParsingSecondAdvantages;
