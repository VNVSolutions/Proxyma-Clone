import { useState } from 'react';
import Select from 'react-select';
import './GeoSelector.css';
import countries from './countries.json';
import Container from "../utils/Container/Container.jsx"; // Масив країн

const options = countries.map(country => ({
    value: country,
    label: country
}));

function GeoSelector() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    return (
        <section className="geo">
            <Container>
                <h2 className="geo-title">
                    One step to your stable surfing for <span className="price">$2.5</span>
                </h2>

                <div className="geo-box">
                    <p className="geo-label">Choose from one of 190 countries around the world.</p>

                    <Select
                        value={selectedCountry}
                        onChange={setSelectedCountry}
                        options={options}
                        placeholder="Choose GEO"
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
                    <button className="geo-button">Try Proxyma</button>
                </div>


            </Container>
        </section>
    );
}

export default GeoSelector;