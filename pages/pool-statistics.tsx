import createPools from "../redux/helpers/createPools";
import store from "../redux/store";
import styles from "../styles/PoolStatistics.module.scss";
import PoolsTable from "../components/_table/PoolsTable";
import { clearSelected } from "../redux/actions/selectedActions";
import { connect } from "react-redux";
import { setPools } from "../redux/actions/poolsActions";
import { useEffect, useState } from "react";
import type { NextPage } from "next";

// @ts-ignore
const PoolStatistics: NextPage = (props: {
  setPools: Function;
  clearSelected: Function;
}) => {
  const [items, setItems] = useState();

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
    <main>
      <div className="container-fluid">
        <div className={`${styles.pools_info} text-center`}>
          <h1 className={styles.label}>Pools</h1>
          <p>Trading</p>
        </div>
        <div className={styles.pools_responsive_table_wrapper}>
          <div>{items && <PoolsTable pools={items!} />}</div>
        </div>
      </div>
    </main>
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
