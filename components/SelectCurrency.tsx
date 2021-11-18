import React from "react";
import PropTypes from "prop-types";

const SelectCurrency = (props: {
  currencies: any;
  isOne: boolean;
  onSelectCurrency: any;
}) => {
  const { currencies, isOne, onSelectCurrency } = props;
  let filteredCurrencies;

  if (isOne) {
    filteredCurrencies = currencies.filter(
      (currency: { code: string }) => currency.code !== "TUSD"
    );
  } else {
    filteredCurrencies = currencies;
  }

  return (
    <select onChange={(e) => onSelectCurrency(e.target.value)}>
      {filteredCurrencies.map((currency: { code: string; name: string }) => {
        const { code, name } = currency;
        return (
          <option key={code} value={code}>
            {name}
          </option>
        );
      })}
    </select>
  );
};

SelectCurrency.propTypes = {
  currencies: PropTypes.array.isRequired,
  onSelectCurrency: PropTypes.func.isRequired,
};

export default SelectCurrency;
