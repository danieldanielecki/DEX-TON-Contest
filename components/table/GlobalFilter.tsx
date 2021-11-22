import React from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = (props: {
  globalFilter: any;
  preGlobalFilteredRows: any;
  setGlobalFilter: any;
}) => {
  const { globalFilter, preGlobalFilteredRows, setGlobalFilter } = props;

  const count = preGlobalFilteredRows.length;
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
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </span>
  );
};

export default GlobalFilter;
