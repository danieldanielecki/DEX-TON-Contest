import { useCallback, useState } from "react";

export default function useToggleClassOnHover(array: boolean[]) {
  const [value, setValue] = useState(array);

  const getWrapperFunction = (i: number) => {
    return value[i];
  };

  const setWrapperFunction = (index: number) => {
    return useCallback(() => {
      setValue((value: boolean[]) => {
        return value.map((v: boolean, i: number) => {
          return i != index ? v : !v;
        });
      });
    }, []);
  };
  return [getWrapperFunction, setWrapperFunction];
}
