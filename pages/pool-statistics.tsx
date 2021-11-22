import styles from "../styles/PoolStatistics.module.scss";
import PoolTable from "../components/PoolTable";
import PoolsTable from "../components/table/PoolsTable";
import { useState } from "react";
import { POOLS } from "../config/data/pools/dummy-pools";
import type { NextPage } from "next";

const PoolStatistics: NextPage = () => {
  // TODO: It might be deleted later, but first style table.
  // const [searchQuery, setSearchQuery] = useState("");

  // TODO Katarzyna: the styling has margins from left/right, please figure out what's wrong, I guess some Bootstrap classes.
  // TODO Katarzyna: the PoolTableItem isn't centered, please fix this; should be some Bootstrap/Flexbox-classes related.
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="container-fluid">
          <div className="row">
            <div className={`${styles.pools_info} text-center`}>
              <h1 className={styles.name}>Pools</h1>
              <p>Trading</p>
            </div>
            <div className={styles.pools_tab_wrapper}>
              <div
                id="best"
                className={`${styles.pool_search_tabs} ${styles.active}`}
              >
                <div className={styles.pools_responsive_table_wrapper}>
                  {/* <PoolTable pools={POOLS} queryString={searchQuery} /> */}
                  <PoolsTable />
                </div>
                <div className={`${styles.show_wrapper} text-center`}>
                  <a href="#">View More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PoolStatistics;
