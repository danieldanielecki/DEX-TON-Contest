import { useCallback, useState } from "react";

export default function useToggleClassOnHover(isHovered = false) {
  const [value, setValue] = useState(isHovered);

  const toggleState = useCallback(() => {
    setValue((value) => !value);
  }, []);

  //   return (
  //     <button
  //       className={hovered ? "active_row" : ""}
  //       onMouseEnter={toggleHover}
  //       onMouseLeave={toggleHover}
  //     ></button>
  //   );
  return [value, toggleState];
}
