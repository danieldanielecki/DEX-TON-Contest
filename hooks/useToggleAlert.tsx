import { useCallback, useState } from "react";

export default function useToggleAlert(isOpened = false) {
  const [value, setValue] = useState(isOpened);

  const toggleState = useCallback(() => {
    setValue((value) => !value);
  }, []);

  return [value, toggleState];
}
