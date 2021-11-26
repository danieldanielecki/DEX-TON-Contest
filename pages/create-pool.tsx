import type { NextPage } from "next";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import SelectCurrency from "../components/SelectCurrency";
import { clearSelected } from '../redux/actions/selectedActions';
import store from '../redux/store';
import styles from "../styles/CreatePool.module.scss";

const CreatePool: NextPage = (props: {
  clearSelected: Function
}) => {
  useEffect(() => {
    store.dispatch(clearSelected());
  }, [])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="d-flex align-items-center">
          <SelectCurrency
            isOne={false}
            optionVal="A"
            startCurrency="Bitcoin"
          />
          <SelectCurrency
            isOne={false}
            optionVal="B"
            startCurrency="Bitcoin"
          />
        </div>
        <h1 className={styles.title}>Created Pool</h1>

        <p className={styles.description}>
          Placeholder for Create Pool description.
        </p>
      </main>
    </div>
  );
};

const mapDispatchToProps = () => {
  return {
    clearSelected
  };
};

const connector = connect(null, mapDispatchToProps);
export default connector(CreatePool);
