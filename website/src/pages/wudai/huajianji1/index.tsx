import React, { useState } from 'react';

import PoemCard from './PoemCard';
import poemsData from './huajianji-1-juan.json';
import styles from './PoemCard.module.css';
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
            {'Afghanistan'}
          </Translate>
        </Link>
        {'\xa0🥳'}
      </div>
    </div>
  );
}

function App() {


  return (
    <div>
      <div className={styles.cardContainer}>
        {poemsData.map((poem, index) => (
          <PoemCard key={index} poem={poem} />
        ))}
      </div>
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
