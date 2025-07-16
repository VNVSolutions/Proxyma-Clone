import Container from "../utils/Container/Container.jsx";


function PasteLink() {

    return <section className="paste-link">
        <Container>
            <h2 className="paste-link__title">
                Вставьте ссылку на наш сайт
            </h2>

            <div className="paste-link__content">
                <button type="button" data-clipboard-text="Ссылка скопирована!" className="paste-link__copy btn-reset">
                    https://proxyma.io/?utm_source=ВАШ_САЙТ
                </button>
            </div>

            <div className="paste-link__text">
                <p>Пожалуйста, не забудьте поменять ВАШ_САЙТ на название вашего сайта. Ниже несколько примеров:</p>
                <p>https://proxyma.io/?utm_source=ADSPOWER</p><p>https://proxyma.io/?utm_source=DOLPHIN</p><p>Наличие
                http в начале ссылки ВАШЕГО сайта не влияет на процесс. В любом случае, попробуйте самостоятельно
                перейти по ссылки на наш сайт когда вставите нас в блок партнеров, если наш сайт открывается, значит все
                работает корректно.</p>
            </div>
        </Container>
    </section>
}

export default PasteLink