import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({
      message: 'Wiki in EN/CN',
      id: 'homepage.features.Wiki-in-EN/CN.title',
    }),
    Svg: require('@site/static/img/index_document.svg').default,
    description: (
      <Translate id="homepage.features.Wiki-in-EN/CN.description">
        For mainland users, the official Wiki has been translated and organized. 
        You can read the Wiki smoothly without setting up a network.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Tutorial from Raiden INST',
      id: 'homepage.features.Tutorial-from-Raiden-INST.title',
    }),
    Svg: require('@site/static/img/index_tutorial.svg').default,
    description: (
      <Translate id="homepage.features.Tutorial-from-Raiden-INST.description">
        Voxels tutorial from Raiden INST. This tutorial takes you through a 
        quick start with Voxels, building your own metaverse space.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Latest Blog',
      id: 'homepage.features.Latest-Blog.title',
    }),
    Svg: require('@site/static/img/index_blog.svg').default,
    description: (
      <Translate id="homepage.features.Latest-Blog.description">
        The latest blog sharing. The blog sharing comes from the latest 
        Voxels trends and excellent metaverse space projects at Raiden INST.
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
