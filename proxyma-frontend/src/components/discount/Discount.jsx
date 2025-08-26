import Container from "../utils/Container/Container.jsx";

function Discount() {

    return<>
    <section className='discount-section'>
        <Container>
            <h2 className="discount__title">
                Промокод на скидку для ваших клиентов
            </h2>

            <div className="discount__content">
                <div className="discount__text">
                    Вы можете указать Промокод <span className="discount__text-code">partner10</span> на скидку для ваших
                    клиентов, на свое усмотрение. У нас есть универсальный купон который дает каждом клиенту 10% скидку
                    на все наши товары.
                </div>
                <div className="discount__bunner">
                    <div className="bunner__title">
                        КУПОН
                    </div>
                    <div className="discount-banner-percent">
                        -10%
                    </div>
                    <div className="discount__banner-text">
                        КУПОН
                    </div>
                </div>
            </div>
        </Container>
    </section>
    </>
}

export default Discount;