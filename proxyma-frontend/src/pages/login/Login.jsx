import Container from "../../components/utils/Container/Container.jsx";
import {NavLink} from "react-router-dom";


function Login() {

    return(<section className='auth-section'>
        <Container className={"auth-container"}>
            <div className={'form-wrapper'}>
                <h1 className="auth-title">вход в личный кабинет</h1>
                <form action="" className={"auth-form"}>

                    <div className={'input-wrapper'}>
                        <label htmlFor="mailLogin">Email</label>
                        <input placeholder="Введите ваш email" id='mailLogin' type="mail"/>
                    </div>

                    <div className={'input-wrapper'}>
                        <label htmlFor="passwordLogin">Пароль</label>
                        <input placeholder="Введите ваш пароль" id='passwordLogin' type="password"/>
                    </div>


                    <div className="forgot-title">Забыли пароль? <NavLink className="forgot-link"
                                                                          to="/forgot-password">Восстановить›</NavLink>
                    </div>

                    <button className="form-submit-btn" type={"submit"}>войти</button>


                </form>
            </div>

            <div className="wraper-auth-bottom-text"><p className="auth-bottom-text">Еще нет аккаунта?</p><p><NavLink
                className="auth-bottom-link" to="/registration">Создать новый аккаунт</NavLink></p></div>
        </Container>
    </section>)
}

export default Login