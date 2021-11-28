import { useState, useEffect } from "react";
import Select, { components } from "react-select";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setCurrencyA, setCurrencyB } from "../redux/actions/selectedActions";
import store from "../redux/store";
import BaseIcon from "./BaseIcon";

const { Option } = components;
const IconOption = (props: any) => (
  <Option {...props}>
    <BaseIcon
      key={props.data.symbol}
      image={props.data.image}
    />
    {props.data.name}
  </Option>
);

const SelectCurrency = (props: {
  optionVal?: string;
  setCurrencyA?: any;
  setCurrencyB?: any;
  startCurrency?: string;
}) => {
  const { startCurrency, optionVal, setCurrencyA, setCurrencyB } = props;
  const [selectedOption, setSelectedOption] = useState(startCurrency);

  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function loadCurrencies() {
      const result: any = await store.getState().fetched.currencies;
      setCurrencies(result);
    }
    loadCurrencies();
  }, []);

  const handleChange = (event: any) => {
    if (optionVal === "A") {
      store.dispatch(setCurrencyA(event));
    }
    if (optionVal === "B") {
      store.dispatch(setCurrencyB(event));
    }
    setSelectedOption(event.name);
  };

  return (
    <Select
      instanceId={`currency-select-${optionVal}`}
      components={{ Option: IconOption }}
      onChange={handleChange}
      options={currencies}
      value={{ label: selectedOption }}
    />
  );
};

SelectCurrency.propTypes = {
  optionVal: PropTypes.string,
  setCurrencyA: PropTypes.func,
  setCurrencyB: PropTypes.func,
  startCurrency: PropTypes.string,
};

const mapDispatchToProps = () => {
  return {
    setCurrencyA,
    setCurrencyB,
  };
};

const connector = connect(null, mapDispatchToProps);

export default connector(SelectCurrency);
