import Container from "../utils/Container/Container.jsx";
import {NavLink} from "react-router-dom";


function Start() {

    return <section>
        <Container>
            <div className="start__inner">
                <h2 className="start__title">
                    Unleash the power of proxies with Proxyma
                </h2>
                <NavLink to="#"
                   className="start__button--stroke">
                    START NOW
                </NavLink>
                <NavLink to="#" className="start__button--white">
                    Contact us
                </NavLink>
            </div>
        </Container>
    </section>
}

export default Start;