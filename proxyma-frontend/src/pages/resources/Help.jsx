import Container from "../../components/utils/Container/Container.jsx";
import FaqAccordion from "../../components/utils/faqAccordion/FaqAccordion.jsx";
import Feedbacks from "../../components/feedbacks/Feedbacks.jsx";
import Start from "../../components/start/Start.jsx";

function Help(){
    return <main>
        <section className="faq">
            <Container>
                <div className="breads-wrapper">
                    <div className="breads" itemScope="" itemType="https://schema.org/BreadcrumbList">
                        <div itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                            <a href="https://proxyma.io/en" className="breads-item" itemProp="item">
                                <span itemProp="name">Proxyma</span>
                                <meta itemProp="position" content="1"/>
                            </a>
                        </div>
                        <div className="breads-sep">›</div>
                        <div itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                        <span className="breads-item active" itemProp="item">
                            <span itemProp="name">Help&nbsp;center</span>
                            <meta itemProp="position" content="2"/>
                        </span>
                        </div>
                    </div>
                </div>

                <h2 className="faq__title">FAQ</h2>
                <div className="faq__subtitle">
                    Everything you need to know about product and billing
                </div>

                <div className="faq-list-acording">
                    <FaqAccordion
                        question="How to get started with the Proxyma?"
                        answer={
                            <div>
                                <p>To get started with the Proxyma platform, you need to take the following steps:</p>
                                <ol>
                                    <li>Register on proxyma.io or sign in with your Google account.</li>
                                    <li>Refill your balance in the "Balance" section.</li>
                                    <li>Go to the "Buy Proxy" section and select a suitable tariff plan.</li>
                                    <li>...</li>
                                </ol>
                            </div>
                        }
                    />

                    <FaqAccordion
                        question="How to top-up the balance?"
                        answer={<p>You can top up your balance in your personal cabinet via card or crypto.</p>}
                    />
                    <FaqAccordion
                        question="How to get started with the Proxyma?"
                        answer={
                            <div>
                                <p>To get started with the Proxyma platform, you need to take the following steps:</p>
                                <ol>
                                    <li>Register on proxyma.io or sign in with your Google account.</li>
                                    <li>Refill your balance in the "Balance" section.</li>
                                    <li>Go to the "Buy Proxy" section and select a suitable tariff plan.</li>
                                    <li>...</li>
                                </ol>
                            </div>
                        }
                    />

                    <FaqAccordion
                        question="How to top-up the balance?"
                        answer={<p>You can top up your balance in your personal cabinet via card or crypto.</p>}
                    />
                </div>
            </Container>
        </section>
        <Feedbacks/>
        <Start/>
    </main>
}

export default Help