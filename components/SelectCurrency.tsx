import BaseIcon from "./BaseIcon";
import Image from "next/image";
import PropTypes from "prop-types";
import Select, { components } from "react-select";
import { useState, useEffect } from "react";
import getCurrencies from '../redux/getters/getCurrencies';


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
  currencies: any;
  isOne?: boolean;
  onSelectCurrency: any;
  startCurrency: any;
}) => {
  const { isOne, onSelectCurrency, startCurrency } = props;
  const [selectedOption, setSelectedOption] = useState(startCurrency);
  let filteredCurrencies: any[];

  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function anyNameFunction() {
      const result: Array<Object> = await getCurrencies();
      setCurrencies(result);
    }
    anyNameFunction();
  }, [])

  const handleChange = (e: any) => {
    setSelectedOption(e.name);
    console.log(e.code);
    onSelectCurrency(e.code);
  };

  if (isOne) {
    filteredCurrencies = currencies.filter(
      (currency: { code: string }) => currency.code !== "TUSD"
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
  isOne: PropTypes.bool,
  onSelectCurrency: PropTypes.func.isRequired,
};

export default SelectCurrency;
