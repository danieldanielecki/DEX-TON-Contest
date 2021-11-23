import styles from "../styles/CreatePool.module.scss";
import React from "react";
import SelectCurrency from "../components/SelectCurrency";
import type { NextPage } from "next";

const CreatePool: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="d-flex align-items-center">
          <SelectCurrency isOne={false} startCurrency="btc" />
          <SelectCurrency isOne={false} startCurrency="btc" />
        </div>
        <h1 className={styles.title}>Created Pool</h1>

        <p className={styles.description}>
          Placeholder for Create Pool description.
        </p>
      </main>
    </div>
  );
};

export default CreatePool;
