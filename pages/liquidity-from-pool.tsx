import styles from "../styles/Home.module.scss";
import React, { useEffect } from "react";
import type { NextPage } from "next";
import { connect } from "react-redux";
import useToggleAlert from "../hooks/useToggleAlert";
import AmountInput from "../components/AmountInput";
import BaseButton from "../components/BaseButton";
import BaseDialog from "../components/BaseDialog";
import SelectCurrency from "../components/SelectCurrency";
import { Fragment } from "react";
import store from '../redux/store';
import { clearSelected } from '../redux/actions/selectedActions';

const LiquidityFromPool: NextPage = (props: {
  clearSelected: Function
}) => {
  useEffect(() => {
    store.dispatch(clearSelected());
  }, [])
  const [isOpened, setIsOpened] = useToggleAlert(false);

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
