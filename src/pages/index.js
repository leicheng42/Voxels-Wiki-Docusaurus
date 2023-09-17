import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate id="siteConfig.title">Voxels Wiki</Translate></h1>
        <p className="hero__subtitle"><Translate id="siteConfig.tagline">Voxels Wiki From Raiden INST</Translate></p>
        <div className={styles.buttomContainer}>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/home">
              <Translate>📚 Wiki in EN/CN</Translate>
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/tutorial/RaidenINST">
              <Translate>👨‍🏫 Tutorial from Raiden INST</Translate>
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/blog">
              <Translate>📝 Latest Blog</Translate>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
