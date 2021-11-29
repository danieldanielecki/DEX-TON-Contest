import {
  useTable,
  usePagination,
  useFilters,
  useGlobalFilter,
  useSortBy,
  FilterValue,
  HeaderGroup,
  Row,
  TableBodyPropGetter,
  TableBodyProps,
  TablePropGetter,
  TableProps,
  TableState,
} from "react-table";
import { Pool } from "../../interfaces/pool";

const columnHeaders = [
  {
    Header: "All Pools",
    columns: [
      {
        Header: "#",
        accessor: (_row: Row, index: number) => index + 1,
      },
      {
        Header: "Pool",
        accessor: "pair",
      },
      {
        Header: "24H (%)",
        accessor: "priceChangePercentage24h",
      },
      {
        Header: "Volume [$M]",
        accessor: "volume",
      },
      {
        Header: "Market Cap [$M]",
        accessor: "marketCap",
      },
    ],
  },
];

const getTableSettings = (pools: Pool[]) => {
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

export default getTableSettings;
