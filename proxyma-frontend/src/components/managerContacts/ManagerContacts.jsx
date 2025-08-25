import Container from "../utils/Container/Container.jsx";

function ManagerContacts() {

    return <section className="managerContacts-section">
        <Container>
                <h2 className="title managerContacts__title">
                    Контакты менеджеров
                </h2>
                <div className="managerContacts__buttons">
                    <a href="#" target="_blank"
                       className="managerContacts__button button-accent btn-reset">
                        @test (Telegram)
                    </a>
                    <a href="mailto:test@gmai.com" className="managerContacts__button button-accent btn-reset">
                        test@gmai.com (email)
                    </a>
                </div>
     </Container>
    </section>
}

export default ManagerContacts;