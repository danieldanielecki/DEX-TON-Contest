import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const ToggleOnOffSwitch = (props: {
  checked: boolean;
  id: string;
  onClick: Function;
  optionLabels?: string[];
  title?: string;
}) => {
  const { checked, id, onClick, optionLabels, title } = props;

  return (
    <div>
      <div className={styles.toggle_switch}>
        <input
          aria-describedby={id}
          checked={checked}
          className={styles.toggle_switch_checkbox}
          id={id}
          name={title}
          onClick={(e: any) => onClick(e.target.checked)}
          readOnly
          type="checkbox"
        />
        <label className={styles.toggle_switch_label} htmlFor={id}>
          <span
            className={styles.toggle_switch_inner}
            data-dark={optionLabels ? optionLabels![0] : ""}
            data-light={optionLabels ? optionLabels![1] : ""}
          />
          <span className={styles.toggle_switch_switch} />
        </label>
      </div>
      <label className={styles.label} htmlFor={id}>
        {title}
      </label>
    </div>
  );
};

ToggleOnOffSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  optionLabels: PropTypes.array,
  title: PropTypes.string,
};

export default ToggleOnOffSwitch;
