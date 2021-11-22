import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import SelectCurrency from "../components/SelectCurrency";
import ToggleBuySell from "../components/ToggleBuySell";
import AmountInput from "../components/AmountInput";
import BuySellSummary from "../components/BuySellSummary";

const ExchangeToken: NextPage = () => {

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Exchange Token</h1>
        <p className={styles.description}>
          Placeholder for Exchange Token description.
        </p>
        <div className="form-control w-50">
          <div>
            <ToggleBuySell />
            <SelectCurrency
              optionVal="A"
            />
            <AmountInput
              optionVal="A" />
          </div>
          <div className="flex-column">
            <label> With: </label>
            <SelectCurrency
              optionVal="B"
            />
          </div>
        </div>
        <BuySellSummary />
      </main>
    </div>
  );
};

export default ExchangeToken;
