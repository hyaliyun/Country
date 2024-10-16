/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
  url: string;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'Countries',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ipstack.svg',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
Get a list of countries with ISO2, ISO3, Phonecode, Capital, Currency, Flag etc.
      </Translate>
    ),
    url: 'https://www.96oo.com',
  },
  {
    title: translate({
      message: 'States',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/zenserp.svg',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
Get a list of states with ISO2 code and attached to its belonging country code.
      </Translate>
    ),
    url: 'https://www.82oo.com',
  },
  {
    title: translate({
      message: 'Cities',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/fixer.svg',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
Get a list of cities attached with state and country code, longitude and latitude information.
      </Translate>
    ),
    url: 'https://www.81oo.com',
  },
  {
    title: translate({
      message: 'Countries List',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/aviationstack.svg',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
Get a list of countries including ISO2, ISO3, Phonecode, Capital, Currency, and Flag details.
      </Translate>
    ),
    url: 'https://www.474x.com',
  },
  {
    title: translate({
      message: 'States List',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/number.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
Retrieve a comprehensive list of states with their stateCode and the country code they belong to.
      </Translate>
    ),
    url: 'https://www.64ii.com',
  },
];

export default FEATURES;
