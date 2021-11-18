import React from "react";

export default function useIsBuySelected(isBuy = false) {
  const [value, setValue] = React.useState(isBuy);

  const toggleState = React.useCallback(() => {
    setValue((value) => !value);
  }, []);

  return [value, toggleState];
}
