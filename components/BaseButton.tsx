import styles from "../styles/Buttons.module.scss";
import PropTypes from "prop-types";

const BaseButton = (props: {
  additionalStyleClasses?: string;
  onClick?: any;
  title: string;
}) => {
  const { additionalStyleClasses, onClick, title } = props;

  return (
    <div className={styles.button_container}>
      <span className={styles.mas}>{title}</span>
      <button
        className={`${additionalStyleClasses}`}
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
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default BaseButton;
