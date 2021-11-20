import styles from "../styles/Home.module.scss";
import BaseIcon from "../components/BaseIcon";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SelectCurrency from "../components/SelectCurrency";
import { useState, ChangeEvent, Fragment } from "react";
import { CURRENCIES } from "../config/data/currency-exchanges/dummy-exchanges";
import type { NextPage } from "next";


// TODO Raduan: Fix initial state of the icon which displays an icon of Bitcoin now, even though in the option/select list Binance Coin is being selected for the second "SelectCurrency" component.
const ExchangeToken: NextPage = () => {
  let tokenSet: Set<unknown> = new Set();
  const [currencies, setCurrencies] = useState(CURRENCIES.currencies);
  const [currencyA, setCurrencyA] = useState(CURRENCIES.currencies[0]);
  const [currencyB, setCurrencyB] = useState(CURRENCIES.currencies[1]);
  const [currencyAval, setCurrencyAval] = useState(1);
  const [currencyBval, setCurrencyBval] = useState(
    CURRENCIES.currencies[1].sellRate / CURRENCIES.currencies[0].sellRate
  );

  function onSelectCurrency(code: string, curr: string) {
    const currency = currencies.find(
      (currency: any) => currency.code === code
    )!;
    if (curr === "A") {
      setCurrencyA(currency);
      setCurrencyAval(1);
      setCurrencyBval(1 * (currencyB.sellRate / currency.sellRate));
    } else {
      setCurrencyB(currency);
      setCurrencyAval(1);
      setCurrencyBval(1 * (currency.sellRate / currencyA.sellRate));
    }
  }

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>, currency: string) {
    if (currency === "A") {
      const newValueA: any | number = e.target.value; // Should be just number, dunno why TypeScript complains.
      setCurrencyAval(newValueA);
      setCurrencyBval(newValueA * (currencyB.sellRate / currencyA.sellRate));
    } else {
      const newValueB: any | number = e.target.value; // Should be just number, dunno why TypeScript complains.
      setCurrencyBval(newValueB);
      setCurrencyAval(newValueB * (currencyA.sellRate / currencyB.sellRate));
    }
  }

  return (
    <div className={styles.container}>
      <SelectCurrency
        currencies={currencies}
        onSelectCurrency={(e) => {
          onSelectCurrency(e, "A");
        }}
      />
      {
        <SelectCurrency
          currencies={currencies}
          onSelectCurrency={(e) => {
            onSelectCurrency(e, "B");
          }}
        />
      }
      <div className="row">
        <div className="col-sm-6">
          <h3>{currencyA.name}</h3>
          {/* !IMPORTANT: ton.svg is broken! */}
          <BaseIcon
            key={currencyA.code.toLowerCase()}
            name={currencyA.code.toLowerCase()}
          />
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
            Exchange Rate {`1 ${currencyA.code}`} ={" "}
            {`${currencyB.sellRate / currencyA.sellRate} ${currencyB.code}`}
          </p>
        </div>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>Exchange Token</h1>
        <p className={styles.description}>
          Placeholder for Exchange Token description.
        </p>
      </main>
    </div>
  );
};

export default ExchangeToken;
