import Container from "../../components/utils/Container/Container.jsx";

function NotFound() {

    return<section>
        <Container>
            <div className="notFound">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you are looking for doesn’t exist.</p>
            </div>
        </Container>
    </section>
}

export default NotFound;