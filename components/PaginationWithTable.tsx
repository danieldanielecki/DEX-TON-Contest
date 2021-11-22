import "regenerator-runtime/runtime"; // Fixes "ReferenceError: regeneratorRuntime is not defined".
import useColumnsIdentifiers from "../hooks/useColumnsIdentifiers";
import React from "react";
import Table from "./table/Table";
import { POOLS } from "../config/data/pools/dummy-pools";

function PaginationTableComponent() {
  const columns = useColumnsIdentifiers();

  return <Table columns={columns} data={POOLS} />;
}

export default PaginationTableComponent;
