import store from "../redux/store";
import BaseIcon from "./BaseIcon";
import PropTypes from "prop-types";
import Select, { components } from "react-select";
import { connect } from "react-redux";
import { setCurrencyA, setCurrencyB } from "../redux/actions/selectedActions";
import { useEffect, useState } from "react";

const { Option } = components;
const IconOption = (props: any) => (
  <Option {...props}>
    <BaseIcon image={props.data.image} key={props.data.symbol} />
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
  const [currencies, setCurrencies] = useState([]);
  const [selectedOption, setSelectedOption] = useState(startCurrency);

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
      className="w-75"
      components={{ Option: IconOption }}
      instanceId={`currency-select-${optionVal}`}
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
