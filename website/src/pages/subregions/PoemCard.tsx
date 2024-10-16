import React from 'react';
import styles from './PoemCard.module.css';

interface Poem {
  id: number;
  name: string;
  region_id: number;
  translations: {
    [key: string]: string;
  };
  wikiDataId: string;
}

const PoemCard: React.FC<{  poem: Poem }> = ({ poem}) => {

  const chineseName = poem.translations['zh-CN'] || poem.name;
  return (
    <div className={styles.card}>
      <h2>{poem.name}  {chineseName}</h2>
      <p>Region ID: {poem.region_id}</p>
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
  );
};


export default PoemCard;


