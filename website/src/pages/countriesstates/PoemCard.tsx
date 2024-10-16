import React from 'react';
import styles from './PoemCard.module.css';

interface Translations {
  ko: string;
  'pt-BR': string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  'zh-CN': string; // 简体中文翻译
  tr: string;
  ru: string;
  uk: string;
  pl: string;
}

type Poem = {
  name: string;
  iso3: string;
  capital: string;
  region: string;
  subregion: string;
  currency: string;
  currency_symbol: string;
  phone_code: string;
  translations: Translations; // 翻译对象
  emoji: string;
  timezones: {
    zoneName: string;
    gmtOffsetName: string;
    abbreviation: string;
  }[];
  states: {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
  }[];
};

const PoemCard: React.FC<{  poem: Poem }> = ({ poem}) => {

  const chineseName = poem.translations['zh-CN'] || poem.name; // 如果没有zh-CN，则回退到默认名称
  return (
    <div className={styles.card}>
   
        <div key={poem.iso3} >
          <h2>
            {poem.emoji} {poem.name} {chineseName}
          </h2>
          <p>Capital: {poem.capital}</p>
          <p>Region: {poem.region} - {poem.subregion}</p>
          <p>Currency: {poem.currency} ({poem.currency_symbol})</p>
          <p>Phone Code: +{poem.phone_code}</p>
          <p>Timezone: {poem.timezones[0].gmtOffsetName} ({poem.timezones[0].abbreviation})</p>
          <h3>States:</h3>
          <ul>
            {poem.states.map((state) => (
              <li key={state.id}>{state.name} (Lat: {state.latitude}, Lon: {state.longitude})</li>
            ))}
          </ul>
        </div>

    </div>
  );
};


export default PoemCard;


