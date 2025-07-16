import { useState } from "react";

function FaqAccordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? "open" : ""}`}>
            <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <h3>{question}</h3>
                <span className="faq-icon">{isOpen ? "▴" : "▾"}</span>
            </div>

            {isOpen && (
                <div className="faq-answer">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default FaqAccordion;
