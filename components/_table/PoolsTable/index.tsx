import "regenerator-runtime/runtime"; // Fixes "ReferenceError: regeneratorRuntime is not defined".
import getTableSettings from "../_helpers/getTableSettings";
import useToggleClassOnHover from "../../../hooks/useToggleClassOnHover";
import styles from "./styles.module.scss";
import GlobalFilter from "../GlobalFilter";
import React from "react";
import Select from "react-select";
import TableFooter from "../TableFooter";
import TableHeader from "../TableHeader";
import { Cell, Row } from "react-table";
import { ISelect } from "../../../interfaces/select";
import { Pool } from "../../../interfaces/pool";

const Table = (props: { pools: Pool[] }) => {
  const { pools } = props;
  const tableSettings = getTableSettings(pools);
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

  const [isToggleClassOnHover, setIsToggleClassOnHover] = useToggleClassOnHover(
    new Array(pools.length).fill(false)
  );
  const hooks = tableSettings.data.map((val: any, i: number) => {
    return [isToggleClassOnHover(i), setIsToggleClassOnHover(i)];
  });
  return (
    <div style={{ overflowX: "auto" }}>
      <table className={styles.styled_table} {...tableSettings.getTableProps}>
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
          <tr>
            <td colSpan={2}>
              <span style={{ marginRight: 10 }}>Number of records:</span>
              <Select
                onChange={handleChange}
                options={numberOfRecords}
                value={tableSettings.pageSize}
              />
            </td>
          </tr>
          {tableSettings.headerGroups.map((headerGroup) => (
            <TableHeader headerGroup={headerGroup} />
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
          <TableFooter tableSettings={tableSettings} />
          <tr className="text-center">
            <td colSpan={5}>
              <div className={`${styles.show_wrapper} align-items-center`}>
                <p>Page number</p>
                <input
                  aria-describedby="pageSearch"
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