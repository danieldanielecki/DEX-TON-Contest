import "regenerator-runtime/runtime"; // Fixes "ReferenceError: regeneratorRuntime is not defined".
import React from "react";

const TableHeader = (props: { headerGroup: any }) => {
  const { headerGroup } = props;

  return (
    <tr>
      {headerGroup.headers.map((column: any) => (
        <th
          {...column.getHeaderProps(column.getSortByToggleProps())}
          title={`Sort ${column.render("Header")}`}
        >
          {column.render("Header")}
          <span>
            {column.isSorted ? (column.isSortedDesc ? " ⬆" : " ⬇") : ""}
          </span>
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
