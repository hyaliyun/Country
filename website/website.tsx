import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'abw',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/abw.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'afg',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/afg.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ago',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ago.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'aia',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/aia.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ala',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ala.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'alb',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/alb.svg',
      width: 200,
      height: 150,
    },
  },

  {
    title: translate({
      message: 'and',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/and.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'are',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/are.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'arg',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/arg.svg',
      width: 200,
      height: 150,
    },
  },

  {
    title: translate({
      message: 'arm',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/arm.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'asm',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/asm.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ata',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ata.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'atf',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/atf.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'atg',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/atg.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'aus',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/aus.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'aut',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/aut.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'aze',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/aze.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'bdi',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/bdi.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'bel',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/bel.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ben',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ben.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'bes',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/bes.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'bfa',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/bfa.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'bgd',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/bgd.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'bgr',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/bgr.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'bhr',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/bhr.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'bhs',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/bhs.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'bih',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/bih.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'blm',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/blm.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'blr',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/blr.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'blz',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/blz.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'bmu',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/bmu.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'bol',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/bol.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'bra',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/bra.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'brb',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/brb.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'brn',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/brn.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'btn',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/btn.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'bvt',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/bvt.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'bwa',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/bwa.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'caf',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/caf.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'can',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/can.svg',
      width: 200,
      height: 150,
    },
  },

  {
    title: translate({
      message: 'cck',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/cck.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'che',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/che.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'chl',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/chl.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'chn',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/chn.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'civ',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/civ.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'cmr',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/cmr.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'cod',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/cod.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'cog',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/cog.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'cok',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/cok.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'col',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/col.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'com',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/com.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'cpv',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/cpv.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'cri',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/cri.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'cub',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/cub.svg',
      width: 200,
      height: 150,
    },
  },

  {
    title: translate({
      message: 'cuw',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/cuw.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'cxr',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/cxr.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'cym',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/cym.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'cyp',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/cyp.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'cze',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/cze.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'deu',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/deu.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'dji',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/dji.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'dma',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/dma.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'dnk',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/dnk.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'dom',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/dom.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'dza',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/dza.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ecu',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ecu.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'egy',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/egy.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'eri',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/eri.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'esh',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/esh.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'esp',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/esp.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'est',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/est.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'eth',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/eth.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'fin',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/fin.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'fji',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/fji.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'flk',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/flk.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'fra',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/fra.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'fro',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/fro.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'fsm',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/fsm.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'gab',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/gab.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'gbr',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/gbr.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'geo',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/geo.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ggy',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ggy.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'gha',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/gha.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'gib',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/gib.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'gin',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/gin.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'glp',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/glp.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'gmb',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/gmb.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'gnb',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/gnb.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'gnq',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/gnq.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'grc',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/grc.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'grd',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/grd.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'grl',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/grl.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'gtm',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/gtm.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'guf',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/guf.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'gum',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/gum.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'guy',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/guy.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'hkg',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/hkg.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'hmd',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/hmd.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'hnd',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/hnd.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'hrv',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/hrv.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'hti',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/hti.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'hun',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/hun.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'idn',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/idn.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'imn',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/imn.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ind',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ind.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'iot',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/iot.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'irl',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/irl.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'irn',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/irn.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'irq',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/irq.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'isl',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/isl.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'isr',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/isr.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ita',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ita.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'jam',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/jam.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'jey',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/jey.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'jor',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/jor.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'jpn',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/jpn.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'kaz',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/kaz.svg',
      width: 200,
      height: 150,
    },
  },

  {
    title: translate({
      message: 'ken',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ken.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'kgz',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/kgz.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'khm',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/khm.svg',
      width: 200,
      height: 150,
    },
  },

  {
    title: translate({
      message: 'kir',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/kir.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'kna',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/kna.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'kor',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/kor.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'kwt',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/kwt.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'lao',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/lao.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'lbn',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/lbn.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'lbr',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/lbr.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'lby',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/lby.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'lca',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/lca.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'lie',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/lie.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'lka',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/lka.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'lso',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/lso.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ltu',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ltu.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'lux',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/lux.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'lva',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/lva.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mac',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mac.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'maf',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/maf.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mar',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mar.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mco',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mco.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mda',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mda.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mdg',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mdg.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mdv',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mdv.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mex',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mex.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mhl',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mhl.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mkd',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mkd.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mli',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mli.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mlt',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mlt.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mmr',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mmr.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mne',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mne.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mng',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mng.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mnp',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mnp.svg',
      width: 200,
      height: 150,
    },
  },

  {
    title: translate({
      message: 'moz',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/moz.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mrt',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mrt.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'msr',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/msr.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mtq',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mtq.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mus',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mus.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mwi',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mwi.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'mys',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/mys.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'myt',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/myt.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'nam',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/nam.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ncl',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ncl.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ner',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ner.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'nfk',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/nfk.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'nga',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/nga.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'nic',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/nic.svg',
      width: 200,
      height: 150,
    },
  },

  {
    title: translate({
      message: 'niu',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/niu.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'nld',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/nld.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'nor',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/nor.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'npl',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/npl.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'nru',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/nru.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'nzl',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/nzl.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'omn',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/omn.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'pak',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/pak.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'pan',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/pan.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'pcn',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/pcn.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'per',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/per.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'phl',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/phl.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'plw',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/plw.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'png',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/png.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'pol',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/pol.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'pri',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/pri.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'prk',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/prk.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'prt',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/prt.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'pry',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/pry.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'pse',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/pse.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'pyf',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/pyf.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'qat',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/qat.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'reu',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/reu.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'rou',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/rou.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'rus',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/rus.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'rwa',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/rwa.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'sau',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/sau.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'sdn',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/sdn.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'sen',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/sen.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'sgp',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/sgp.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'sgs',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/sgs.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'shn',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/shn.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'sjm',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/sjm.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'slb',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/slb.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'sle',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/sle.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'slv',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/slv.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'smr',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/smr.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'som',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/som.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'spm',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/spm.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'srb',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/srb.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ssd',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ssd.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'stp',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/stp.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'sur',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/sur.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'svk',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/svk.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'svn',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/svn.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'swe',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/swe.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'swz',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/swz.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'sxm',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/sxm.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'syc',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/syc.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'syr',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/syr.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'tcd',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/tcd.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'tca',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/tca.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'tgo',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/tgo.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'tha',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/tha.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'tjk',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/tjk.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'tkl',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/tkl.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'tkm',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/tkm.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'tls',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/tls.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ton',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ton.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'tto',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/tto.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'tun',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/tun.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'tur',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/tur.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'tuv',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/tuv.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'twn',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/twn.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'tza',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/tza.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'uga',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/uga.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ukr',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ukr.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'umi',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/umi.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'unk',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/unk.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ury',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ury.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'usa',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/usa.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'uzb',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/uzb.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'vat',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/vat.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'vct',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/vct.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'ven',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ven.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'vgb',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/vgb.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'vir',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/vir.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'vnm',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/vnm.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'vut',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/vut.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'wlf',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/wlf.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'wsm',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/wsm.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'yem',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/yem.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'zaf',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/zaf.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'zmb',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/zmb.svg',
      width: 200,
      height: 150,
    },
  },
  {
    title: translate({
      message: 'zwe',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/zwe.svg',
      width: 200,
      height: 150,
    },
  },
];

export default FEATURES;