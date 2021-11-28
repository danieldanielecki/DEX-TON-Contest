import styles from "../styles/Home.module.scss";
import React, { useEffect } from "react";
import type { NextPage } from "next";
import { connect } from "react-redux";
import AmountInput from "../components/AmountInput";
import BaseButton from "../components/BaseButton";
import BaseDialog from "../components/BaseDialog";
import SelectCurrency from "../components/SelectCurrency";
import store from "../redux/store";
import { clearSelected } from "../redux/actions/selectedActions";

const LiquidityFromPool: NextPage = (props: { clearSelected: Function }) => {
  useEffect(() => {
    store.dispatch(clearSelected());
  }, []);

  return (
    <div className={styles.container}>
      <BaseDialog
        subtitle="Add liquidity to receive tokens"
        summary="Prices and pool share"
        title="Title"
        AmountInputA={<AmountInput amountOf="liquidityA" />}
        AmountInputB={<AmountInput amountOf="liquidityB" />}
        BaseButton={<BaseButton title="Connect" />}
        SelectCurrencyA={
          <SelectCurrency isOne={false} optionVal="A" startCurrency="Bitcoin" />
        }
        SelectCurrencyB={
          <SelectCurrency
            isOne={false}
            optionVal="B"
            startCurrency="Ethereum"
          />
        }
      />
    </div>
  );
};
const mapDispatchToProps = () => {
  return {
    clearSelected,
  };
};

const connector = connect(null, mapDispatchToProps);
export default connector(LiquidityFromPool);
