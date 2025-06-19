import { useTranslation } from 'react-i18next';

export function useLangSwitcher() {
    const { i18n } = useTranslation();

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    };

    return {
        currentLang: i18n.language,
        setLang: changeLang,
        isCurrent: (lang) => i18n.language === lang
    };
}
