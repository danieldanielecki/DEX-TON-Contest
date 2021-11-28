import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import { ReactElement } from "react";

const BaseCard = (props: {
  subtitle: string;
  title: string;
  AmountInputA?: ReactElement<any, any>;
  AmountInputB?: ReactElement<any, any>;
  BaseButton: ReactElement<any, any>;
  SelectCurrencyA?: ReactElement<any, any>;
  SelectCurrencyB?: ReactElement<any, any>;
  ToggleAction?: ReactElement<any, any>;
}) => {
  const {
    subtitle,
    title,
    AmountInputA,
    AmountInputB,
    BaseButton,
    SelectCurrencyA,
    SelectCurrencyB,
    ToggleAction,
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles.menu}></div>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
      <section>
        {AmountInputA}
        {SelectCurrencyA}
        {AmountInputB}
        {SelectCurrencyB}
        {ToggleAction}
        <div className={styles.button}>{BaseButton}</div>
      </section>
    </div>
  );
};

BaseCard.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  AmountInputA: PropTypes.element,
  AmountInputB: PropTypes.element,
  BaseButton: PropTypes.element,
  SelectCurrencyA: PropTypes.element,
  SelectCurrencyB: PropTypes.element,
  ToggleAction: PropTypes.element,
};

export default BaseCard;
