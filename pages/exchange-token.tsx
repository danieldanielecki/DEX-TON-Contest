import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import SelectCurrency from "../components/SelectCurrency";
import ToggleBuySell from "../components/ToggleBuySell";
import AmountInput from "../components/AmountInput";
import BuySellSummary from "../components/BuySellSummary";

const ExchangeToken: NextPage = () => {
  // const [currencies, setCurrencies] = useState(CURRENCIES.currencies);
  // const [currencyA, setCurrencyA] = useState(CURRENCIES.currencies[0]);
  // const [currencyB, setCurrencyB] = useState(CURRENCIES.currencies[1]);
  // const [currencyAval, setCurrencyAval] = useState(1);
  // const [currencyBval, setCurrencyBval] = useState(
  //   CURRENCIES.currencies[1].sellRate / CURRENCIES.currencies[0].sellRate
  // );

  // function onSelectCurrency(code: string, curr: string) {
  //   const currency = currencies.find(
  //     (currency: any) => currency.code === code
  //   )!;
  //   if (curr === "A") {
  //     setCurrencyA(currency);
  //     setCurrencyAval(1);
  //     setCurrencyBval(1 * (currencyB.sellRate / currency.sellRate));
  //   } else {
  //     setCurrencyB(currency);
  //     setCurrencyAval(1);
  //     setCurrencyBval(1 * (currency.sellRate / currencyA.sellRate));
  //   }
  // }

  // function onChangeHandler(e: ChangeEvent<HTMLInputElement>, currency: string) {
  //   if (currency === "A") {
  //     const newValueA: any | number = e.target.value; // Should be just number, dunno why TypeScript complains.
  //     setCurrencyAval(newValueA);
  //     setCurrencyBval(newValueA * (currencyB.sellRate / currencyA.sellRate));
  //   } else {
  //     const newValueB: any | number = e.target.value; // Should be just number, dunno why TypeScript complains.
  //     setCurrencyBval(newValueB);
  //     setCurrencyAval(newValueB * (currencyA.sellRate / currencyB.sellRate));
  //   }
  // }

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
