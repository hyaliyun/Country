import React from 'react';
import styles from './PoemCard.module.css';

interface City {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
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
  subregion: string;
  nationality: string;
  latitude: string;
  longitude: string;
  emoji: string;
  timezones: Timezone[];
  cities: City[];
}

// Component to display individual country details
const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => (

  <div className={styles.card}>
    <h2>{poem.name} ({poem.iso2}) {poem.emoji}</h2>
    <p><strong>Capital:</strong> {poem.capital}</p>
    <p><strong>Currency:</strong> {poem.currency_name} ({poem.currency_symbol})</p>
    <p><strong>Region:</strong> {poem.region} - {poem.subregion}</p>
    <p><strong>Coordinates:</strong> Latitude {poem.latitude}, Longitude {poem.longitude}</p>
    <h3>Timezones</h3>
    <ul>
      {poem.timezones.map((timezone, index) => (
        <li key={index}>
          <strong>{timezone.zoneName}</strong> - {timezone.gmtOffsetName} ({timezone.abbreviation})
        </li>
      ))}
    </ul>
    <h3>Cities</h3>
    <ul>
      {poem.cities.map(city => (
        <li key={city.id}>
          <strong>{city.name}</strong> - Latitude {city.latitude}, Longitude {city.longitude}
        </li>
      ))}
    </ul>
  </div>
);

export default PoemCard;
