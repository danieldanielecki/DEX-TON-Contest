import styles from "./styles.module.scss";
import useToggleAlert from "../../hooks/useToggleAlert";
import PropTypes from "prop-types";
import SettingsDialog from "../SettingsDialog";
import { Fragment } from "react";

const BaseDialog = (props: {
  subtitle: string;
  summary: string;
  title: string;
  AmountInputA?: any;
  AmountInputB?: any;
  BaseButton: any;
  SelectCurrencyA?: any;
  SelectCurrencyB?: any;
}) => {
  const {
    subtitle,
    summary,
    title,
    AmountInputA,
    AmountInputB,
    BaseButton,
    SelectCurrencyA,
    SelectCurrencyB,
  } = props;
  const [isOpenedSettingsDialog, setIsOpenedSettingsDialog] =
    useToggleAlert(false);

  return (
    <div className={styles.dialog}>
      <div className={styles.menu}>
        <Fragment>
          {/* TODO: It works on second click, dunno why */}
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
      </div>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <span className={styles.subtitle}>{subtitle}</span>
      <section>
        {AmountInputA}
        {SelectCurrencyA}
        {AmountInputB}
        {SelectCurrencyB}
        <p>{summary}</p>
        <div className={styles.button}>{BaseButton}</div>
      </section>
    </div>
  );
};

BaseDialog.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  AmountInputA: PropTypes.object,
  AmountInputB: PropTypes.object,
  BaseButton: PropTypes.object,
  SelectCurrencyA: PropTypes.object,
  SelectCurrencyB: PropTypes.object,
};

export default BaseDialog;
