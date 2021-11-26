import { useEffect, useState } from "react";
import { connect } from "react-redux";
import BaseIcon from "./BaseIcon";
import BaseButton from "./BaseButton";

const BuySellSummary = (props: {
  currencyA: { name: string; symbol: string, image: string, current_price: number },
  currencyB: { name: string; symbol: string, image: string, current_price: number },
  method: { type: string },
  amount: { type: number },
}) => {

  const [amountCalc, setAmountCalc] = useState(0);
  const { currencyA, currencyB, method, amount } = props;

  useEffect(() => {
    let value: number = 0;
    if (!!method && !!currencyA && !!currencyB && !!amount) {
      if (method.type === "sell") {
        value = currencyA.current_price / currencyB.current_price * +amount;
      } else if (method.type === "buy") {
        value = currencyB.current_price / currencyA.current_price * +amount;
      }
      setAmountCalc(value.toFixed(4));
    }
  });


  return (
    <>
      {/* <BaseButton title="calculate" onClick={handleCalculation} />
      {isCalcVisible ? */}
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
          {amount
            && !!method
            && !!currencyA
            && !!currencyB
            ? <span>{amountCalc} USD</span>
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
        <div>
          {/* {method.type} {amount} {currencyA.name} with {amountCalc} {currencyB.name} */}
        </div>
      </div>
      {/* : ''} */}
    </>
  )
};

const mapStateToProps = (state: {
  selected: {
    currencyA: Object,
    currencyB: Object,
    method: Object,
    amount: String,
  };
}) => ({
  currencyA: state.selected.currencyA,
  currencyB: state.selected.currencyB,
  method: state.selected.method,
  amount: state.selected.amount,
});

const connector = connect(mapStateToProps);

export default connector(BuySellSummary);
