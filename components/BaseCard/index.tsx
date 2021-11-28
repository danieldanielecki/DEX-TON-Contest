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
  SelectCurrencyA?: ReactElement<any, any>;
  SelectCurrencyB?: ReactElement<any, any>;
  ToggleAction?: ReactElement<any, any>;
}) => {
  const {
    displaySettings,
    subtitle,
    title,
    AmountInputA,
    AmountInputB,
    BaseButton,
    SelectCurrencyA,
    SelectCurrencyB,
    ToggleAction,
  } = props;
  const [isOpenedSettingsDialog, setIsOpenedSettingsDialog] =
    useToggleAlert(false);

  return (
    <div className={styles.card}>
      <div className={styles.menu}>
        {displaySettings && (
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
        )}
      </div>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
      <section>
        {SelectCurrencyA}
        {AmountInputA}
        {SelectCurrencyB}
        {AmountInputB}
        {ToggleAction}
        <div className={styles.button}>{BaseButton}</div>
      </section>
    </div>
  );
};

BaseCard.propTypes = {
  displaySettings: PropTypes.string,
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
