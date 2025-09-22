import Container from "../../components/utils/Container/Container.jsx";
import {NavLink} from "react-router-dom";


function Registration() {

    return(<section className='auth-section'>
        <Container className={"auth-container"}>
            <div className={'form-wrapper'}>
                <h1 className="auth-title">регистрация</h1>
                <form action="" className={"auth-form"}>

                    <div className={'input-wrapper'}>
                        <label htmlFor="nicknameRegistration">Никнейм</label>
                        <input placeholder="Никнейм" id='nicknameRegistration' type="text"/>
                    </div>

                    <div className={'input-wrapper'}>
                        <label htmlFor="mailRegistration">Email</label>
                        <input placeholder="Введите ваш email" id='mailRegistration' type="mail"/>
                    </div>

                    <div className={'input-wrapper'}>
                        <label htmlFor="passwordregistration">Пароль</label>
                        <input className='password-registration-input' placeholder="Введите ваш пароль"
                               id='passwordregistration' type="password"/>
                        <input placeholder="Подтвердите ваш пароль" id='passwordregistration' type="password"/>
                    </div>

                    <div className={'input-wrapper'}>
                        <label htmlFor="tgNickNameRegistration">Telegram</label>
                        <input placeholder="@....." id='tgNickNameRegistration' type="text"/>
                    </div>

                    <button className="form-submit-btn" type={"submit"}>Создать аккаунт</button>

                    <label className="terms-label">
                        <div>
                            <div className="_wrapper_1gepk_1"><input type="checkbox" name="terms_checkbox"
                                                                     className="_checkbox_1gepk_5"/><span
                                className=" _checkmark_1gepk_10"></span></div>
                        </div>
                        <span>Я подтверждаю <a href="https://proxyma.io/terms-of-use" target="_blank"
                                               className="_terms-link_5geoh_20">условия использования</a> сервиса Proxyma</span></label>

                </form>
            </div>

            <div className="wraper-auth-bottom-text"><p className="auth-bottom-text">Уже есть аккаунт?</p><p><NavLink
                className="auth-bottom-link" to="/login">Войти в существующий аккаунт?</NavLink></p></div>
        </Container>
    </section>)
}

export default Registration