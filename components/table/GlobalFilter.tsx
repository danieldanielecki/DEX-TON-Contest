import React from "react";
import { useAsyncDebounce, Row } from "react-table";
import { Pool } from "../../interfaces/pool";

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
    <span>
      Search:{" "}
      <input
        className="form-control"
        value={value || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </span>
  );
};

export default GlobalFilter;
