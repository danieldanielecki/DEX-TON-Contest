import BaseIcon from "./BaseIcon";
import Image from "next/image";
import PropTypes from "prop-types";
import Select, { components } from "react-select";
import { useState, useEffect } from "react";
import { setCurrencyA, setCurrencyB } from "../redux/actions/selectedActions";
import { connect } from "react-redux";
import store from "../redux/store";

const mapDispatchToProps = () => {
  return {
    setCurrencyA,
    setCurrencyB,
  };
};

const connector = connect(null, mapDispatchToProps);

const { Option } = components;
const IconOption = (props: any) => (
  <Option {...props}>
    {props.data.symbol === "ton" ? (
      <Image src="/ton/darkBgTon.svg" alt="Ton Logo" width={64} height={64} />
    ) : (
      <BaseIcon
        key={props.data.symbol}
        name={props.data.symbol}
        image={props.data.image}
      />
    )}
    {props.data.name}
  </Option>
);

// TODO Katarzyna: cleanup of these props what's needed / what's not.
const SelectCurrency = (props: {
  isOne?: boolean;
  onSelectCurrency?: Function;
  optionVal?: string;
  setCurrencyA?: any;
  setCurrencyB?: any;
  startCurrency?: string;
}) => {
  const { isOne, startCurrency, optionVal, setCurrencyA, setCurrencyB } = props;
  const [selectedOption, setSelectedOption] = useState(startCurrency);
  let filteredCurrencies: any[];

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

// TODO Katarzyna: cleanup of these props what's needed / what's not.
SelectCurrency.propTypes = {
  isOne: PropTypes.bool,
  onSelectCurrency: PropTypes.func,
  optionVal: PropTypes.string,
  setCurrencyA: PropTypes.func,
  setCurrencyB: PropTypes.func,
  startCurrency: PropTypes.string,
};

export default connector(SelectCurrency);
