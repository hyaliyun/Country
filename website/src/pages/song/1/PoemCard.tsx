import React from 'react';
import styles from './PoemCard.module.css';


interface City {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
}

interface State {
  id: number;
  name: string;
  state_code: string;
  latitude: string;
  longitude: string;
  cities: City[];
}

interface Timezone {
  zoneName: string;
  gmtOffset: number;
  gmtOffsetName: string;
  abbreviation: string;
  tzName: string;
}

interface Poem {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: string;
  phone_code: string;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  tld: string;
  native: string;
  region: string;
  region_id: number;
  subregion: string;
  subregion_id: number;
  nationality: string;
  timezones: Timezone[];
  translations: { [key: string]: string };
  latitude: string;
  longitude: string;
  emoji: string;
  emojiU: string;
  states: State[];
}

// CityDisplay component
const CityDisplay: React.FC<{ city: City }> = ({ city }) => (
  <li>
    {city.name} (Lat: {city.latitude}, Long: {city.longitude})
  </li>
);

// StateDisplay component
const StateDisplay: React.FC<{ state: State }> = ({ state }) => (
  <div style={{ marginBottom: '15px' }}>
    <h4>{state.name} (Code: {state.state_code})</h4>
    <p>Coordinates: Latitude {state.latitude}, Longitude {state.longitude}</p>
    <h5>Cities:</h5>
    <ul>
      {state.cities.map(city => (
        <CityDisplay key={city.id} city={city} />
      ))}
    </ul>
  </div>
);

// TimezoneDisplay component
const TimezoneDisplay: React.FC<{ timezone: Timezone }> = ({ timezone }) => (
  <li>
    {timezone.zoneName} - {timezone.tzName} (GMT Offset: {timezone.gmtOffsetName}, Abbreviation: {timezone.abbreviation})
  </li>
);

const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => {
  const chineseName = poem.translations['zh-CN'] || poem.name; // 如果没有zh-CN，则回退到默认名称
  return (
    <div className={styles.card}>
    <h2>{poem.name} {poem.emoji} {chineseName}</h2>
    <p><strong>Capital:</strong> {poem.capital}</p>
    <p><strong>Currency:</strong> {poem.currency_name} ({poem.currency_symbol})</p>
    <p><strong>Phone Code:</strong> +{poem.phone_code}</p>
    <p><strong>Top-level domain:</strong> {poem.tld}</p>
    <p><strong>Native Name:</strong> {poem.native}</p>
    <p><strong>Region:</strong> {poem.region}, Subregion: {poem.subregion}</p>
    <p><strong>Coordinates:</strong> Latitude {poem.latitude}, Longitude {poem.longitude}</p>
    
    <h3>Translations:</h3>
    <ul>
      {Object.entries(poem.translations).map(([lang, translation], index) => (
        <li key={index}><strong>{lang}:</strong> {translation}</li>
      ))}
    </ul>

    <h3>Time Zones:</h3>
    <ul>
      {poem.timezones.map((timezone, index) => (
        <TimezoneDisplay key={index} timezone={timezone} />
      ))}
    </ul>

    <h3>States:</h3>
    <div>
      {poem.states.map(state => (
        <StateDisplay key={state.id} state={state} />
      ))}
    </div>
 
    </div>
  );
};

export default PoemCard;

