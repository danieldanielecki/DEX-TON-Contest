import styles from "../styles/Home.module.scss";
import useIsBuySelected from "../hooks/useIsBuySelected";
import BaseButton from "../components/BaseButton";

import PerformTransaction from "../components/PerformTransaction";

import type { NextPage } from "next";

const CreatePool: NextPage = () => {
  const [isBuySelected, setIsBuySelected] = useIsBuySelected(false);

  return (
    <div className={styles.container}>
      <PerformTransaction isBuy={isBuySelected} />

      <main className={styles.main}>
        <PerformTransaction isBuy={isBuySelected} />
        <h1 className={styles.title}>Create Pool</h1>

        <p className={styles.description}>
          Placeholder for Create Pool description.
        </p>

        <BaseButton onClick={setIsBuySelected} title="Toggle" />
      </main>
    </div>
  );
};

export default CreatePool;
