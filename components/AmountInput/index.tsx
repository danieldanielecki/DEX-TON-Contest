import store from "../../redux/store";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setExchangeAmount } from "../../redux/actions/selectedActions";

const mapStateToProps = (state: { selected: { method: Object } }) => ({
  method: state.selected.method,
});

const mapDispatchToProps = { setExchangeAmount };
const connector = connect(mapStateToProps, mapDispatchToProps);

const AmountInput = (props: { setExchangeAmount?: any }) => {
  const { setExchangeAmount } = props;

  return (
    <div className="flex-column">
      <label htmlFor="exchange-amount-input">Amount</label>
      <input
        aria-describedby="exchange-amount-input"
        className="form-control"
        id="exchange-amount-input"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setExchangeAmount(e.target.value);
        }}
        pattern="\d\.\d{2}"
        type="number"
        value={store.getState().selected.amount}
      />
    </div>
  );
};

AmountInput.propTypes = {
  setExchangeAmmount: PropTypes.func,
};

export default connector(AmountInput);
