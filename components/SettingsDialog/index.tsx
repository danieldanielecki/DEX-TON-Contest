import styles from "./styles.module.scss";
import useToggleAlert from "../../hooks/useToggleAlert";
import AmountInput from "../AmountInput";
import BaseButton from "../BaseButton";
import PropTypes from "prop-types";
import ToggleOnOffSwitch from "../ToggleOnOffSwitch";
import { useState } from "react";

const SettingsDialog = (props: {
  onOpenSettingsDialog: boolean;
  subtitle: string;
  title: string;
}) => {
  const { onOpenSettingsDialog, subtitle, title } = props;

  const [autoRouter, setAutoRouter] = useState(false);
  const [disableMultihops, setDisableMultihops] = useState(false);
  const [expertMode, setExpertMode] = useState(false);
  const [isOpenedSettingsDialog, setIsOpenedSettingsDialog] =
    useToggleAlert(onOpenSettingsDialog);

  const onAutoRouterChange = (checked: boolean) => {
    setAutoRouter(checked);
  };
  const onDisableMultihopsChange = (checked: boolean) => {
    setDisableMultihops(checked);
  };
  const onExpertModeChange = (checked: boolean) => {
    setExpertMode(checked);
  };

  return (
    <div>
      {isOpenedSettingsDialog && (
        <div className={styles.backdrop}>
          <div className={styles.dialog}>
            <div className={styles.menu}>
              <a
                href="#modal-closed"
                className={styles.link_to_close_dialog}
                onClick={() => setIsOpenedSettingsDialog(false)}
              ></a>
            </div>
            <div className={styles.header}>
              <h2>{title}</h2>
            </div>
            <div className={styles.subtitle}>
              <span>{subtitle}</span>
            </div>
            <section>
              <div className="d-flex align-items-center justify-content-evenly">
                <span className={styles.option}>
                  Slippage Tolerance (seconds)
                </span>
                <div>
                  <AmountInput />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-evenly">
                <span className={styles.option}>
                  Transaction Deadline (minutes)
                </span>
                <div>
                  <AmountInput />
                </div>
              </div>
              <div className={styles.toggles}>
                <div>
                  <ToggleOnOffSwitch
                    checked={autoRouter}
                    id="auto_router"
                    onChange={onAutoRouterChange}
                    title="Auto Router"
                  />
                </div>
                <div>
                  <ToggleOnOffSwitch
                    checked={disableMultihops}
                    id="disable_multihops"
                    onChange={onDisableMultihopsChange}
                    title="Disable Multihops"
                  />
                </div>
                <div>
                  <ToggleOnOffSwitch
                    checked={expertMode}
                    id="expert_mode"
                    onChange={onExpertModeChange}
                    title="Expert Mode"
                  />
                </div>
              </div>
              {/* TODO: Align BaseButton to listen to onClick event listener. */}
              <div
                className={styles.button}
                onClick={() => setIsOpenedSettingsDialog(false)}
              >
                <BaseButton title={"Confirm"} />
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

SettingsDialog.propTypes = {
  onOpenSettingsDialog: PropTypes.bool.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SettingsDialog;
