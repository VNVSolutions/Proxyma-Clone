import Container from "../utils/Container/Container.jsx";


function PartnersAgitation() {

    return (<section className="partnersAgitation-section">
        <Container className="partnersAgitations-container">
            <div className="bnr-h">
                <h2 className="bnr-title title">Компании всех размеров по всему миру используют Proxyma</h2>
                <div className="bnt-subtitle subtitle">Направьте нам запрос с краткой информацией о вашем бизнесе и наши
                    специалисты оперативно свяжутся с вами дальнейшими инструкциями по установлению партнерских
                    отношений.
                </div>
            </div>
            <div className="bnr-grid">
                <div className="bnr-item _grid-3 partner_block1">
                    <div className="bnr-item-title">Присоединяйтесь к нам.</div>
                    <div className="bnr-item-text">
                        Свяжитесь с нами и станьте нашим партнером. Стройте и развивайте свой бизнес вместе с Proxyma.
                    </div>
                    <a href="#"
                       className="btn-reset button-accent bnr-item-btn">Присоединиться</a>
                </div>
            </div>
        </Container>
    </section>)
}

export default PartnersAgitation;