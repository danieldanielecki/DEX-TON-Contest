import { useState } from "react";
import styles from "../styles/CreatePool.module.scss";
import useIsBuySelected from "../hooks/useIsBuySelected";
import BaseButton from "../components/BaseButton";
import PerformTransaction from "../components/PerformTransaction";

import type { NextPage } from "next";

const CreatePool: NextPage = () => {
  const [isBuySelected, setIsBuySelected] = useIsBuySelected(false);
  const [dropdownVisible, toggledropdownVisible] = useState(false);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.drop}>
          <ul className={`${dropdownVisible ? styles.drop_content : styles.user_link}`}>
            <li className="user-link">a</li>
            <li className="user-link">b</li>
            <li className="user-link">c</li>
            <li className="user-link">d</li>
            <li className="user-link">e</li>
          </ul>
        </div>
      </div>
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
