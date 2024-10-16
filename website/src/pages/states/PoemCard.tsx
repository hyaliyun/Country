import React from 'react';
import styles from './PoemCard.module.css';

type Poem = {
  name: string;
  country_code: string;
  country_name: string;
  type: null;
  state_code: string;
  longitude: string;
  latitude: string;
};

const PoemCard: React.FC<{  poem: Poem }> = ({ poem}) => {

  return (
    <div className={styles.card}>
   
        <div key={poem.country_code} >
          <h2>
           {poem.name} {poem.state_code} 
          </h2>
          <p>country_name: {poem.country_name} {poem.country_code}</p>
          <p>latitude:{poem.latitude}</p>
          <p>longitude:{poem.longitude}</p>

        </div>

    </div>
  );
};


export default PoemCard;


