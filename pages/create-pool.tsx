import store from "../redux/store";
import styles from "../styles/Home.module.scss";
import BaseButton from "../components/BaseButton";
import BaseCard from "../components/BaseCard";
import SelectCurrency from "../components/SelectCurrency";
import ShowCreatedPool from "../components/ShowCreatedPool";
import { clearSelected } from "../redux/actions/selectedActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import type { NextPage } from "next";

const CreatePool: NextPage = (props: { clearSelected: Function }) => {
  useEffect(() => {
    store.dispatch(clearSelected());
  }, []);
  const cardButtonTitle: string = "Create";

  return (
    <main className={styles.main}>
      <BaseCard
        subtitle="Create new pair of tokens"
        title="New Pool"
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
      />
      <ShowCreatedPool />
    </main>
  );
};

const mapDispatchToProps = () => {
  return {
    clearSelected,
  };
};

const connector = connect(null, mapDispatchToProps);
export default connector(CreatePool);
