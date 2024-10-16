import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  id: number;
  name: string;
  translations: {
    [key: string]: string;
  };
  wikiDataId: string;
}

const PoemCard: React.FC<{  poem: Poem }> = ({ poem}) => {
  return (
    <div className={styles.card}>
    <div style={{ border: '1px solid #ccc', margin: '5px', padding: '5px' }}>
      <h2>{poem.name}</h2>
      <ul>
        {Object.entries(poem.translations).map(([lang, translation], index) => (
          <li key={index}>
            <strong>{lang}:</strong> {translation}
          </li>
        ))}
      </ul>
      <a href={`https://www.wikidata.org/wiki/${poem.wikiDataId}`} target="_blank" rel="noopener noreferrer">
        More about {poem.name} on WikiData
      </a>
    </div>
    </div>
  );
};


export default PoemCard;


