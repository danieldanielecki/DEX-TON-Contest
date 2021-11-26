import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const BaseButton = (props: {
  additionalStyleClasses?: string;
  disabled?: boolean;
  onClick?: any;
  title: string;
}) => {
  const { additionalStyleClasses, disabled, onClick, title } = props;

  return (
    <div className={styles.button_container}>
      <span className={styles.mas}>{title}</span>
      <button
        className={`${additionalStyleClasses}`}
        disabled={disabled}
        onClick={onClick}
        type="button"
      >
        {title}
      </button>
    </div>
  );
};

BaseButton.propTypes = {
  additionalStyleClasses: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default BaseButton;
