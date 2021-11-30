import store from "../redux/store";
import styles from "../styles/Home.module.scss";
import useToggleAlert from "../hooks/useToggleAlert";
import BaseButton from "../components/BaseButton";
import BaseCard from "../components/BaseCard";
import BaseDialog from "../components/BaseDialog";
import BaseIcon from "../components/BaseIcon";
import SelectCurrency from "../components/SelectCurrency";
import { clearSelected } from "../redux/actions/selectedActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import type { NextPage } from "next";

// @ts-ignore
const CreatePool: NextPage = (props: {
  clearSelected: Function,
  currencyA: {
    label: string;
    symbol: string;
    image: string;
    current_price: number;
  };
  currencyB: {
    label: string;
    symbol: string;
    image: string;
    current_price: number;
  };
}) => {

  const { currencyA, currencyB } = props;
  const cardButtonTitle: string = "Create";
  const [isOpened, setIsOpened] = useToggleAlert(false);
  useEffect(() => {
    store.dispatch(clearSelected());
  }, []);

  return (
    <main className={styles.main}>
      <BaseCard
        subtitle="Create new pair of tokens"
        title="New Pool"
        BaseButton={
          <BaseButton onClick={setIsOpened} title={cardButtonTitle} />
        }
        IconCurrencyA={<BaseIcon image={currencyA.image} size={46}/>}
        IconCurrencyB={<BaseIcon image={currencyB.image} size={46}/>}
        SelectCurrencyA={
          <SelectCurrency
            optionVal="A"
            startCurrency="Select..."
          />
        }
        SelectCurrencyB={
          <SelectCurrency
            optionVal="B"
            startCurrency="Select..."
          />
        }
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
export default connector(CreatePool);
