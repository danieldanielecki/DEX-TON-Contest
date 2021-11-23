import BaseIcon from "./BaseIcon";
import Image from "next/image";
import PropTypes from "prop-types";
import Select, { components } from "react-select";
import { useState, useEffect } from "react";
import getCurrencies from '../redux/getters/getCurrencies';
import { setCurrencyA, setCurrencyB } from '../redux/actions/selectedActions';
import { connect } from 'react-redux'
import store from '../redux/store';

const mapStateToProps = (state: { selected: { currencyA: Object, currencyB: Object } }) => ({
  currencyA: state.selected.currencyA,
  currencyB: state.selected.currencyB,
});

const mapDispatchToProps = () => {
  return {
    setCurrencyA,
    setCurrencyB,
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

const { Option } = components;
const IconOption = (props: any) => (
  <Option {...props}>
    {props.data.symbol === "ton" ? (
      <Image src="/ton/darkBgTon.svg" alt="Ton Logo" width={64} height={64} />
    ) : (
      <BaseIcon
        key={props.data.symbol}
        name={props.data.symbol}
      />
    )}
    {props.data.name}
  </Option>
);

const SelectCurrency = (props: {
  setCurrencyA: Function,
  setCurrencyB: Function,
  currencyA: Object,
  currencyB: Object,
  isOne?: boolean,
  startCurrency: any,
  optionVal: string,
}) => {
  const { isOne, startCurrency, optionVal, setCurrencyA, setCurrencyB } = props;
  const [selectedOption, setSelectedOption] = useState(startCurrency);
  let filteredCurrencies: any[];

  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function loadCurrencies() {
      const result = await getCurrencies();
      setCurrencies(result);
    }
    loadCurrencies();
  }, [])

  const handleChange = (event: any) => {
    if (optionVal === "A") {
      store.dispatch(setCurrencyA(event));
    }
    if (optionVal === "B") {
      store.dispatch(setCurrencyB(event));
    }
    console.log(store.getState());
    setSelectedOption(event.name);
    // onSelectCurrency(event.symbol);
  };

  if (isOne) {
    filteredCurrencies = currencies.filter(
      (currency: { symbol: string }) => currency.symbol !== "TUSD"
    );
  } else {
    filteredCurrencies = currencies;
  }
  return (
    <Select
      components={{ Option: IconOption }}
      onChange={handleChange}
      options={filteredCurrencies}
      value={{ label: selectedOption }}
    />
  );
};

SelectCurrency.propTypes = {
  setCurrencyA: PropTypes.func.isRequired,
  setCurrencyB: PropTypes.func.isRequired,
  isOne: PropTypes.bool,
  optionVal: PropTypes.string,
  onSelectCurrency: PropTypes.func.isRequired,
};

export default connector(SelectCurrency);