import Container from "../utils/Container/Container.jsx";
import {partnersData} from "../utils/partnersData/partnersData.js";
import {useState} from "react";

function OurPartners() {
    const categories = Object.keys(partnersData);
    const [active, setActive] = useState(categories[0]);

    return(
        <section className="our-partners-section">
            <Container className="our-partners-container">
                <div className="prt-tb-h">
                    <h1 className="prt-tb-title title">Наши партнеры</h1>
                    <div className="prt-tb-subtitle subtitle">Компании, к которой и мы, и они всегда можем обратиться
                        друг к другу за помощью и поддержкой
                    </div>
                </div>


                <div className="partners-layout">
                    {/* Tabs */}
                    <div className="partners-tabs">
                        {categories.map((cat) => (
                            <div
                                key={cat}
                                className={`tab ${active === cat ? "active" : ""}`}
                                onClick={() => setActive(cat)}
                            >
                                {cat}
                                <span className="count">{partnersData[cat].length}</span>
                            </div>
                        ))}
                    </div>

                    {/* Cards */}
                    <div className="partners-cards">
                        {partnersData[active].map((p) => (
                            <a href='#'>
                                <div key={p.title} className="partner-card">
                                    {p.logo && <img src={p.logo} alt={p.title} />}
                                    <h3>{p.title}</h3>
                                    <p>{p.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default OurPartners