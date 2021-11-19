import styles from "../styles/Buttons.module.scss";
import PropTypes from "prop-types";

const BaseButton = (props: { title: string }) => {
  const { title } = props;

  return (
    <div className={styles.button_container}>
      <span className={styles.mas}>{title}</span>
      <button type="button">{title}</button>
    </div>
  );
};

BaseButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BaseButton;
