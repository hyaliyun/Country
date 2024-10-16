/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ThemeImage from '../components/ThemeImage';

import FoxFact from './FoxFact';
import styles from './styles.module.css';

function Platforms() {
  return (
    <Section>
      <div className={styles.foxFactContainer}>
        <FoxFact className={styles.fox} />
        <p>
          <strong>Country State City API</strong>{' '}
          🌍 World countries, states, regions, provinces, cities, and towns in JSON, SQL, PSQL, SQLITE, XML, YAML, and CSV. All Countries, States, Cities with ISO2, ISO3, Country Code, Phone Code, Capital, Native Language, Time zones, Latitude, Longitude, Region, Subregion, Flag Emoji, and Currency.
        </p>
      </div>
    </Section>
  );
}

export default Platforms;
