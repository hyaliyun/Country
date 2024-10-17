import React, { useState } from 'react';
import styles from './styles.module.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import Features from '@site/src/data/website';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <Link to="https://www.543x.com" className={styles.topBannerLink}>
      
        <Heading as="h3" className={styles.featureHeading}>
        World Map
        </Heading>
      </Link>
    </div>
  );
}

const geoJsonData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "cca2": "aw"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-69.882233, 12.41111],
            [-69.946945, 12.436666],
            [-70.056122, 12.534443],
            [-70.059448, 12.538055],
            [-70.060287, 12.544167],
            [-70.063339, 12.621666],
            [-70.063065, 12.628611],
            [-70.058899, 12.631109],
            [-70.053345, 12.629721],
            [-70.035278, 12.61972],
            [-70.031113, 12.616943],
            [-69.932236, 12.528055],
            [-69.896957, 12.480833],
            [-69.891403, 12.472221],
            [-69.885559, 12.457777],
            [-69.873901, 12.421944],
            [-69.873337, 12.415833],
            [-69.876114, 12.411665],
            [-69.882233, 12.41111]
          ]
        ]
      }
    }
  ]
};

function MapComponent() {
  return (
    <div className={styles.mapContainer}>
      <MapContainer center={[12.5, -69.95]} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={geoJsonData} />
      </MapContainer>
    </div>
  );
}

function Feature({
	feature,
	className,
}: {
	feature: FeatureItem;
	className?: string;
}) {
	const {withBaseUrl} = useBaseUrlUtils();

	return (
		<div className={clsx('col', className, styles.featureContainer)}>
			<div className={styles.imageWrapper}>
				<img
					className={styles.featureImage}
					alt={feature.title}
					src={withBaseUrl(feature.image.src)}
					loading="lazy"
				/>
			</div>
			<Heading as="h3" className={clsx(styles.featureHeading)}>
				{feature.title}
			</Heading>
		</div>
	);
}

function FeaturesContainer() {

  const [visibleCount, setVisibleCount] = useState(20); // Start by showing 3 poems
  
  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 20); // Load 3 more poems each time
  };

	return (
		<div className="container text--center">
			<div className="row margin-top--lg margin-bottom--lg">
				{Features.slice(0, visibleCount).map((feature, idx) => (
					<Feature feature={feature} key={idx} />
				))}
			</div>
      {visibleCount < Features.length && (
        <button className={styles.loadMoreButton} onClick={loadMore}>
          See more
        </button>
      )}
		</div>
	);
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main className={styles.main}>
        <TopBanner />
        <MapComponent />
        <div className={styles.section}>
          
          <FeaturesContainer/>
        </div>
      </main>
    </Layout>
  );
}

