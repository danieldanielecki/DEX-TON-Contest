import "regenerator-runtime/runtime"; // Fixes "ReferenceError: regeneratorRuntime is not defined".
import getTableSettings from "./getTableSettings";
import styles from "../../styles/PoolsTable.module.scss";
import styles2 from "../../styles/PoolStatistics.module.scss";
import useToggleClassOnHover from "../../hooks/useToggleClassOnHover";
import BaseButton from "../../components/BaseButton";
import GlobalFilter from "./GlobalFilter";
import React from "react";
import Select from "react-select";
import { Cell, Row } from "react-table";
import { ISelect } from "../../interfaces/select";
import { Pool } from "../../interfaces/pool";

const Table = () => {
  const tableSettings = getTableSettings();
  const [isToggleClassOnHover, setIsToggleClassOnHover] =
    useToggleClassOnHover(false);
  const numberOfRecords: ISelect[] = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 25, value: 25 },
    { label: 50, value: 50 },
    { label: 100, value: 100 },
  ];

  const handleChange = (numberOfRecordsObject: ISelect) => {
    tableSettings.setPageSize(Number(numberOfRecordsObject.value));
  };

  return (
    <div>
      <GlobalFilter
        preGlobalFilteredRows={tableSettings.preGlobalFilteredRows}
        globalFilter={tableSettings.globalFilter}
        setGlobalFilter={tableSettings.setGlobalFilter}
      />
      <table className={styles.styled_table} {...tableSettings.getTableProps}>
        <thead>
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
                className={isToggleClassOnHover ? styles.active_row : ""}
                // TODO Raduan: Currently the class "active_row" applies on hover any of the row elements of the table, and it highlights all of the elements as well. Your task is to highlight particular row which is being hovered.
                onMouseEnter={setIsToggleClassOnHover}
                onMouseLeave={setIsToggleClassOnHover}
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
        <tfoot className="rowgroup">
          Page{" "}
          <strong>
            {tableSettings.pageIndex + 1} of {tableSettings.pageOptions.length}
          </strong>{" "}
        </tfoot>
      </table>
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
      <BaseButton
        disabled={!tableSettings.canNextPage}
        onClick={() => tableSettings.nextPage()}
        title="Next"
      />
      <BaseButton
        disabled={!tableSettings.canNextPage}
        onClick={() => tableSettings.gotoPage(tableSettings.pageCount - 1)}
        title="Last"
      />
      <div className={`${styles2.show_wrapper} `}>
        <div style={{ display: "inline-block", maxWidth: 200 }}>
          <input
            aria-describedby="pageSearch"
            className={styles2.form_control}
            id="pageSearch"
            name="pageSearch"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              tableSettings.gotoPage(page);
            }}
            type="number"
          />
        </div>
        <div style={{ display: "inline-block", maxWidth: 200 }}>
          <Select
            onChange={handleChange}
            options={numberOfRecords}
            value={tableSettings.pageSize}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
