import styles from "../styles/Home.module.scss";
import store from "../redux/store";
import useToggleAlert from "../hooks/useToggleAlert";
import AmountInput from "../components/AmountInput";
import BaseButton from "../components/BaseButton";
import BaseCard from "../components/BaseCard";
import BaseDialog from "../components/BaseDialog";
import BaseIcon from "../components/BaseIcon";
import SelectCurrency from "../components/SelectCurrency";
import ToggleBuySellSwitch from "../components/ToggleBuySellSwitch";
import { clearSelected } from "../redux/actions/selectedActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import type { NextPage } from "next";

// @ts-ignore
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
        IconCurrencyA={
          <BaseIcon image="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" />
        }
        IconCurrencyB={
          <BaseIcon image="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" />
        }
        SelectCurrencyA={
          <SelectCurrency
            // @ts-ignore
            isOne={false}
            optionVal="A"
            startCurrency="Select..."
          />
        }
        SelectCurrencyB={
          <SelectCurrency
            // @ts-ignore
            isOne={false}
            optionVal="B"
            startCurrency="Select..."
          />
        }
        ToggleAction={<ToggleBuySellSwitch leftText="Add" rightText="Remove" />}
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
