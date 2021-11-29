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
                <div
                  className={`${styles.tooltip1} d-flex align-items-center justify-content-between`}
                >
                  <ToggleOnOffSwitch
                    checked={autoRouter}
                    id="auto_router"
                    onChange={onAutoRouterChange}
                    title="Auto Router"
                  />
                  <i className={`${styles.tooltip}`}></i>
                  <svg
                    className={styles.popup_bg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 300 130"
                    height="130"
                    width="200"
                  >
                    <path
                      d="M36.5 12.695c15.9-2.4 32.556-4.284 82.977-3.815 79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022z"
                      fill="#303757"
                      stroke="#fff"
                    />
                  </svg>
                  <svg
                    className={styles.popup_outline}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 300 130"
                    height="130"
                    width="200"
                  >
                    <g stroke-width="2" stroke-linecap="round">
                      <path
                        className={styles.popup_outline_left}
                        d="M233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022 15.897-2.4 32.554-4.284 82.975-3.815"
                        fill="none"
                        stroke="#303757"
                      />
                      <path
                        className={styles.popup_outline_right}
                        d="M119.477 8.88c79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129"
                        fill="none"
                        stroke="#303757"
                      />
                    </g>
                  </svg>
                  <span className={styles.popup_text}>
                    Automatic, more efficient
                    <br />
                    route leveraging our API.
                  </span>
                </div>
                <div>
                  <div
                    className={`${styles.tooltip2} d-flex align-items-center justify-content-between`}
                  >
                    <ToggleOnOffSwitch
                      checked={disableMultihops}
                      id="disable_multihops"
                      onChange={onDisableMultihopsChange}
                      title="Disable Multihops"
                    />
                    <i className={`${styles.tooltip}`}></i>
                    <svg
                      className={styles.popup_bg}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 300 130"
                      height="130"
                      width="200"
                    >
                      <path
                        d="M36.5 12.695c15.9-2.4 32.556-4.284 82.977-3.815 79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022z"
                        fill="#303757"
                        stroke="#fff"
                      />
                    </svg>
                    <svg
                      className={styles.popup_outline}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 300 130"
                      height="130"
                      width="200"
                    >
                      <g stroke-width="2" stroke-linecap="round">
                        <path
                          className={styles.popup_outline_left}
                          d="M233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022 15.897-2.4 32.554-4.284 82.975-3.815"
                          fill="none"
                          stroke="#303757"
                        />
                        <path
                          className={styles.popup_outline_right}
                          d="M119.477 8.88c79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129"
                          fill="none"
                          stroke="#303757"
                        />
                      </g>
                    </svg>
                    <span className={styles.popup_text}>
                      Restricts swaps to enable
                      <br />
                      direct pairs (pools) only.
                    </span>
                  </div>
                </div>
                <div>
                  <div
                    className={`${styles.tooltip3} d-flex align-items-center justify-content-between`}
                  >
                    <ToggleOnOffSwitch
                      checked={expertMode}
                      id="expert_mode"
                      onChange={onExpertModeChange}
                      title="Expert Mode"
                    />
                    <i className={`${styles.tooltip}`}></i>
                    <svg
                      className={styles.popup_bg}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 300 130"
                      height="130"
                      width="200"
                    >
                      <path
                        d="M36.5 12.695c15.9-2.4 32.556-4.284 82.977-3.815 79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022z"
                        fill="#303757"
                        stroke="#fff"
                      />
                    </svg>
                    <svg
                      className={styles.popup_outline}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 300 130"
                      height="130"
                      width="200"
                    >
                      <g stroke-width="2" stroke-linecap="round">
                        <path
                          className={styles.popup_outline_left}
                          d="M233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022 15.897-2.4 32.554-4.284 82.975-3.815"
                          fill="none"
                          stroke="#303757"
                        />
                        <path
                          className={styles.popup_outline_right}
                          d="M119.477 8.88c79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129"
                          fill="none"
                          stroke="#303757"
                        />
                      </g>
                    </svg>
                    <span className={styles.popup_text}>
                      High slippage trades will
                      <br />
                      be enabled, at your risk.
                    </span>
                  </div>
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
