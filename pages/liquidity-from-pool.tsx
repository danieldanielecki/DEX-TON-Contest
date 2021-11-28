import styles from "../styles/Home.module.scss";
import store from "../redux/store";
import AmountInput from "../components/AmountInput";
import BaseButton from "../components/BaseButton";
import BaseCard from "../components/BaseCard";
import BaseDialog from "../components/BaseDialog";
import SelectCurrency from "../components/SelectCurrency";
import ToggleBuySellSwitch from "../components/ToggleBuySellSwitch";
import { clearSelected } from "../redux/actions/selectedActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import type { NextPage } from "next";

const LiquidityFromPool: NextPage = (props: { clearSelected: Function }) => {
  useEffect(() => {
    store.dispatch(clearSelected());
  }, []);

  const cardButtonTitle: string = "Connect";

  return (
    <main className={styles.main}>
      <BaseCard
        subtitle="Add/Remove Liquidity"
        title="Liquidity"
        AmountInputA={<AmountInput amountOf="liquidityA" />}
        AmountInputB={<AmountInput amountOf="liquidityB" />}
        BaseButton={<BaseButton title={cardButtonTitle} />}
        SelectCurrencyA={
          <SelectCurrency
            isOne={false}
            optionVal="A"
            startCurrency="Select..."
          />
        }
        SelectCurrencyB={
          <SelectCurrency
            isOne={false}
            optionVal="B"
            startCurrency="Select..."
          />
        }
        ToggleAction={<ToggleBuySellSwitch />}
      />
    </main>
  );
};

const mapDispatchToProps = () => {
  return {
    clearSelected,
  };
};

const connector = connect(null, mapDispatchToProps);
export default connector(LiquidityFromPool);
