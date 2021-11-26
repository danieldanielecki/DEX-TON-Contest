import styles from "../styles/PoolStatistics.module.scss";
import PoolTable from "../components/PoolTable";
import PoolsTable from "../components/table/PoolsTable";
import { useState, useEffect } from "react";
// import { POOLS } from "../config/data/pools/dummy-pools";
import type { NextPage } from "next";
import store from '../redux/store';
import { setPools } from '../redux/actions/poolsActions';
import createPools from '../redux/helpers/createPools';
import { connect } from "react-redux";

const PoolStatistics: NextPage = (props: {setPools: Function}) => {
  // TODO: It might be deleted later, but first style table.
  // const [searchQuery, setSearchQuery] = useState("");

  // TODO Katarzyna: the styling has margins from left/right, please figure out what's wrong, I guess some Bootstrap classes.
  // TODO Katarzyna: the PoolTableItem isn't centered, please fix this; should be some Bootstrap/Flexbox-classes related.

  useEffect(() => {
    const asyncPoolsCreate = async () => {
      const pools = await createPools();
      store.dispatch(setPools(pools))
    }
    asyncPoolsCreate();
  })
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="container-fluid">
          <div className={`${styles.pools_info} text-center`}>
            <h1 className={styles.name}>Pools</h1>
            <p>Trading</p>
          </div>
          <div className={styles.pools_responsive_table_wrapper}>
            {/* <PoolTable pools={POOLS} queryString={searchQuery} /> */}
            <PoolsTable />
          </div>
        </div>
      </main>
    </div>
  );
};

const mapDispatchToProps = () => {
  return {
    setPools,
  };
};

const connector = connect(null, mapDispatchToProps);
export default connector(PoolStatistics);
