import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const ToggleOnOffSwitch = (props: {
  checked: boolean;
  id: string;
  onChange: Function;
  title?: string;
}) => {
  const { checked, id, onChange, title } = props;

  return (
    <div>
      <div className={styles.toggle_switch}>
        <input
          aria-describedby={id}
          checked={checked}
          className={styles.toggle_switch_checkbox}
          id={id}
          name={title}
          onChange={(e) => onChange(e.target.checked)}
          type="checkbox"
        />
        <label className={styles.toggle_switch_label} htmlFor={id}>
          <span className={styles.toggle_switch_inner} />
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
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default ToggleOnOffSwitch;
