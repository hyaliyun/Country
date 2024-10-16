
import React from 'react';
import styles from './CountryCard.module.css';

interface TimeZone {
  zoneName: string;
  gmtOffset: number;
  gmtOffsetName: string;
  abbreviation: string;
  tzName: string;
}

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

interface Country {
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
  region_id: string;
  subregion: string;
  subregion_id: string;
  nationality: string;
  timezones: TimeZone[];
  translations: Translations; // 翻译对象
  latitude: string;
  longitude: string;
  emoji: string;
}

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  // 从country.translations中获取汉语的翻译
  const chineseName = country.translations['zh-CN'] || country.name; // 如果没有zh-CN，则回退到默认名称

  return (
    <div className={styles.card} style={{ border: '1px solid #ccc', margin: '5px', padding: '5px' }}>
      <h2>{country.name} {country.emoji} {chineseName}</h2>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Currency:</strong> {country.currency_name} ({country.currency_symbol})</p>
      <p><strong>Phone Code:</strong> +{country.phone_code}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Timezone:</strong> {country.timezones[0].tzName} ({country.timezones[0].gmtOffsetName})</p>
      <p><strong>Native Name:</strong> {country.native}</p>
      <p><strong>Latitude:</strong> {country.latitude}</p>
      <p><strong>Longitude:</strong> {country.longitude}</p>
    </div>
  );
};

export default CountryCard;
