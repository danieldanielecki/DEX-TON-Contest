import { useEffect, useState } from "react";
import { connect } from "react-redux";
import BaseIcon from "./BaseIcon";

const BuySellSummary = (props: {
  currencyA: {
    name: string;
    symbol: string;
    image: string;
    current_price: number;
  };
  currencyB: {
    name: string;
    symbol: string;
    image: string;
    current_price: number;
  };
  method: { type: string };
  amount: { exchangeToken: string };
}) => {

  const [amountCalc, setAmountCalc] = useState(0);
  const { currencyA, currencyB, method, amount } = props;

  useEffect(() => {
    let value: number = 0;
    if (!!method && !!currencyA && !!currencyB && !!amount) {
      if (method.type === "sell") {
        value = currencyA.current_price / currencyB.current_price * +amount.exchangeToken;
      } else if (method.type === "buy") {
        value = currencyB.current_price / currencyA.current_price * +amount.exchangeToken;
      }
      setAmountCalc(value.toFixed(4));
    }
  });

  return (
    <div>
      <div className="w-500 d-flex">
        {!!currencyA
          ? (
            <div>
              <BaseIcon image={currencyA.image} />
              <p className="d-flex flex-column">
                <span>
                  {currencyA.name}
                </span>
                <span>
                  {currencyA.current_price} USD
                </span>
              </p>
            </div>
          ) : ''}
        {!!amount
          && !!method
          && !!currencyA
          && !!currencyB
          ? (
            <p>
              <span>{amountCalc} </span>
              {method.type === "buy"
                ? <span>{currencyA.name}</span>
                : <span>{currencyB.name}</span>
              }
            </p>)
          : ''}
        <BaseIcon image="swap-icon.svg" />
        {!!currencyB
          ? (
            <div>
              <BaseIcon image={currencyB.image} />
              <p className="d-flex flex-column">
                <span>
                  {currencyB.name}
                </span>
                <span>
                  {currencyB.current_price} USD
                </span>
              </p>
            </div>)
          : ''}
      </div>
    </div>
  );
};

const mapStateToProps = (state: {
  selected: {
    currencyA: Object;
    currencyB: Object;
    method: Object;
    amount: String;
  };
}) => ({
  currencyA: state.selected.currencyA,
  currencyB: state.selected.currencyB,
  method: state.selected.method,
  amount: state.selected.amount,
});

const connector = connect(mapStateToProps);
export default connector(BuySellSummary);
