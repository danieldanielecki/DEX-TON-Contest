
import styles from "../styles/PerformTransaction.module.scss";
import PropTypes from "prop-types";
import React from "react";

import SelectCurrency from "./SelectCurrency";

const PerformTransaction = (props: { isBuy?: boolean }) => {
  const { isBuy } = props;


  return (
    <div className="">
      <div>
        {/* <select className={`${dropdownVisible ? styles.drop_content : styles.user_link}`}> */}
        <div
        // className={`flex-column ${dropdownVisible ? `${styles.drop_content} d-flex` : styles.drop_close}`}

        >
          <SelectCurrency isOne={false} onSelectCurrency={(e) => console.log(e)}
            startCurrency="btc" />
          {/* {coins.map((currency: { name: string, id: string, symbol: string }) =>
          
          (<button key={currency.id} className={styles.option_button}>
            <BaseIcon name={currency.symbol} />
            <span> {currency.name} </span>
          </button>)
          )} */}
        </div>
      </div>
      {/* <div className={`${styles.wrap} text-center`}>
            <div className={`${styles.rangee_wrapper} d-inline-flex align-items-center`}>
              <div className={`${styles.number} d-flex align-items-center justify-content-center`}>
                <p>10</p>
              </div>
            </div>
          </div>
          <div className={`${styles.txt_wrapper} text-center`}>
            <div className="d-flex align-items-center justify-content-between">
              <p className={styles.sha}>10 Shares * $1.85: </p>
              <p className={styles.val}>$18.50</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className={styles.sha}>2.5% Fee: </p>
              <p className={styles.val}>$0.46</p>
            </div>
            <div
              className={`${styles.tot} d-flex align-items-center justify-content-between`}
            >
              <p className={styles.sha}>Total: </p>
              <p className={styles.val}>$18.96</p>
            </div>

            <BaseButton title={isBuy ? "Buy" : "Sell"} />
          </div> */}

    </div>
  );
};

PerformTransaction.propTypes = {
  isBuy: PropTypes.bool,
};

export default PerformTransaction;