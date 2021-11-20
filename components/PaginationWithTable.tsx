// src/components/pagination.table.js
import "regenerator-runtime/runtime";
import React from "react";

import {
  useTable,
  usePagination,
  useFilters,
  useGlobalFilter,
  useSortBy,
  useAsyncDebounce,
} from "react-table";
import "react-table";

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: any) {
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
}

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}: any) {
  const count = preFilteredRows.length;

  return (
    <input
      className="form-control"
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

function Table({ columns, data }: any) {
  // Use the state and functions returned from useTable to build your UI
  const defaultColumn = React.useMemo(
    () => ({
      // Default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    preGlobalFilteredRows,
    setGlobalFilter,
    nextPage,
    previousPage,
    setPageSize,
    state,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // Render the UI for your table
  return (
    <div>
      <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
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
          onClick={() => gotoPage(0)}
          //   disabled={!canPreviousPage}
        >
          <a className="page-link">First</a>
        </li>
        <li
          className="page-item"
          onClick={() => previousPage()}
          //   disabled={!canPreviousPage}
        >
          <a className="page-link">{"<"}</a>
        </li>
        <li
          className="page-item"
          onClick={() => nextPage()}
          //   disabled={!canNextPage}
        >
          <a className="page-link">{">"}</a>
        </li>
        <li
          className="page-item"
          onClick={() => gotoPage(pageCount - 1)}
          //   disabled={!canNextPage}
        >
          <a className="page-link">Last</a>
        </li>
        <li>
          <a className="page-link">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </a>
        </li>
        <li>
          <a className="page-link">
            <input
              className="form-control"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px", height: "20px" }}
            />
          </a>
        </li>{" "}
        <select
          className="form-control"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
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
}

function PaginationTableComponent() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );

  const data = [
    {
      firstName: "committee-c15dw",
      lastName: "editor-ktsjo",
      age: 3,
      visits: 46,
      progress: 75,
      status: "relationship",
    },
    {
      firstName: "midnight-wad0y",
      lastName: "data-7h4xf",
      age: 1,
      visits: 56,
      progress: 15,
      status: "complicated",
    },
    {
      firstName: "tree-sbdb0",
      lastName: "friendship-w8535",
      age: 1,
      visits: 45,
      progress: 66,
      status: "single",
    },
    {
      firstName: "chin-borr8",
      lastName: "shirt-zox8m",
      age: 0,
      visits: 25,
      progress: 67,
      status: "complicated",
    },
    {
      firstName: "women-83ef0",
      lastName: "chalk-e8xbk",
      age: 9,
      visits: 28,
      progress: 23,
      status: "relationship",
    },
    {
      firstName: "women-83ef0",
      lastName: "chalk-e8xbk",
      age: 9,
      visits: 28,
      progress: 23,
      status: "relationship",
    },
    {
      firstName: "women-83ef0",
      lastName: "chalk-e8xbk",
      age: 9,
      visits: 28,
      progress: 23,
      status: "relationship",
    },
    {
      firstName: "women-83ef0",
      lastName: "chalk-e8xbk",
      age: 9,
      visits: 28,
      progress: 23,
      status: "relationship",
    },
    {
      firstName: "women-83ef0",
      lastName: "chalk-e8xbk",
      age: 9,
      visits: 28,
      progress: 23,
      status: "relationship",
    },
    {
      firstName: "women-83ef0",
      lastName: "chalk-e8xbk",
      age: 9,
      visits: 28,
      progress: 23,
      status: "relationship",
    },
    {
      firstName: "women-83ef0",
      lastName: "chalk-e8xbk",
      age: 9,
      visits: 28,
      progress: 23,
      status: "relationship",
    },
    {
      firstName: "women-83ef0",
      lastName: "chalk-e8xbk",
      age: 9,
      visits: 28,
      progress: 23,
      status: "relationship",
    },
    {
      firstName: "women-83ef0",
      lastName: "chalk-e8xbk",
      age: 9,
      visits: 28,
      progress: 23,
      status: "relationship",
    },
    {
      firstName: "women-83ef0",
      lastName: "chalk-e8xbk",
      age: 9,
      visits: 28,
      progress: 23,
      status: "relationship",
    },
    {
      firstName: "women-83ef0",
      lastName: "chalk-e8xbk",
      age: 9,
      visits: 28,
      progress: 23,
      status: "relationship",
    },
    {
      firstName: "women-83ef0",
      lastName: "chalk-e8xbk",
      age: 9,
      visits: 28,
      progress: 23,
      status: "relationship",
    },
  ];
  console.log(JSON.stringify(data));

  return <Table columns={columns} data={data} />;
}

export default PaginationTableComponent;
