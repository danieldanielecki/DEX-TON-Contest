import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "../styles/Home.module.scss";
import SelectCurrency from "../components/SelectCurrency";
import ToggleBuySell from "../components/ToggleBuySell";
import ToggleOnOffSwitch from "../components/ToggleOnOffSwitch";
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
  const [exchangeMethod, setExchangeMethod] = useState(false);

  const handleExchangeMethod = (e) => {
    console.log(e);
    
    // store.getState().selected.method
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Exchange Token</h1>
      <p className={styles.description}>
        Placeholder for Exchange Token description.
      </p>
      <div className="form-control w-50">
        <div>
          <ToggleBuySell />
          {/* <ToggleOnOffSwitch 
          checked={exchangeMethod}
          id="transaction-method"
          onChange={(e) => handleExchangeMethod(e)}
          optionLabels={['Buy', 'Sell']}
          title={"Select exchange direction"} /> */}
          <SelectCurrency
            isOne={false}
            optionVal="A"
            startCurrency="Bitcoin"
          />
          <AmountInput amountOf="exchangeToken"/>
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
