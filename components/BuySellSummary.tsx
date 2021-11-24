import { useEffect, useState } from "react";
import { connect } from "react-redux";
import BaseIcon from "./BaseIcon";
import BaseButton from "./BaseButton";

const BuySellSummary = (props: {
  currencyA: { name: string; symbol: string };
  currencyB: { name: string; symbol: string };
  method: { type: string };
  amount: { type: string };
}) => {

  const [isCalcVisible, setCalcVisible] = useState(false);
  const [amountB, setAmountB] = useState(0);

  const { currencyA, currencyB, method, amount } = props;
  const calculateAmount = () => {
    let value;
    console.log();
    
    if (method.type === "sell") {
      value =  currencyA.current_price / currencyB.current_price * amount;
    } else if (method.type === "buy") {
      value = currencyB.current_price / currencyA.current_price * amount;
    }
    console.log(value);
    
    setAmountB(value);
  }
  const handleCalculation = () => {
    calculateAmount();
    setCalcVisible(true);
  }

  return (
    <>
      <BaseButton title="calculate" onClick={handleCalculation} />
      {isCalcVisible ?
        <div>
          <div className="w-500 d-flex">
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
            </div>
          </div>
          <div>
            {method.type} {amount} {currencyA.name} with {amountB} {currencyB.name}
          </div>
        </div>
        : ''}
    </>
  )
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
