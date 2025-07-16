import Container from "../utils/Container/Container.jsx";
import { useTranslation } from "react-i18next";

function EcommerceAdvantages() {
    const { t } = useTranslation();

    const advantages = t("ecommerceAdvantages.items", { returnObjects: true });

    return (
        <section className="ecommerceAdvantages-section">
            <Container>
                <h2 className="ecommerceAdvantages-title">
                    {t("ecommerceAdvantages.title")}
                </h2>

                <ul className="ecommerceAdvantages__list">
                    {advantages.map((item, index) => (
                        <li className="ecommerceAdvantages__item" key={index}>
                            <div className="ecommerceAdvantages__item-icon">
                                <img src={item.icon} alt="img" />
                            </div>
                            <div className="ecommerceAdvantages__item-title">{item.title}</div>
                            <div className="ecommerceAdvantages__item-text">{item.text}</div>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}

export default EcommerceAdvantages;
