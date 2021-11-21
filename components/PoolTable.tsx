import PropTypes from "prop-types";
import PoolTableItem from "./PoolTableItem";
import styles from "../styles/PoolStatistics.module.scss";
import { Fragment } from "react";
import { Pool } from "../interfaces/pool";

const PoolTable = (props: { pools: Pool[] }) => {
  const { pools } = props;

  return (
    <table className={styles.table}>
      {pools.length > 0 ? (
        <Fragment>
          {pools.map((pool: Pool) => (
            <PoolTableItem pool={pool} key={pool.id} />
          ))}
        </Fragment>
      ) : (
        <h4>No results for searched pools.</h4>
      )}
    </table>
  );
};

PoolTable.propTypes = {
  pools: PropTypes.array.isRequired,
};

export default PoolTable;
