import styles from "../styles/Home.module.scss";
import React, { useEffect } from "react";
import type { NextPage } from "next";
import { connect } from "react-redux";
import useToggleAlert from "../hooks/useToggleAlert";
import AmountInput from "../components/AmountInput";
import BaseButton from "../components/BaseButton";
import BaseDialog from "../components/BaseDialog";
import BaseIcon from "../components/BaseIcon";
import SelectCurrency from "../components/SelectCurrency";
import { useState, ChangeEvent, Fragment } from "react";
import { CURRENCIES } from "../config/data/currency-exchanges/dummy-exchanges";
import store from '../redux/store';
import { clearSelected } from '../redux/actions/selectedActions';

const LiquidityFromPool: NextPage = (props: {
  clearSelected: Function
}) => {
  useEffect(() => {
    store.dispatch(clearSelected());
  }, [])
  const tether = CURRENCIES.currencies[5];
  const [currencies, setCurrencies] = useState(CURRENCIES.currencies);
  const [currencyA, setCurrencyA] = useState(CURRENCIES.currencies[0]);
  const [currencyB, setCurrencyB] = useState(tether);
  const [currencyAval, setCurrencyAval] = useState(
    CURRENCIES.currencies[0].sellRate
  );
  const [currencyBval, setCurrencyBval] = useState(tether.sellRate);
  const [isOpened, setIsOpened] = useToggleAlert(false);

  function onSelectCurrency(code: string) {
    const currency = currencies.filter(
      (currency: any) => currency.code === code
    );
    setCurrencyA(currency[0]);
    setCurrencyAval(currencyBval * currencyA.sellRate);
  }

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>, currency: string) {
    if (currency === "A") {
      const newValueA: any | number = e.target.value; // Should be just number, dunno why TypeScript complains.
      setCurrencyAval(newValueA);
      setCurrencyBval(newValueA / currencyA.sellRate);
    } else if (currency === "B") {
      const newValueB: any | number = e.target.value; // Should be just number, dunno why TypeScript complains.
      setCurrencyAval(newValueB * currencyA.sellRate);
      setCurrencyBval(newValueB);
    }
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Exchange Token</h1>
        <p className={styles.description}>
          Placeholder for Exchange Token description.
        </p>
        <Fragment>
          <button onClick={setIsOpened}>Open FLOW</button>

          {isOpened && (
            <BaseDialog
              onOpenDialog={isOpened}
              subtitle="Add liquidity to receive tokens"
              summary="Prices and pool share"
              title="Title"
              AmountInputA={<AmountInput amountOf="liquidityA" />}
              AmountInputB={<AmountInput amountOf="liquidityB" />}
              BaseButton={<BaseButton title="Connect" />}
              SelectCurrencyA={
                <SelectCurrency
                  isOne={false}
                  optionVal="A"
                  startCurrency="Bitcoin"
                />
              }
              SelectCurrencyB={
                <SelectCurrency
                  isOne={false}
                  optionVal="B"
                  startCurrency="Ethereum"
                />
              }
            />
          )}
        </Fragment>
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
export default connector(LiquidityFromPool);
