import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const BaseCard = (props: { subtitle: string; title: string }) => {
  const { subtitle, title } = props;

  return (
    <div className={styles.dialog}>
      <div className={styles.menu}></div>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <span className={styles.subtitle}>{subtitle}</span>
      <section></section>
    </div>
  );
};

BaseCard.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BaseCard;
