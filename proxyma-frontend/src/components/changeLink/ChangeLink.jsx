import Container from "../utils/Container/Container.jsx";


function ChangeLink() {

    return <section className="change-link">
        <Container>
            <h2 className="change-link__title">
                Почему стоит обменяться ссылками?
            </h2>

            <div className="change-link__content">
                <div className="change-link__item">
                    <div className="change-link__icon">
                        <img src="https://proxyma.io/images/pages/layout/partners-info/change-link-1.svg"
                             alt="Обмен клиентами"/>
                    </div>
                    <h3 className="change-link__subtitle">
                        Обмен клиентами
                    </h3>
                    <div className="change-link__text">
                        <p>
                            Обмен клиентами - мы работаем в одной сфере деятельности. Наши клиенты - это потенциально
                            ваши клиенты.
                        </p>
                    </div>
                </div>
                <div className="change-link__item">
                    <div className="change-link__icon">
                        <img src="https://proxyma.io/images/pages/layout/partners-info/change-link-2.svg"
                             alt="SEO продвижение сайта"/>
                    </div>
                    <h3 className="change-link__subtitle">
                        SEO продвижение сайта
                    </h3>
                    <div className="change-link__text">
                        <p>
                            SEO продвижение сайта - т.к наш сайт является трастовым ресурсом, это поможет вам иметь
                            хорошую ссылочную массу что хорошо скажется на SEO если мы разместим информацию о вас на
                            нашем сайте.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}

export default ChangeLink