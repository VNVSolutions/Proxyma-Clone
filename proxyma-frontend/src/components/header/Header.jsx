import Container from "../utils/Container/Container.jsx";
import logo from "../../../public/img/logo-header.svg"
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import eng from '../../../public/img/eng.svg'
import rus from '../../../public/img/rus.svg'
import {useEffect, useState} from "react";

function Header() {
    const { t, i18n } = useTranslation();

    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            setIsScrolled(scrollY > 10);
        };

        const handleClickOutside = (e) => {
            if (!e.target.closest(".submenuWrapper")) {
                setOpenSubmenu(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return<header  className={`header ${isScrolled ? 'header--scroll' : ''}`}>
        <Container className="header-container">

          <NavLink to="/"> <img width={190} src={logo} alt="logo"/></NavLink>

            <ul className="menuList">
                <li className="menuItem"><NavLink to='/buy'
                                                  className={({isActive}) => (isActive ? "active" : "")}>{t('menuLink1')}</NavLink>
                </li>
                <li
                    className="menuItem submenuWrapper"
                    onClick={() => setOpenSubmenu((prev) => !prev)}
                >
    <span className="menuLinkWithArrow">
      {t('menuLink2')} ▾
    </span>

                    {openSubmenu && (
                        <ul className="submenu">
                            <li className="submenuItem">
                                <NavLink to="/solutions/dynamic">{t("submenu.dynamic")}</NavLink>
                            </li>
                            <li className="submenuItem">
                                <NavLink to="/solutions/isp">{t("submenu.isp")}</NavLink>
                            </li>
                            <li className="submenuItem">
                                <NavLink to="/solutions/data-parsing">{t("submenu.dataParsing")}</NavLink>
                            </li>
                            <li className="submenuItem">
                                <NavLink to="/solutions/ecommerce">{t("submenu.ecommerce")}</NavLink>
                            </li>
                            <li className="submenuItem">
                                <NavLink to="/solutions/crypto">{t("submenu.crypto")}</NavLink>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="menuItem">{t('menuLink3')}</li>
                <li className="menuItem">{t('menuLink4')}</li>
                <li className="menuItem">{t('menuLink5')}</li>
            </ul>

            <div className="right-header-box">
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
                <div className="log-reg-box">
                    <NavLink className="log-reg-link log-link" to="/login">
                        <svg className="sign__icon sign__icon--in" width="18" height="18" viewBox="0 0 18 18"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_23_547)">
                                <path
                                    d="M16.7804 12.7962C16.0031 11.4531 14.8854 10.3265 13.5481 9.53847C13.0087 9.22055 12.4385 8.96169 11.848 8.76393C13.0514 7.88022 13.834 6.4557 13.834 4.85156C13.834 2.17639 11.6576 0 8.98246 0C6.30728 0 4.13089 2.17639 4.13089 4.85156C4.13089 6.4557 4.91367 7.88022 6.11695 8.76393C5.52643 8.96169 4.95624 9.22069 4.41681 9.53847C3.0795 10.3266 1.96178 11.4531 1.1845 12.7963C1.05829 13.0141 1.05829 13.2827 1.1845 13.5007C2.74923 16.2044 5.66816 18 8.98246 18C12.2962 18 15.2154 16.205 16.7806 13.5007C16.9066 13.2827 16.9066 13.0141 16.7804 12.7962ZM5.53714 4.85156C5.53714 2.95175 7.08264 1.40625 8.98246 1.40625C10.8823 1.40625 12.4278 2.95175 12.4278 4.85156C12.4278 6.75137 10.8823 8.29688 8.98246 8.29688C7.08264 8.29688 5.53714 6.75137 5.53714 4.85156ZM8.98246 16.5938C6.41165 16.5938 4.02694 15.302 2.61849 13.1484C3.25885 12.1693 4.12059 11.3453 5.13079 10.75C6.29314 10.0651 7.62496 9.70312 8.98246 9.70312C10.34 9.70312 11.6718 10.0651 12.8341 10.75C13.8443 11.3453 14.7062 12.1694 15.3466 13.1484C13.9399 15.2993 11.5563 16.5938 8.98246 16.5938Z"
                                    fill="#FE3059"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_23_547">
                                    <rect width="18" height="18" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>{t('header.logIn')}</span>
                    </NavLink>
                    <NavLink className='log-reg-link reg-link' to="/registration">
                        <svg className="sign__icon sign__icon--up" width="20px" height="20px" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.46727453,0 C12.6508009,0 15.2315589,2.56640935 15.2315589,5.73223573 C15.2315589,7.47655509 14.448084,9.03890148 13.2119914,10.0902571 C13.4822032,10.2238219 13.7275682,10.3582958 13.9497532,10.4930662 C14.4279751,10.7831407 14.9241978,11.1427602 15.4394636,11.5717392 C15.732385,11.8156078 15.7710449,12.2494418 15.5258128,12.5407346 C15.2805808,12.8320274 14.8443213,12.8704723 14.5513999,12.6266038 C14.0866111,12.2396488 13.6455819,11.9200289 13.2293546,11.6675584 C12.8528749,11.4391975 12.384017,11.2042359 11.8239965,10.9643237 C11.1032931,11.2862459 10.3062136,11.4644715 9.46727453,11.4644715 C8.53944258,11.4644715 7.66281089,11.2464759 6.88634681,10.8591798 L6.84481353,10.878634 L6.84481353,10.878634 C4.89437187,11.634739 3.4715441,12.752929 2.55274945,14.2369477 C1.63088171,15.7259301 1.25429819,17.3895789 1.42222738,19.2506112 C1.45637018,19.6289901 1.17559676,19.9632511 0.795102385,19.9972041 C0.414608014,20.031157 0.078478173,19.7519447 0.0443353722,19.3735658 C-0.149844712,17.2216146 0.29386687,15.2614114 1.37469861,13.5156736 C2.32539098,11.9801342 3.72215476,10.7855333 5.54907869,9.93439694 C4.41355013,8.88953631 3.70299014,7.39340475 3.70299014,5.73223573 C3.70299014,2.56640935 6.28374817,0 9.46727453,0 Z M16.868159,12.6926826 C17.2480582,12.6926826 17.5560273,13.0023735 17.5560273,13.3843967 L17.556,15.136 L19.3082859,15.1366553 C19.690309,15.1366553 20,15.4446244 20,15.8245236 C20,16.2044227 19.690309,16.5123919 19.3082859,16.5123919 L17.556,16.512 L17.5560273,18.2646504 C17.5560273,18.6466736 17.2480582,18.9563646 16.868159,18.9563646 C16.4882598,18.9563646 16.1802907,18.6466736 16.1802907,18.2646504 L16.18,16.512 L14.4280321,16.5123919 C14.046009,16.5123919 13.736318,16.2044227 13.736318,15.8245236 C13.736318,15.4446244 14.046009,15.1366553 14.4280321,15.1366553 L16.18,15.136 L16.1802907,13.3843967 C16.1802907,13.0023735 16.4882598,12.6926826 16.868159,12.6926826 Z M9.46727453,1.37573658 C7.04779449,1.37573658 5.08641839,3.32620768 5.08641839,5.73223573 C5.08641839,8.13826378 7.04779449,10.0887349 9.46727453,10.0887349 C11.8867546,10.0887349 13.8481307,8.13826378 13.8481307,5.73223573 C13.8481307,3.32620768 11.8867546,1.37573658 9.46727453,1.37573658 Z"></path>
                        </svg>
                        <span>{t('header.signUp')}</span>
                    </NavLink>
                </div>
            </div>

        </Container>
    </header>
}

export default Header;