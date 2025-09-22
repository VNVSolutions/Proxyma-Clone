import Container from "../../components/utils/Container/Container.jsx";
import {NavLink} from "react-router-dom";


function ForgotPassword() {
    return(<section className={'auth-section'}>
        <Container className={'auth-container'}>
            <div className={'form-wrapper'}>
                <h1 className="auth-title">Восстановить пароль</h1>
                <form action="" className={"auth-form"}>

                    <div className={'input-wrapper'}>
                        <label htmlFor="mailForgit">Email</label>
                        <input placeholder="Введите ваш email" id='mailForgit' type="mail"/>
                    </div>
                    <button className="form-submit-btn" type={"submit"}>Восстановить пароль</button>
                </form>
            </div>

            <div className="wraper-auth-bottom-text"><p className="auth-bottom-text">Еще нет аккаунта?</p><p><NavLink
                className="auth-bottom-link" to="/registration">Создать новый аккаунт</NavLink></p></div>
        </Container>
    </section>)
}

export default ForgotPassword