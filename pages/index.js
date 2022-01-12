import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code Station-21</title>
        <meta name="description" content="Created by Siam Ahnaf" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/codestation21">Code Station-21</a>
        </h1>
        <p className={styles.description}>
          We are comming soon
        </p>
        <p className={styles.description}>
          Follow us
        </p>
        <div className={styles.icons}>
          <a href="https://www.facebook.com/codestation21/" target="_blank">
            <Icon icon="carbon:logo-facebook" />
          </a>
          <a href="https://twitter.com/codestation21" target="_blank">
            <Icon icon="bytesize:twitter" />
          </a>
          <a href="https://www.linkedin.com/company/codestation21/" target="_blank">
            <Icon icon="foundation:social-linkedin" />
          </a>
          <a href="https://github.com/codestation21" target="_blank">
            <Icon icon="bx:bxl-github" />
          </a>
        </div>
      </main>
    </div>
  )
}
