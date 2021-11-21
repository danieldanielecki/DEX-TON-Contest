import dynamic from "next/dynamic";
import styles from "../styles/PoolStatistics.module.scss";
import BaseButton from "./BaseButton";
import PropTypes from "prop-types";
import { faCaretUp, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pool } from "../interfaces/pool";
import { CHARTS } from "../config/data/pools/dummy-charts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PoolTableItem = (props: { pool: Pool }) => {
  const { pool } = props;
  return (
    <tr>
      <td className={styles.profile_info}>
        <div className="d-flex align-items-center justify-content-start">
          <div className={styles.wrapper}>
            <img alt={pool.pair} src="/avatar_1.png" title={pool.pair} />
          </div>
          <div className={styles.pool_name}>
            <p>{pool.pair}</p>
          </div>
        </div>
      </td>
      <td className={styles.price_range}>
        <div className="d-flex align-items-center justify-content-center">
          <div className={styles.price}>
            <p>
              <FontAwesomeIcon icon={faDollarSign} />
              3.91
            </p>
            <p>
              <FontAwesomeIcon icon={faCaretUp} />
              +8.12
            </p>
          </div>
          <Chart
            height={CHARTS.chart.height}
            options={CHARTS.options}
            series={CHARTS.series}
            type="area"
            width={CHARTS.chart.width}
          />
        </div>
      </td>
      <td>
        <BaseButton title="Buy" />
        <BaseButton title="Sell" />
      </td>
    </tr>
  );
};

PoolTableItem.propTypes = {
  pool: PropTypes.object.isRequired,
};

export default PoolTableItem;
