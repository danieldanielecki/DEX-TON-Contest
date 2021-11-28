import styles from "../styles/PoolStatistics.module.scss";
// import PoolTable from "../components/PoolTable";
import PoolsTable from "../components/table/PoolsTable";
import { useEffect, useState } from "react";
// import { POOLS } from "../config/data/pools/dummy-pools"; // In case of working with this the dummy data has been removed, so please use the server-based pools data. The format is the case.
import type { NextPage } from "next";
import store from "../redux/store";
import { setPools } from "../redux/actions/poolsActions";
import createPools from "../redux/helpers/createPools";
import { connect } from "react-redux";
import { clearSelected } from "../redux/actions/selectedActions";

const PoolStatistics: NextPage = (props: {
  setPools: Function;
  clearSelected: Function;
}) => {
  // TODO: It might be deleted later, but first style table.
  // const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState();

  // TODO Katarzyna: the styling has margins from left/right, please figure out what's wrong, I guess some Bootstrap classes.
  // TODO Katarzyna: the PoolTableItem isn't centered, please fix this; should be some Bootstrap/Flexbox-classes related.

  useEffect(() => {
    store.dispatch(clearSelected());
    const asyncPoolsCreate = async () => {
      const pools = await createPools();
      store.dispatch(setPools(pools));
      setItems(pools);
    };
    asyncPoolsCreate();
  }, []);
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

            <div>{items && <PoolsTable pools={items!} />}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapDispatchToProps = () => {
  return {
    setPools,
    clearSelected,
  };
};

const connector = connect(null, mapDispatchToProps);
export default connector(PoolStatistics);
