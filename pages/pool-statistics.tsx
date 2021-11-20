import styles from "../styles/PoolStatistics.module.scss";
import BaseButton from "../components/BaseButton";
import Head from "next/head";
import Image from "next/image";

import { useState, Fragment } from "react";
import { Pool } from "../interfaces/pool";
import { POOLS } from "../config/data/pools/dummy-pools";
import type { NextPage } from "next";
import PoolTableItem from "../components/PoolTableItem";


const PoolStatistics: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  function onSortClick() {
    console.log(
      "TODO Raduan: please implement sorting logic here. On first click ascending, and on second toggle it to descending. Third click ascending, fourth descending, etc., i.e. toggle sorting mechanism for the 'pool.title'. You can follow https://www.freakyjolly.com/react-table-tutorial/ & https://react-table.tanstack.com"
    );
  }

  // TODO Raduan: you can try to implement pagination as well, information is also included in https://www.freakyjolly.com/react-table-tutorial/ how to do it.

  function search(pools: Pool[]) {
    return pools.filter((pool: Pool) => {
      return (
        pool.title.toString().toLowerCase().indexOf(searchQuery.toLowerCase()) >
        -1
      );
    });
  }

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
              <div className={`${styles.tab_btn_wrapper} text-center`}>
                <BaseButton title="Best" />
                <BaseButton title="Worst" />
                <BaseButton title="Recent" />
                <BaseButton title="Sort" />
              </div>
              <div className={styles.pool_search_tab_wrapper}>
                <form action="#" method="post">
                  <input
                    aria-describedby="poolSearch"
                    className={styles.form_control}
                    id="poolSearch"
                    name="poolSearch"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Pool"
                    required
                    type="text"
                  />
                  <BaseButton title="Search" />
                  {/* <i className="fab fa-sistrix"></i> */}
                </form>
              </div>
              <div
                id="best"
                className={`${styles.pool_search_tabs} ${styles.active}`}
              >
                <div className={styles.pools_responsive_table_wrapper}>
                  <table className={styles.table}>
                    {search(POOLS).length > 0 ? (
                      <Fragment>
                        {search(POOLS).map((pool: Pool) => (
                          <PoolTableItem pool={pool} key={pool.id} />
                        ))}
                      </Fragment>
                    ) : (
                      <h4>No results for searched pools.</h4>
                    )}
                  </table>
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
