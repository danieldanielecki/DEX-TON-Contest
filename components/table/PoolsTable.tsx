import "regenerator-runtime/runtime"; // Fixes "ReferenceError: regeneratorRuntime is not defined".
import getTableSettings from "./getTableSettings";
import styles from "../../styles/PoolsTable.module.scss";
import useToggleClassOnHover from "../../hooks/useToggleClassOnHover";
import BaseButton from "../../components/BaseButton";
import GlobalFilter from "./GlobalFilter";
import React from "react";
import { Cell, Row } from "react-table";
import { Pool } from "../../interfaces/pool";

const Table = () => {
  const tableSettings = getTableSettings();
  const [isToggleClassOnHover, setIsToggleClassOnHover] =
    useToggleClassOnHover(false);

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
      </table>
      {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
      <ul className="pagination">
        <li
          className="page-item"
          onClick={() => tableSettings.gotoPage(0)}
          //   disabled={!canPreviousPage}
        >
          <BaseButton title="First" />
        </li>
        <li
          className="page-item"
          onClick={() => tableSettings.previousPage()}
          //   disabled={!canPreviousPage}
        >
          <a className="page-link">{"<"}</a>
        </li>
        <li
          className="page-item"
          onClick={() => tableSettings.nextPage()}
          //   disabled={!canNextPage}
        >
          <a className="page-link">{">"}</a>
        </li>
        <li
          className="page-item"
          onClick={() => tableSettings.gotoPage(tableSettings.pageCount - 1)}
          //   disabled={!canNextPage}
        >
          <BaseButton title="Last" />
        </li>
        <li>
          <a className="page-link">
            Page{" "}
            <strong>
              {tableSettings.pageIndex + 1} of{" "}
              {tableSettings.pageOptions.length}
            </strong>{" "}
          </a>
        </li>
        <li>
          <a className="page-link">
            <input
              className="form-control"
              type="number"
              defaultValue={tableSettings.pageIndex + 1}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                tableSettings.gotoPage(page);
              }}
              style={{ width: "100px", height: "20px" }}
            />
          </a>
        </li>{" "}
        <select
          className="form-control"
          value={tableSettings.pageSize}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            tableSettings.setPageSize(Number(e.target.value));
          }}
          style={{ width: "120px", height: "38px" }}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </ul>
    </div>
  );
};

export default Table;
