import styles from "./styles.module.scss";
import React, { MouseEvent, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setExchangeAmount } from "../../redux/actions/selectedActions";

const AmountInput = (props: { setExchangeAmount?: any; amountOf: string }) => {
  const { setExchangeAmount, amountOf } = props;
  const [amountValue, setAmountValue] = useState();
  const handleAmount = (event: MouseEvent<HTMLInputElement>) => {
    setAmountValue(event.target.value);
    setExchangeAmount({ [amountOf]: event.target.value });
  };
  return (
    <form className={`${styles.form} flex-column`}>
      <label htmlFor="exchange-amount-input">Amount</label>
      <input
        aria-describedby="exchange-amount-input"
        className="form-control"
        id="exchange-amount-input"
        onChange={handleAmount}
        pattern="\d\.\d{2}"
        type="number"
        value={amountValue}
      />
    </form>
  );
};

AmountInput.propTypes = {
  setExchangeAmmount: PropTypes.func,
  amountOf: PropTypes.string.isRequired,
};
const mapStateToProps = (state: { selected: { method: Object } }) => ({
  method: state.selected.method,
});

const mapDispatchToProps = { setExchangeAmount };
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(AmountInput);
