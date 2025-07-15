import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import './GeoSelector.css';
import Container from "../utils/Container/Container.jsx";
import countriesEn from './countries.json';
import countriesRu from './countries-ru.json';

function GeoSelector() {
    const { t, i18n } = useTranslation();
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [options, setOptions] = useState([]);

    // Міняємо список країн при зміні мови
    useEffect(() => {
        const currentLang = i18n.language.startsWith("ru") ? "ru" : "en";
        const countryList = currentLang === "ru" ? countriesRu : countriesEn;

        setOptions(
            countryList.map((country) => ({
                value: country,
                label: country
            }))
        );
    }, [i18n.language]);

    return (
        <section className="geo">
            <Container>
                <h2
                    className="geo-title"
                    dangerouslySetInnerHTML={{ __html: t("geo.title") }}
                ></h2>

                <div className="geo-box">
                    <p className="geo-label">{t("geo.label")}</p>

                    <Select
                        value={selectedCountry}
                        onChange={setSelectedCountry}
                        options={options}
                        placeholder={t("geo.placeholder")}
                        className="geo-select"
                        classNamePrefix="react-select"
                        styles={{
                            control: (base, state) => ({
                                ...base,
                                borderRadius: '12px',
                                backgroundColor: '#dff3fd',
                                borderColor: '#60c1f8',
                                boxShadow: state.isFocused ? '0 0 0 2px #60c1f855' : 'none',
                                padding: '2px 4px',
                                minHeight: '48px'
                            }),
                            menu: (base) => ({
                                ...base,
                                borderRadius: '10px',
                                overflow: 'hidden',
                                zIndex: 10
                            })
                        }}
                    />
                    <button className="geo-button">{t("geo.button")}</button>
                </div>
            </Container>
        </section>
    );
}

export default GeoSelector;
