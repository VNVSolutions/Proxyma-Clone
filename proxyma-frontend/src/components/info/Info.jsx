import Container from "../utils/Container/Container.jsx";


function Info () {

    return <section className="info">
        <Container>
            <div className="info__top-text">
                &nbsp;Чтобы стать нашим партнером и обменяться ссылками, пожалуйста, возьмите все материалы на этой
                странице, разместите информацию о нас на своем сайте и пришлите ссылку нашем менеджера (контакты
                менеджера вы найдете внизу страницы)
            </div>
            <div className="info__image">
                <img src="https://proxyma.io/images/pages/layout/partners-info/info.png" alt="proxyma logo"/>
            </div>
            <div className="info__bottom-text">
                Уважаемые будущие партнеры, на этой странице вы найдете все необходимые материалы для публикации
                информации о нашем магазине в разделе Партнеры на вашем сайте.
            </div>
        </Container>
    </section>
}


export default Info;