import styles from "./styles.module.scss";
import useToggleAlert from "../../hooks/useToggleAlert";
import PropTypes from "prop-types";
import SettingsDialog from "../SettingsDialog";
import { Fragment, ReactElement } from "react";

const BaseCard = (props: {
  displaySettings?: boolean;
  subtitle: string;
  title: string;
  AmountInputA?: ReactElement<any, any>;
  AmountInputB?: ReactElement<any, any>;
  BaseButton: ReactElement<any, any>;
  IconCurrencyA?: ReactElement<any, any>;
  IconCurrencyB?: ReactElement<any, any>;
  SelectCurrencyA?: ReactElement<any, any>;
  SelectCurrencyB?: ReactElement<any, any>;
  ToggleAction?: ReactElement<any, any>;
  TransactionSummary?: ReactElement<any, any>;
}) => {
  const {
    displaySettings,
    subtitle,
    title,
    AmountInputA,
    AmountInputB,
    BaseButton,
    IconCurrencyA,
    IconCurrencyB,
    SelectCurrencyA,
    SelectCurrencyB,
    ToggleAction,
    TransactionSummary,
  } = props;
  const [isOpenedSettingsDialog, setIsOpenedSettingsDialog] =
    useToggleAlert(false);

  return (
    <div className={styles.card}>
      <div className={styles.menu}>
        {displaySettings && (
          <Fragment>
            <button
              className={styles.link_to_open_dialog}
              onClick={setIsOpenedSettingsDialog}
            ></button>
            {isOpenedSettingsDialog && (
              <SettingsDialog
                onOpenSettingsDialog={isOpenedSettingsDialog}
                subtitle="Align your Transaction Settings"
                title="Settings"
              />
            )}
          </Fragment>
        )}
      </div>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
      <section>
        <div className="d-flex align-items-center justify-content-between">
          {IconCurrencyA}
          {SelectCurrencyA}
          {AmountInputA}
        </div>
        <p className="text-center my-2">with</p>
        <div
          className={`${
            SelectCurrencyB
              ? "d-flex align-items-center justify-content-between"
              : ""
          }`}
        >
          {IconCurrencyB}
          {SelectCurrencyB}
          {AmountInputB}
        </div>
        {ToggleAction}
        {TransactionSummary}
        <div className={styles.horizontal_line}></div>
        <div className={styles.button}>{BaseButton}</div>
      </section>
    </div>
  );
};

BaseCard.propTypes = {
  displaySettings: PropTypes.bool,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  AmountInputA: PropTypes.element,
  AmountInputB: PropTypes.element,
  BaseButton: PropTypes.element,
  IconCurrencyA: PropTypes.element,
  IconCurrencyB: PropTypes.element,
  SelectCurrencyA: PropTypes.element,
  SelectCurrencyB: PropTypes.element,
  ToggleAction: PropTypes.element,
  TransactionSummary: PropTypes.element,
};

export default BaseCard;
