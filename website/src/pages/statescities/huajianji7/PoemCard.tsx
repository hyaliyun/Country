import React from 'react';
import styles from './PoemCard.module.css';

interface City {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
}

interface Poem {
  id: number;
  name: string;
  state_code: string;
  latitude: string;
  longitude: string;
  country_id: number;
  cities: City[];
}

// StateDisplay component to display individual state details

const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => (

  <div className={styles.card}>

    <h2>{poem.name} ({poem.state_code})</h2>
    <p>
      <strong>Coordinates:</strong> Latitude {poem.latitude}, Longitude {poem.longitude}
    </p>
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
