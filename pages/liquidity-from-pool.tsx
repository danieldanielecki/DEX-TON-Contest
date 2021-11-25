import styles from "../styles/Home.module.scss";
import useToggleAlert from "../hooks/useToggleAlert";
import BaseDialog from "../components/BaseDialog";
import BaseIcon from "../components/BaseIcon";
import SelectCurrency from "../components/SelectCurrency";
import ToggleBuySell from "../components/ToggleBuySell/index";
import ToggleOnOffSwitch from "../components/ToggleOnOffSwitch";
import { useState, ChangeEvent, Fragment } from "react";
import { CURRENCIES } from "../config/data/currency-exchanges/dummy-exchanges";
import type { NextPage } from "next";

const LiquidityFromPool: NextPage = () => {
  const tether = CURRENCIES.currencies[5];
  const [currencies, setCurrencies] = useState(CURRENCIES.currencies);
  const [currencyA, setCurrencyA] = useState(CURRENCIES.currencies[0]);
  const [currencyB, setCurrencyB] = useState(tether);
  const [currencyAval, setCurrencyAval] = useState(
    CURRENCIES.currencies[0].sellRate
  );
  const [currencyBval, setCurrencyBval] = useState(tether.sellRate);
  const [isOpened, setIsOpened] = useToggleAlert(false);
  const [expertMode, setExpertMode] = useState(false);

  const onExpertModeChange = (checked: boolean) => {
    setExpertMode(checked);
  };

  function onSelectCurrency(code: string) {
    const currency = currencies.filter(
      (currency: any) => currency.code === code
    );
    setCurrencyA(currency[0]);
    setCurrencyAval(currencyBval * currencyA.sellRate);
  }

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>, currency: string) {
    if (currency === "A") {
      const newValueA: any | number = e.target.value; // Should be just number, dunno why TypeScript complains.
      setCurrencyAval(newValueA);
      setCurrencyBval(newValueA / currencyA.sellRate);
    } else if (currency === "B") {
      const newValueB: any | number = e.target.value; // Should be just number, dunno why TypeScript complains.
      setCurrencyAval(newValueB * currencyA.sellRate);
      setCurrencyBval(newValueB);
    }
  }

  return (
    <div className={styles.container}>
      <SelectCurrency isOne={true} onSelectCurrency={onSelectCurrency} />
      <div className="row">
        <div className="col-sm-6">
          <div className="input-group">
            <input
              aria-describedby="currencyA"
              className="form-control"
              pattern="\d\.\d{2}"
              type="number"
              value={currencyAval}
              onChange={(e) => {
                onChangeHandler(e, "A");
              }}
            />
            <span className="input-group-addon" id="currencyA">
              {currencyA.code}
            </span>
          </div>
        </div>
        <div className="col-sm-6">
          <BaseIcon
            key={currencyB.code.toLowerCase()}
            name={currencyB.code.toLowerCase()}
          />
          <h3>{currencyB.name}</h3>
          <div className="input-group">
            <input
              aria-describedby="currencyB"
              className="form-control"
              onChange={(e) => {
                onChangeHandler(e, "B");
              }}
              pattern="\d\.\d{2}"
              type="number"
              value={currencyBval}
            />
            <span className="input-group-addon" id="currencyB">
              {currencyB.code}
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p>
            Exchange Rate {`${currencyA.sellRate} ${currencyA.code}`} ={" "}
            {`${currencyB.sellRate} ${currencyB.code}`}
          </p>
        </div>
      </div>
      <div>
        <ToggleOnOffSwitch
          checked={expertMode}
          id="expert_mode"
          onChange={onExpertModeChange}
          title="Expert Mode"
        />
        <ToggleBuySell />
      </div>
      <Fragment>
        <button onClick={setIsOpened}>Open</button>
        {isOpened && (
          <BaseDialog
            onOpenDialog={isOpened}
            section="Section text"
            title="Title"
          />
        )}
      </Fragment>
      <main className={styles.main}>
        <h1 className={styles.title}>Exchange Token</h1>
        <p className={styles.description}>
          Placeholder for Exchange Token description.
        </p>
      </main>
    </div>
  );
};

export default LiquidityFromPool;
