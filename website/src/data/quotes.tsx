/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export const QUOTES = [
  {
    thumbnail: require('./quotes/marketstack.png'),
    name: 'Countries',
    title: translate({
      id: 'homepage.quotes.christopher-chedeau.title',
      message: 'Get all Countries',
      description: '',
    }),
    text: (
      <Translate
        id="homepage.quotes.christopher-chedeau"
        description="Quote of Christopher Chedeau on the home page">

Get country according to ISO2 code
      </Translate>
    ),
    url: 'https://www.543x.com/',
  },
  {
    thumbnail: require('./quotes/positionstack.png'),
    name: 'States',
    title: translate({
      id: 'homepage.quotes.hector-ramos.title',
      message: 'Get all states of a specific country',
      description: '',
    }),
    text: (
      <Translate
        id="homepage.quotes.hector-ramos"
        description="Quote of Hector Ramos on the home page">
Get all cities of a specific country and state
      </Translate>
    ),
    url: 'https://www.252x.com/',
  },
  {
    thumbnail: require('./quotes/baidu.png'),
    name: 'Cities',
    title: translate({
      id: 'homepage.quotes.risky-vetter.title',
      message: 'Get all cities of a specific country',
      description: 'Tax Data API',
    }),
    text: (
      <Translate
        id="homepage.quotes.risky-vetter"
        description="Quote of Ricky Vetter on the home page">
Get all cities of a specific country and state
      </Translate>
    ),
    url: 'https://www.494x.com',
  },
];

export default QUOTES;
