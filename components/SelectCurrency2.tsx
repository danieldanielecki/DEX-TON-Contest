import React from "react";
import PropTypes from "prop-types";

const SelectCurrency2 = (props: { currencies: any; onSelectCurrency: any }) => {
  const { currencies, onSelectCurrency } = props;
  const filteredCurrencies = currencies.filter(
    (currency: { code: string }) => currency.code !== "TUSD"
  );

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

SelectCurrency2.propTypes = {
  currencies: PropTypes.array.isRequired,
  onSelectCurrency: PropTypes.func.isRequired,
};

export default SelectCurrency2;
