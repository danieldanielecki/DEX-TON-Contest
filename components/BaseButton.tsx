import styles from "../styles/Buttons.module.scss";
import PropTypes from "prop-types";

const BaseButton = (props: {
  additionalStyleClasses?: string;
  title: string;
}) => {
  const { title, additionalStyleClasses } = props;

  return (
    <div className={styles.button_container}>
      <span className={styles.mas}>{title}</span>
      <button className={`${additionalStyleClasses}`} type="button">
        {title}
      </button>
    </div>
  );
};

BaseButton.propTypes = {
  additionalStyleClasses: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default BaseButton;
