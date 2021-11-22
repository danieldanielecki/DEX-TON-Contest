import PropTypes from "prop-types";
import PoolTableItem from "./PoolTableItem";
import styles from "../styles/PoolStatistics.module.scss";
import { Fragment } from "react";
import { Pool } from "../interfaces/pool";

const PoolTable = (props: { pools: Pool[]; queryString: string }) => {
  const { pools, queryString } = props;

  function search(pools: Pool[]) {
    return pools.filter((pool: Pool) => {
      return (
        pool.pair.toString().toLowerCase().indexOf(queryString.toLowerCase()) >
        -1
      );
    });
  }

  return (
    <table className={styles.table}>
      {search(pools).length > 0 ? (
        <Fragment>
          {search(pools).map((pool: Pool) => (
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
