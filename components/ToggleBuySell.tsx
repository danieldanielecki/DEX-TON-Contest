import { useState } from "react";
import store from "../redux/store";
import styles from "../styles/Exchange.module.scss";

const ToggleBuySell = () => {
  const [active, setActive] = useState(store.getState().selected.method?.type);

  // TODO Katarzyna: Maybe it could be good to outsource it to a separated hook? See: https://github.com/danieldanielecki/DEX-TON-Contest/commit/1533438d7376f43d78baca304cff40fe22d15d45
  const handleChange = (event: {
    target: { id: String };
    preventDefault: Function;
  }) => {
    event.preventDefault();
    setActive(event.target.id);
    if (event.target.id === "buy") {
      store.dispatch({ type: "SET_EXCHANGEBUY" });
    } else {
      store.dispatch({ type: "SET_EXCHANGESELL" });
    }
  };

  return (
    <div>
      <button
        className={`${active === "buy" ? styles.highlighted : ""} btn ${
          styles.button_custom
        }`}
        id="buy"
        title="Buy currency"
        onClick={handleChange}
      >
        Buy
      </button>
      <button
        className={`${active === "sell" ? styles.highlighted : ""} btn ${
          styles.button_custom
        }`}
        id="sell"
        title="Sell currency"
        onClick={handleChange}
      >
        Sell
      </button>
    </div>
  );
};

export default ToggleBuySell;
