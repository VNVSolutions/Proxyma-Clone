import Container from "../utils/Container/Container.jsx";


function PartnersHero() {

    return <section className="partnersHero">
        <Container className="partnersHero-container">
            <div className="partnersHero__content">
                <div className="breads" itemScope="" itemType="https://schema.org/BreadcrumbList">
                    <div itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                        <a href="https://proxyma.io" className="breads-item" itemProp="item">
                            <span itemProp="name">Proxyma</span>
                            <meta itemProp="position" content="1"/>
                        </a>
                    </div>
                    <div className="breads-sep">›</div>
                    <div itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                        <span className="breads-item active" itemProp="item">
                            <span itemProp="name">Информация для партнеров</span>
                            <meta itemProp="position" content="2"/>
                        </span>
                    </div>
                </div>

                <h1 className="hero__title">
                    Информация для партнеров Proxyma.io
                </h1>
                <div className="hero__subtitle">
                    <p>Приветствуем вам от всей Команды Proxyma на нашей странице посвящённой партнерам.</p><p>Мы
                    предлагаем вам обменяться ссылками на своих сайтах. Т.е мы размещаем ссылку на ваш сервис в
                    разделе <a href="partners">Партнеры</a>, и вы также же размещаете ссылку в своем разделе Партнеры
                    (или аналогичном на вашем сайте)</p>
                </div>
            </div>
        </Container>
    </section>
}

export default PartnersHero