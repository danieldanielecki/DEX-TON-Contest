import BaseIcon from "./BaseIcon";
import Image from "next/image";
import PropTypes from "prop-types";
import Select, { components } from "react-select";
import { useState } from "react";

const { Option } = components;
const IconOption = (props: any) => (
  <Option {...props}>
    {props.data.code.toLowerCase() === "ton" ? (
      <Image src="/ton/darkBgTon.svg" alt="Ton Logo" width={64} height={64} />
    ) : (
      <BaseIcon
        key={props.data.code.toLowerCase()}
        name={props.data.code.toLowerCase()}
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
  const { currencies, isOne, onSelectCurrency, startCurrency } = props;
  const [selectedOption, setSelectedOption] = useState(startCurrency);
  let filteredCurrencies: any[];

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
  currencies: PropTypes.array.isRequired,
  isOne: PropTypes.bool,
  onSelectCurrency: PropTypes.func.isRequired,
};

export default SelectCurrency;
