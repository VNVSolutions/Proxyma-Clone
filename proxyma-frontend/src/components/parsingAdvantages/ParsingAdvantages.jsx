import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function ParsingAdvantages() {
    const { t } = useTranslation();

    const advantages = [
        {
            img: "https://proxyma.io/images/pages/layout/product/advantages-dataparsing/advantages-1.png",
            title: t("parsingAdvantages.items.0.title"),
            text: t("parsingAdvantages.items.0.text"),
        },
        {
            img: "https://proxyma.io/images/pages/layout/product/advantages-dataparsing/advantages-2.png",
            title: t("parsingAdvantages.items.1.title"),
            text: t("parsingAdvantages.items.1.text"),
        },
        {
            img: "https://proxyma.io/images/pages/layout/product/advantages-dataparsing/advantages-3.png",
            title: t("parsingAdvantages.items.2.title"),
            text: t("parsingAdvantages.items.2.text"),
        },
        {
            img: "https://proxyma.io/images/pages/layout/product/advantages-dataparsing/advantages-4.png",
            title: t("parsingAdvantages.items.3.title"),
            text: t("parsingAdvantages.items.3.text"),
        },
        {
            img: "https://proxyma.io/images/pages/layout/product/advantages-dataparsing/advantages-5.png",
            title: t("parsingAdvantages.items.4.title"),
            text: t("parsingAdvantages.items.4.text"),
        },
    ];

    return (
        <section className="parsingAdvantages-section">
            <Container className="parsingAdvantages-container">
                <h2 className="parsingAdvantages__title">
                    {t("parsingAdvantages.title")}
                </h2>

                <ul className="parsingAdvantages__list">
                    {advantages.map((item, index) => (
                        <li className="parsingAdvantages__item" key={index}>
                            <div className="parsingAdvantages__item-icon">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="parsingAdvantages__item-title">{item.title}</div>
                            <div className="parsingAdvantages__item-text">{item.text}</div>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}

export default ParsingAdvantages;
