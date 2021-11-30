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
const LiquidityFromPool: NextPage = (props: {
  clearSelected: Function;
  currencyA: {
    image: string;
  };
  currencyB: {
    image: string;
  };
}) => {
  useEffect(() => {
    store.dispatch(clearSelected());
  }, []);
  const { currencyA, currencyB } = props;
  const cardButtonTitle: string = "Connect";
  const [isOpened, setIsOpened] = useToggleAlert(false);

  return (
    <main>
      <BaseCard
        displaySettings={true}
        subtitle="Add/Remove Liquidity"
        title="Liquidity"
        AmountInputA={<AmountInput amountOf="liquidityA" />}
        AmountInputB={<AmountInput amountOf="liquidityB" />}
        BaseButton={
          <BaseButton onClick={setIsOpened} title={cardButtonTitle} />
        }
        IconCurrencyA={<BaseIcon image={currencyA.image} size={46} />}
        IconCurrencyB={<BaseIcon image={currencyB.image} size={46} />}
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
const mapStateToProps = (state: {
  selected: {
    currencyA: Object;
    currencyB: Object;
  };
}) => ({
  currencyA: state.selected.currencyA,
  currencyB: state.selected.currencyB,
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(LiquidityFromPool);
