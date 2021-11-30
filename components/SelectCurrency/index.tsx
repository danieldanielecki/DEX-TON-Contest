import store from "../../redux/store";
import BaseIcon from "../BaseIcon";
import PropTypes from "prop-types";
import Select, { components } from "react-select";
import { connect } from "react-redux";
import {
  setCurrencyA,
  setCurrencyB,
} from "../../redux/actions/selectedActions";
import { useEffect, useState } from "react";
import colourStyles from "./styles";

const { Option } = components;
const IconOption = (props: any) => (
  <Option {...props}>
    <BaseIcon
      image={props.data.image}
      key={props.data.symbol}
      size={30}
      title={props.data.label}
    />
  </Option>
);

const SelectCurrency = (props: {
  optionVal?: string;
  setCurrencyA?: any;
  setCurrencyB?: any;
  startCurrency?: string;
}) => {
  const { optionVal, setCurrencyA, setCurrencyB } = props;
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
  };

  return (
    <Select
      className="w-100"
      classNamePrefix="select"
      defaultValue={currencies[0]}
      components={{ Option: IconOption }}
      instanceId={`currency-select-${optionVal}`}
      menuPosition={"fixed"}
      onChange={handleChange}
      options={currencies}
      styles={colourStyles}
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
