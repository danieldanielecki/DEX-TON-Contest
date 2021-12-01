import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import { Fragment } from "react";

const BaseTooltip = (props: {
  firstLineText: string;
  secondLineText: string;
  tooltipNumber: number;
}) => {
  const { firstLineText, secondLineText, tooltipNumber } = props;

  return (
    <Fragment>
      <i className={`${styles.tooltip}`}></i>
      <svg
        className={styles.popup_bg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 130"
        height="130"
        width="200"
        style={
          tooltipNumber === 1
            ? { top: "11rem" }
            : tooltipNumber === 2
            ? { top: "14.5rem" }
            : { top: "18rem" }
        }
      >
        <path
          d="M36.5 12.695c15.9-2.4 32.556-4.284 82.977-3.815 79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022z"
          fill="#0088cc"
          stroke="#fff"
        />
      </svg>
      <svg
        className={styles.popup_outline}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 130"
        height="130"
        width="200"
        style={
          tooltipNumber === 1
            ? { top: "11rem" }
            : tooltipNumber === 2
            ? { top: "14.5rem" }
            : { top: "18rem" }
        }
      >
        <g strokeWidth="2" stroke-linecap="round">
          <path
            className={styles.popup_outline_left}
            d="M233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022 15.897-2.4 32.554-4.284 82.975-3.815"
            fill="none"
            stroke="#0088cc"
          />
          <path
            className={styles.popup_outline_right}
            d="M119.477 8.88c79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129"
            fill="none"
            stroke="#0088cc"
          />
        </g>
      </svg>
      <span
        className={styles.popup_text}
        style={
          tooltipNumber === 1
            ? { top: "12.35rem" }
            : tooltipNumber === 2
            ? { top: "15.85rem" }
            : { top: "19.35rem" }
        }
      >
        {firstLineText}
        <br />
        {secondLineText}
      </span>
    </Fragment>
  );
};

BaseTooltip.propTypes = {
  firstLineText: PropTypes.string.isRequired,
  secondLineText: PropTypes.string.isRequired,
  tooltipNumber: PropTypes.number.isRequired,
};

export default BaseTooltip;
