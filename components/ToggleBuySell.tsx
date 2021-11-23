
import { useState } from 'react';
import store from '../redux/store';
import styles from "../styles/Exchange.module.scss";

const ToggleBuySell = () => {

  const [active, setActive] = useState(store.getState().selected.method?.type)

  const handleChange = (event: {target: {id: String}, preventDefault: Function}) => {
    event.preventDefault();
    setActive(event.target.id);
    if (event.target.id === "buy") {
      store.dispatch({type: "SET_EXCHANGEBUY"})
    } else {
      store.dispatch({type: "SET_EXCHANGESELL"})
    }
  }

  return (
    <div>
      <button className={`${active === 'buy' ? styles.highlighted : '' } btn ${styles.button_custom}`}
        id="buy"
        title="Buy currency"
        onClick={handleChange}>
        Buy
      </button>
      <button className={`${active === 'sell' ? styles.highlighted : ''} btn ${styles.button_custom}`}
        id="sell"
        title="Sell currency"
        onClick={handleChange}>
        Sell
      </button>
    </div>
  );
};

export default ToggleBuySell;
