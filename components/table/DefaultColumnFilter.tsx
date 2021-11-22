const DefaultColumnFilter = (props: {
  column: { filterValue: any; preFilteredRows: any; setFilter: any };
}) => {
  const { column } = props;
  const count = column.preFilteredRows.length;

  return (
    <input
      className="form-control"
      value={column.filterValue || ""}
      onChange={(e) => {
        column.setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
};

export default DefaultColumnFilter;
