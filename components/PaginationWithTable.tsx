import "regenerator-runtime/runtime";
import React from "react";
import { POOLS } from "../config/data/pools/dummy-pools";
import Table from "./table/Table";

function PaginationTableComponent() {
  const columns = React.useMemo(
    () => [
      {
        Header: "All Pools",
        columns: [
          {
            Header: "#",
            accessor: "id",
          },
          {
            Header: "Pool",
            accessor: "pair",
          },
          {
            Header: "% 24h",
            accessor: "priceChangePercentage24h",
          },
          {
            Header: "Volume",
            accessor: "volume",
          },
          {
            Header: "Market Cap",
            accessor: "marketCap",
          },
        ],
      },
    ],
    []
  );

  return <Table columns={columns} data={POOLS} />;
}

export default PaginationTableComponent;
