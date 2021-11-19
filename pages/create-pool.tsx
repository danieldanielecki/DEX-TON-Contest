import styles from "../styles/Home.module.scss";
import useIsBuySelected from "../hooks/useIsBuySelected";
import BaseButton from "../components/BaseButton";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PerformTransaction from "../components/PerformTransaction";
import Header from "../components/Header";

import type { NextPage } from "next";

const CreatePool: NextPage = () => {
  const [isBuySelected, setIsBuySelected] = useIsBuySelected();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Pool</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      <PerformTransaction isBuy={isBuySelected} />
      <main className={styles.main}>
        <h1 className={styles.title}>Create Pool</h1>

        <p className={styles.description}>
          Placeholder for Create Pool description.
        </p>

        <BaseButton onClick={setIsBuySelected} title="Toggle" />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default CreatePool;
