import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const ToggleBuySellSwitch = (props: {}) => {
  const {} = props;

  return (
    <div className={styles.switch_button_wrapper}>
      <div className={styles.switch_button}>
        <input
          className={styles.switch_button_checkbox}
          type="checkbox"
        ></input>
        <label className={styles.switch_button_label}>
          <span className={styles.switch_button_label_span}>Buy</span>
        </label>
      </div>
    </div>
  );
};

ToggleBuySellSwitch.propTypes = {};

export default ToggleBuySellSwitch;
