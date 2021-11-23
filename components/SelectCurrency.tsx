import BaseIcon from "./BaseIcon";
import Image from "next/image";
import PropTypes from "prop-types";
import Select, { components } from "react-select";
import { useState, useEffect } from "react";
import getCurrencies from "../redux/getters/getCurrencies";
import { setCurrencyA, setCurrencyB } from "../redux/actions/selectedActions";
import { connect } from "react-redux";
import store from "../redux/store";

const mapStateToProps = (state: {
  selected: { currencyA: Object; currencyB: Object };
}) => ({
  currencyA: state.selected.currencyA,
  currencyB: state.selected.currencyB,
});

const mapDispatchToProps = () => {
  return {
    setCurrencyA,
    setCurrencyB,
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const { Option } = components;
const IconOption = (props: any) => (
  <Option {...props}>
    {props.data.symbol === "ton" ? (
      <Image src="/ton/darkBgTon.svg" alt="Ton Logo" width={64} height={64} />
    ) : (
      <BaseIcon key={props.data.symbol} name={props.data.symbol} />
    )}
    {props.data.name}
  </Option>
);

const SelectCurrency = (props: {
  currencyA?: Object;
  currencyB?: Object;
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
      const result: any = await getCurrencies();
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

SelectCurrency.propTypes = {
  currencyA: PropTypes.object,
  currencyB: PropTypes.object,
  isOne: PropTypes.bool,
  onSelectCurrency: PropTypes.func,
  optionVal: PropTypes.string,
  setCurrencyA: PropTypes.func,
  setCurrencyB: PropTypes.func,
  startCurrency: PropTypes.string,
};

export default connector(SelectCurrency);
