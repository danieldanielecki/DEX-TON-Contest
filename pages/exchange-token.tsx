import type { NextPage } from "next";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "../styles/Home.module.scss";
import SelectCurrency from "../components/SelectCurrency";
import ToggleBuySellSwitch from "../components/ToggleBuySellSwitch";
import AmountInput from "../components/AmountInput";
import BuySellSummary from "../components/BuySellSummary";
import store from '../redux/store';
import { clearSelected, setExchangeSell } from '../redux/actions/selectedActions';

const ExchangeToken: NextPage = (props: {
  clearSelected: Function;
  setExchangeSell: Function;
}) => {
  useEffect(() => {
    store.dispatch(clearSelected());
  }, [])

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Exchange Token</h1>
      <p className={styles.description}>
        Placeholder for Exchange Token description.
      </p>
      <div className="form-control w-50 p-3">
        <ToggleBuySellSwitch />
        <div className="pb-3">
          <SelectCurrency
            isOne={false}
            optionVal="A"
            startCurrency="Select..."
          />
        </div>
        <div className="flex-column pb-3">
          <label> With: </label>
          <SelectCurrency
            isOne={false}
            optionVal="B"
            startCurrency="Select..."
          />
        </div>
        <AmountInput amountOf="exchangeToken" />
      </div>
      <BuySellSummary />
    </main>
  );
};

const mapDispatchToProps = () => {
  return {
    clearSelected,
    setExchangeSell
  };
};

const connector = connect(null, mapDispatchToProps);
export default connector(ExchangeToken);
