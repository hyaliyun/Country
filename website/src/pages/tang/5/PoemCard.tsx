import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  id: number;
  name: string;
  state_id: number;
  state_code: string;
  state_name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  latitude: string;
  longitude: string;
  wikiDataId: string;
}

const PoemCard: React.FC<{ poem: Poem }> = ({ poem }) => {

  return (
    <div className={styles.card}>
   <div style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
    <h3>{poem.name}</h3>
    <p>
      <strong>State:</strong> {poem.state_name} ({poem.state_code})<br />
      <strong>Country:</strong> {poem.country_name} ({poem.country_code})<br />
      <strong>Coordinates:</strong> Latitude {poem.latitude}, Longitude {poem.longitude}
    </p>
    <p>
      <strong>WikiData Link:</strong>{' '}
      <a href={`https://www.wikidata.org/wiki/${poem.wikiDataId}`} target="_blank" rel="noopener noreferrer">
        {poem.wikiDataId}
      </a>
    </p>
  </div>
  </div>
);
};

export default PoemCard;
