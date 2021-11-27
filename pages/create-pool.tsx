import type { NextPage } from "next";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import SelectCurrency from "../components/SelectCurrency";
import ShowCreatedPool from "../components/ShowCreatedPool";
import { clearSelected } from '../redux/actions/selectedActions';
import store from '../redux/store';
import styles from "../styles/Home.module.scss";

const CreatePool: NextPage = (props: {
  clearSelected: Function
}) => {
  useEffect(() => {
    store.dispatch(clearSelected());
  }, [])
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Create Pool</h1>
      <p className={styles.description}>
        Placeholder for Create Pool description.
      </p>
      <div className="form-control w-50">
          <SelectCurrency
            isOne={false}
            optionVal="A"
            startCurrency="Bitcoin"
          />
          <SelectCurrency
            isOne={false}
            optionVal="B"
            startCurrency="Ethereum"
          />
          <ShowCreatedPool />
      </div>
    </main>
  );
};

const mapDispatchToProps = () => {
  return {
    clearSelected
  };
};

const connector = connect(null, mapDispatchToProps);
export default connector(CreatePool);
