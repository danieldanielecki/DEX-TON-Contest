import store from "../redux/store";
import styles from "../styles/Home.module.scss";
import useToggleAlert from "../hooks/useToggleAlert";
import AmountInput from "../components/AmountInput";
import BaseButton from "../components/BaseButton";
import BaseCard from "../components/BaseCard";
import BaseDialog from "../components/BaseDialog";
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
  const cardButtonTitle: string = "Exchange";
  const [isOpened, setIsOpened] = useToggleAlert(false);

  return (
    <main className={styles.main}>
      <BaseCard
        subtitle="Here you can exchange tokens"
        title="Exchange"
        AmountInputA={<AmountInput amountOf="liquidityA" />}
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
      <h2>Summary</h2>
      <BuySellSummary />
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
    setExchangeSell,
  };
};

const connector = connect(null, mapDispatchToProps);
export default connector(ExchangeToken);
