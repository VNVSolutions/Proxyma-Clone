import Container from "../utils/Container/Container.jsx";

function PartnersPageHero() {

    return(<section className="partnersPageHero-section">
        <img src="https://proxyma.io/assets/static/partners-ms-bgpic-1.png" alt="picture" className="prt-ms-bgpic-1"/>
        <img src="https://proxyma.io/assets/static/partners-ms-bgpic-2.png" alt="picture" className="prt-ms-bgpic-2"/>
        <img src="https://proxyma.io/assets/static/partners-ms-pic-1.png" alt="picture" className="prt-ms-pic-1"/>
        <img src="https://proxyma.io/assets/static/partners-ms-pic-2.png" alt="picture" className="prt-ms-pic-2"/>
        <Container className="partnersPageHero-container">
            <h1 className="prt-ms-title">
                ЭТИ КОМПАНИИ ВЫБИРАЮТ <br/> <strong><i>PROXYMA</i> ДЛЯ РАБОТЫ</strong>
            </h1>

            <div className="prt-ms-desc">
                За годы работы на рынке компания Proxyma продолжает развиваться и вносить инновации в индустрию сбора
                данных
            </div>

            <a href="#" className="btn-reset button-accent prt-ms-btn">Присоединиться</a>
        </Container>
    </section>)
}

export default PartnersPageHero;