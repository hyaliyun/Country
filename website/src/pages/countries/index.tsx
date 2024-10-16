import React, { useState } from 'react';

import CountryCard from './CountryCard';
import data from './xiehouyu.json';
import styles from './CountryCard.module.css';
import Layout from '@theme/Layout';

import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function TopBanner() {
  const announcedVersion = useDocusaurusContext().siteConfig.customFields
    ?.announcedVersion as string;

  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        {'🎉\xa0'}
        <Link
          to="https://www.543x.com"
          className={styles.topBannerTitleText}>
          <Translate
            id="homepage.banner.launch.newVersion"
            values={{ newVersion: announcedVersion }}>
            {'countries'}
          </Translate>
        </Link>
        {'\xa0🥳'}
      </div>
    </div>
  );
}

function App() {
    const [visibleCount, setVisibleCount] = useState(80); // Start by showing 3 poems
  
    const loadMore = () => {
      setVisibleCount(prevCount => prevCount + 40); // Load 3 more poems each time
    };

  return (
    <div>
      <div className={styles.cardContainer}>
      {data.slice(0, visibleCount).map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}

      </div>
      
      {visibleCount < data.length && (
        <button className={styles.loadMoreButton} onClick={loadMore}>
          See more
        </button>
      )}
    </div>
  );
};

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <TopBanner />
        <div className={styles.section}>
          <App />
        </div>
      </main>
    </Layout>
  );
}
