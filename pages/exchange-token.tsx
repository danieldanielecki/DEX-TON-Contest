import store from "../redux/store";
import styles from "../styles/Home.module.scss";
import AmountInput from "../components/AmountInput";
import BaseCard from "../components/BaseCard";
import BuySellSummary from "../components/BuySellSummary";
import SelectCurrency from "../components/SelectCurrency";
import ToggleBuySellSwitch from "../components/ToggleBuySellSwitch";
import {
  clearSelected,
  setExchangeSell,
} from "../redux/actions/selectedActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import type { NextPage } from "next";

const ExchangeToken: NextPage = (props: {
  clearSelected: Function;
  setExchangeSell: Function;
}) => {
  useEffect(() => {
    store.dispatch(clearSelected());
  }, []);

  return (
    <main className={styles.main}>
      <BaseCard title="Test" subtitle="Test2" />
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
    setExchangeSell,
  };
};

const connector = connect(null, mapDispatchToProps);
export default connector(ExchangeToken);
