import { useEffect, useState } from "react";

export default function useLocalStorageState(
  initialValue: boolean,
  key: string
) {
  const ISSERVER = typeof window === "undefined";

  const [value, setValue] = useState(() => {
    if (!ISSERVER) {
      const persistedValue = localStorage.getItem(key);
      return persistedValue !== null ? persistedValue : initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, value!.toString());
  }, [key, value]);

  return [!!value, setValue];
}
