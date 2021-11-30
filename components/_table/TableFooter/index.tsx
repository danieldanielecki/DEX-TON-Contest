import "regenerator-runtime/runtime"; // Fixes "ReferenceError: regeneratorRuntime is not defined".
import React from "react";
import BaseButton from "../../BaseButton";

const TableFooter = (props: { tableSettings: any }) => {
  const { tableSettings } = props;
  return (
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
          onClick={() => tableSettings.gotoPage(tableSettings.pageCount - 1)}
          title="Last"
        />
      </td>
    </tr>
  );
};

export default TableFooter;
