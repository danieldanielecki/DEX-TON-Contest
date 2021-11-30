import { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BaseIcon from "../BaseIcon";
import styles from './styles.module.scss'

const BuySellSummary = (props: {
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
  method: { type: string };
  amount: { exchangeToken: string };
}) => {
  const [amountCalc, setAmountCalc] = useState("");
  const { currencyA, currencyB, method, amount } = props;

  useEffect(() => {
    let value: Number = 0;
    if (!!method && !!currencyA && !!currencyB && !!amount) {
      if (method.type === "sell") {
        value =
          (currencyA.current_price / currencyB.current_price) *
          +amount.exchangeToken;
      } else if (method.type === "buy") {
        value =
          (currencyB.current_price / currencyA.current_price) *
          +amount.exchangeToken;
      }
      setAmountCalc(value.toFixed(3));
    }
  });

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h2>Summary</h2>
      </div>
      <div className="w-500 d-flex justify-content-between pt-4">
        <div className={!!currencyA.label ? styles.block : styles.hidden}>
          <BaseIcon image={currencyA.image} />
          <p className="d-flex flex-column">
            <span>
              {currencyA.label}
            </span>
            <span>
              {currencyA.current_price.toFixed(3)} USD
            </span>
          </p>
        </div>
        {/* ) : ''} */}
        <div className="d-flex flex-column align-items-center">
          <BaseIcon image="swap-icon.svg" size={48} />
          {!!amount.exchangeToken
            && !!method
            && !!currencyA.label
            && !!currencyB.label
            ? (
              <p className="d-flex flex-column align-items-center">
                <span>Pay with</span>
                <span>{amountCalc}</span>
                {method.type === "buy"
                  ? <span>{currencyA.label}</span>
                  : <span>{currencyB.label}</span>
                }
              </p>)
            : ''}
        </div>
        <div className={!!currencyB.label ? styles.block : styles.hidden}>
          <BaseIcon image={currencyB.image} />
          <p className="d-flex flex-column">
            <span>
              {currencyB.label}
            </span>
            <span>
              {currencyB.current_price.toFixed(3)} USD
            </span>
          </p>
        </div>
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

BuySellSummary.propTypes = {
  currencyA: PropTypes.object,
  currencyB: PropTypes.object,
  method: PropTypes.object,
  amount: PropTypes.object,
};

const connector = connect(mapStateToProps);
// @ts-ignore
export default connector(BuySellSummary);
