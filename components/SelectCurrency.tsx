import React from "react";
import PropTypes from "prop-types";

const SelectCurrency = (props: { currencies: any; onSelectCurrency: any }) => {
  return (
    <select onChange={(e) => props.onSelectCurrency(e.target.value)}>
      {props.currencies.map((currency: { code: string; name: string }) => {
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
