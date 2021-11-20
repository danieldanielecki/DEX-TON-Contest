import styles from "../styles/CreatePool.module.scss";
import useIsBuySelected from "../hooks/useIsBuySelected";
import BaseButton from "../components/BaseButton";
import PerformTransaction from "../components/PerformTransaction";


import type { NextPage } from "next";

const CreatePool: NextPage = () => {
  const [isBuySelected, setIsBuySelected] = useIsBuySelected(false);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="d-flex align-items-center">
          <PerformTransaction />
          <PerformTransaction />
        </div>
        <h1 className={styles.title}>Created Pool</h1>
        
        <p className={styles.description}>
          Placeholder for Create Pool description.
        </p>
        {/* <BaseButton onClick={setIsBuySelected} title="Toggle" /> */}
      </main>
    </div>
  );
};

export default CreatePool;
