import { Pool } from "../../interfaces/pool";
import { Row } from "react-table";

const DefaultColumnFilter = (props: {
  column: { filterValue: string; preFilteredRows: Row<Pool>[]; setFilter: any };
}) => {
  const { column } = props;
  const count: number = column.preFilteredRows.length;

  return (
    <input
      className="form-control"
      value={column.filterValue || ""}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        column.setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
};

export default DefaultColumnFilter;
