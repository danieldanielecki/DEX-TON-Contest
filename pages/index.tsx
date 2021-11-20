import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to DEX of{" "}
          <a
            href="https://ton.org"
            rel="noopener noreferrer"
            target="_blank"
            title="The Open Network"
          >
            TON
          </a>
        </h1>

        <p className={styles.description}>Placeholder for Home description.</p>
      </main>
    </div>
  );
};

export default Home;
