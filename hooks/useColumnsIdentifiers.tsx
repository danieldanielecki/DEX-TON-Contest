import React from "react";

export default function useColumnsIdentifiers() {
  return React.useMemo(
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
}
