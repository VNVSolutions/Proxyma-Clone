import Container from "../utils/Container/Container.jsx";

function ReferalProgram () {
    return <section className="referalProgram-section">
        <Container className="referalProgram-container">
            <h2 className="title referral-program__title">
                Реферальная ссылка
            </h2>

            <div className="referral-program__desc">
                Реферальная ссылка - это специальная ссылка, которую вы можете использовать для привлечения клиентов на
                наш сайт.
            </div>

            <div className="referral-program__list">
                <div className="referral-program__item">
                    <div className="referral-program__item-number">
                        01
                    </div>
                    <div className="referral-program__item-text">
                        Отправьте в телеграм <a href="https://t.me/proxyma_io"
                                                target="_blank">https://t.me/proxyma_io</a> ваш email и ссылку на сайт
                        на котором вы хотите разместить наш сайт
                    </div>
                </div>
                <div className="referral-program__arrow">
                    <svg width="210" height="12" viewBox="0 0 210 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM213 6L203 0.226497V11.7735L213 6ZM6 7H204V5H6V7Z"
                            fill="#097BF8"></path>
                    </svg>
                </div>
                <div className="referral-program__item">
                    <div className="referral-program__item-number">
                        02
                    </div>
                    <div className="referral-program__item-text">
                        Менеджер в ответ выдаст вам url для вставки на ваш сайт
                    </div>
                </div>
                <div className="referral-program__arrow">
                    <svg width="210" height="12" viewBox="0 0 210 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM213 6L203 0.226497V11.7735L213 6ZM6 7H204V5H6V7Z"
                            fill="#097BF8"></path>
                    </svg>

                </div>
                <div className="referral-program__item">
                    <div className="referral-program__item-number">
                        03
                    </div>
                    <div className="referral-program__item-text">
                        Вы будете получать 10% от всех покупок клиентов которые он сделает
                    </div>
                </div>
            </div>

            <div className="referral-program__text">
                <p>Минимальная сумма вывода от 100 usdt (выплаты производятся только в криптовалюте)</p><p>Если у вас
                есть блог и вы хотите разместить информацию о нас напишите <a href="#"
                                                                              target="_blank">https://t.me/proxyma_io</a>
            </p><p>После добавления информации о нашем сайте к себе на сайт, пожалуйста, пришлите ссылку чтобы наш
                менеджер мог проверить это.</p><p>Информация о вашем сервисе будет предоставлена по ссылке <a
                href="partners" target="_blank">https://proxyma.io/partners</a></p>
            </div>
        </Container>
    </section>
}

export default ReferalProgram