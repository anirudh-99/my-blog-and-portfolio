import React from 'react'
import Layout from '../components/Layout/Layout'
import Socials from '../components/Socials/Socials';
import * as styles from '../pageStyles/about-me.module.scss';

export default function aboutMe() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.innerWrapper}>
          <h1>Hi, this is Anirudh</h1>
          <h3>I am a software engineer currently working at DBS bank.</h3>
          <Socials/>
        </div>
      </div>
    </Layout>
  )
}

