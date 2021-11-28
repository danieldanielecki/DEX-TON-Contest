import styles from "../styles/Home.module.scss";
import store from "../redux/store";
import useToggleAlert from "../hooks/useToggleAlert";
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
  const [isOpened, setIsOpened] = useToggleAlert(false);

  return (
    <main className={styles.main}>
      <BaseCard
        displaySettings={true}
        subtitle="Add/Remove Liquidity"
        title="Liquidity"
        AmountInputA={<AmountInput amountOf="liquidityA" />}
        AmountInputB={<AmountInput amountOf="liquidityB" />}
        BaseButton={
          <BaseButton onClick={setIsOpened} title={cardButtonTitle} />
        }
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
      {isOpened && (
        <BaseDialog
          onOpenDialog={true}
          summary="In order to proceed further please confirm the operation."
          title="Confirm"
          BaseButton={<BaseButton title="Confirm" />}
        />
      )}
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
