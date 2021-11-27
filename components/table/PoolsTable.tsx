import "regenerator-runtime/runtime"; // Fixes "ReferenceError: regeneratorRuntime is not defined".
// import getTableSettings from "./getTableSettings"; // TODO Raduan: please outsource the settings here, the component looks too big.
import columnHeaders from "./getTableSettings"; // TODO Raduan: for now I just could outsource this.
import styles from "../../styles/PoolsTable.module.scss";
import styles2 from "../../styles/PoolStatistics.module.scss";
import useToggleClassOnHover from "../../hooks/useToggleClassOnHover";
import BaseButton from "../BaseButton";
import GlobalFilter from "./GlobalFilter";
import React from "react";
import Select from "react-select";
import { Cell, Row } from "react-table";
import { ISelect } from "../../interfaces/select";
import { Pool } from "../../interfaces/pool";
import {
  useTable,
  usePagination,
  useFilters,
  useGlobalFilter,
  useSortBy,
  FilterValue,
  HeaderGroup,
  // Row,
  TableBodyPropGetter,
  TableBodyProps,
  TablePropGetter,
  TableProps,
  TableState,
} from "react-table";
// import { Pool } from "../../interfaces/pool";

const Table = (props: { pools: Pool[] }) => {
  const { pools } = props;
  const getTableSettings = () => {
    let canPreviousPage: boolean;
    let canNextPage: boolean;
    let getTableProps: (propGetter?: TablePropGetter<Pool>) => TableProps;
    let getTableBodyProps: (
      propGetter?: TableBodyPropGetter<Pool>
    ) => TableBodyProps;
    let gotoPage: (updater: ((pageIndex: number) => number) | number) => void;
    let headerGroups: HeaderGroup<Pool>[];
    let nextPage: () => void;
    let page: Array<Row<Pool>>;
    let pageCount: number;
    let pageOptions: number[];
    let preGlobalFilteredRows: Array<Row<Pool>>;
    let prepareRow: (row: Row<any>) => void;
    let previousPage: () => void;
    let setGlobalFilter: (filterValue: FilterValue) => void;
    let setPageSize: (pageSize: number) => void;
    let state: TableState<Pool>;

    const tableSettings = ({
      canPreviousPage: canPreviousPage,
      canNextPage: canNextPage,
      getTableProps: getTableProps,
      getTableBodyProps: getTableBodyProps,
      gotoPage: gotoPage,
      headerGroups: headerGroups,
      nextPage: nextPage,
      page: page,
      pageCount: pageCount,
      pageOptions: pageOptions,
      preGlobalFilteredRows: preGlobalFilteredRows,
      prepareRow: prepareRow,
      previousPage: previousPage,
      setGlobalFilter: setGlobalFilter,
      setPageSize: setPageSize,
      state: state,
    } = useTable(
      {
        columns: columnHeaders,
        data: pools,
        initialState: { pageIndex: 0, pageSize: 5 },
      },
      useFilters,
      useGlobalFilter,
      useSortBy,
      usePagination
    ));
    return tableSettings;
  };

  const tableSettings = getTableSettings();
  const numberOfRecords: ISelect[] = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 25, value: 25 },
    { label: 50, value: 50 },
    { label: 100, value: 100 },
  ];

  // TODO Raduan: the pools are showing from index 0 to 299, make it from 1 to 300.
  const handleChange = (numberOfRecordsObject: ISelect) => {
    tableSettings.setPageSize(Number(numberOfRecordsObject.value));
  };

  const [isToggleClassOnHover, setIsToggleClassOnHover] = useToggleClassOnHover(
    new Array(300).fill(false) // TODO Raduan: make it dynamic now.
  );
  const hooks = tableSettings.data.map((val: any, i: number) => {
    return [isToggleClassOnHover(i), setIsToggleClassOnHover(i)];
  });
  return (
    <div>
      <table className={styles.styled_table} {...tableSettings.getTableProps}>
        <span
          className="text-center"
          style={{ display: "inline-block", marginLeft: 10 }}
        >
          Number of records:
          <Select
            onChange={handleChange}
            options={numberOfRecords}
            value={tableSettings.pageSize}
          />
        </span>
        <thead>
          <tr className="text-center">
            <td colSpan={5}>
              <GlobalFilter
                preGlobalFilteredRows={tableSettings.preGlobalFilteredRows}
                globalFilter={tableSettings.globalFilter}
                setGlobalFilter={tableSettings.setGlobalFilter}
              />
            </td>
          </tr>
          {tableSettings.headerGroups.map((headerGroup) => (
            <tr>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...tableSettings.getTableBodyProps()}>
          {tableSettings.page.map((row: Row<Pool>, i: number) => {
            tableSettings.prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={hooks[i][0] ? styles.active_row : ""}
                onMouseEnter={hooks[i][1]}
                onMouseLeave={hooks[i][1]}
              >
                {row.cells.map((cell: Cell<Pool, any>) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="text-center">
            <td colSpan={5}>
              <BaseButton
                disabled={!tableSettings.canPreviousPage}
                onClick={() => tableSettings.gotoPage(0)}
                title="First"
              />
              <BaseButton
                disabled={!tableSettings.canPreviousPage}
                onClick={() => tableSettings.previousPage()}
                title="Previous"
              />
              <p
                style={{
                  display: "inline-block",
                  margin: 20,
                  verticalAlign: "bottom",
                }}
              >
                Page{" "}
                <strong>
                  {`${tableSettings.state.pageIndex + 1} of ${
                    tableSettings.pageOptions.length
                  }`}
                </strong>{" "}
              </p>
              <BaseButton
                disabled={!tableSettings.canNextPage}
                onClick={() => tableSettings.nextPage()}
                title="Next"
              />
              <BaseButton
                disabled={!tableSettings.canNextPage}
                onClick={() =>
                  tableSettings.gotoPage(tableSettings.pageCount - 1)
                }
                title="Last"
              />
            </td>
          </tr>
          <tr className="text-center">
            <td colSpan={5}>
              <div className={`${styles2.show_wrapper} align-items-center`}>
                <p>Page number</p>
                <input
                  aria-describedby="pageSearch"
                  className={styles2.form_control}
                  id="pageSearch"
                  name="pageSearch"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    tableSettings.gotoPage(page);
                  }}
                  value={tableSettings.state.pageIndex + 1}
                  type="number"
                />
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
