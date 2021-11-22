
import PropTypes from "prop-types";
import { setExchangeAmount } from '../redux/actions/selectedActions';
import { connect } from 'react-redux'
import store from '../redux/store';

const mapStateToProps = (state: { selected: { method: Object } }) => ({
  method: state.selected.method,
});

const mapDispatchToProps = { setExchangeAmount };

const connector = connect(mapStateToProps, mapDispatchToProps)

const AmountInput = (props: {
  setExchangeAmount: Function,
  method: Object,

}) => {

  const { setExchangeAmount, method } = props;

  function onChangeHandler(e: { target: { value: Number } }) {
    setExchangeAmount(e.target.value);
  }

  return (
    <div className="flex-column">
      <label htmlFor="exchange-amount-input">
        Amount
      </label>
      <input
        aria-describedby="exchange-amount-input"
        id="exchange-amount-input"
        className="form-control"
        onChange={onChangeHandler}
        pattern="\d\.\d{2}"
        type="number"
        value={store.getState().selected.amount}
      />
    </div>
  );
};

AmountInput.propTypes = {
  optionVal: PropTypes.string,
  method: PropTypes.object,
  setExchangeAmmount: PropTypes.func,
};

export default connector(AmountInput);