import {NavLink, Outlet, useNavigate} from "react-router-dom";
import Container from "../../utils/Container/Container.jsx";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import rus from "../../../../public/img/rus.svg";
import eng from "../../../../public/img/eng.svg";
// import logo from "../../../../public/img/logo-header.svg";
import logo from "../../../../public/img/logo-header.svg"

export default function AuthLayout() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const normalizeLang = (lang) => (lang.startsWith("ru") ? "ru" : "en");
    const [currentLang, setCurrentLang] = useState(normalizeLang(i18n.language));

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setCurrentLang(lang);
        setOpen(false);
    };

    const languages = {
        ru: { label: "Рус", flag: rus },
        en: { label: "Eng", flag: eng },
    };


    const handleBack = () => {
        // якщо є куди вертатись — йдемо назад, інакше на головну
        if (window.history.length > 1) navigate(-1);
        else navigate("/");
    };

    return (
        <div className="auth-page">
            <Container className="auth-container">
                <button className="auth-back" onClick={handleBack} aria-label="Назад">
                    ←
                </button>
                <div className="header-content">
                    <NavLink to="/"> <img width={190} src={logo} alt="logo"/></NavLink>
                    <div className='languageBox' onClick={() => setOpen(!open)}>
                        <img width={22} src={languages[currentLang].flag} alt="flag"/>
                        <span className="languageText">
              {languages[currentLang].label} <span>▾</span>
            </span>
                        {open && (
                            <div className="languageDropdown">
                                {Object.keys(languages).map((lang) => (
                                    <div
                                        key={lang}
                                        className="languageOption"
                                        onClick={() => changeLanguage(lang)}
                                    >
                                        <img width={20} src={languages[lang].flag} alt={lang}/>
                                        <span>{languages[lang].label}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <Outlet />
            </Container>
        </div>
    );
}
