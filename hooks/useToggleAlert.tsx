import { useCallback, useState } from "react";

export default function useToggleAlert(isOpened = false) {
  const [value, setValue] = useState<any>(isOpened);

  const toggleState = useCallback(() => {
    setValue((value: any) => !value);
  }, []);

  return [value, toggleState];
}
