import type { NextPage } from "next";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "../styles/Home.module.scss";
import SelectCurrency from "../components/SelectCurrency";
import ToggleBuySell from "../components/ToggleBuySell";
import AmountInput from "../components/AmountInput";
import BuySellSummary from "../components/BuySellSummary";
import store from '../redux/store';
import { clearSelected } from '../redux/actions/selectedActions';

const ExchangeToken: NextPage = (props: {
  clearSelected: Function
}) => {
  useEffect(() => {
    store.dispatch(clearSelected());
  }, [])
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Exchange Token</h1>
        <p className={styles.description}>
          Placeholder for Exchange Token description.
        </p>
        <div className="form-control w-50">
          <div>
            <ToggleBuySell />
            <SelectCurrency
              isOne={false}
              optionVal="A"
              startCurrency="Bitcoin"
            />
            <AmountInput />
          </div>
          <div className="flex-column">
            <label> With: </label>
            <SelectCurrency
              isOne={false}
              optionVal="B"
              startCurrency="Ethereum"
            />
          </div>
        </div>
        <BuySellSummary />
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
export default connector(ExchangeToken);
