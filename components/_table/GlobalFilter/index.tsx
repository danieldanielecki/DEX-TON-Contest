import styles from "./styles.module.scss";
import React from "react";
import { useAsyncDebounce, Row } from "react-table";
import { Pool } from "../../../interfaces/pool";

const GlobalFilter = (props: {
  globalFilter: any;
  preGlobalFilteredRows: Row<Pool>[];
  setGlobalFilter: any;
}) => {
  const { globalFilter, preGlobalFilteredRows, setGlobalFilter } = props;

  const count: number = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <form className={`${styles.pool_search_tab_wrapper}`}>
      <input
        aria-describedby="poolSearch"
        className={styles.form_control}
        id="poolSearch"
        name="poolSearch"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search ${count} pools...`}
        type="text"
        value={value || ""}
      />
      <button
        onClick={() => {
          setValue("");
          onChange("");
        }}
        type="reset"
      />
    </form>
  );
};

export default GlobalFilter;
