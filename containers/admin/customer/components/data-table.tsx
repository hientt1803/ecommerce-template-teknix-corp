"use client";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { Button } from "@/components/ui/button";
import { setActiveCustomer } from "@/stores/feature/admin/customer-slice";
import {
  setShowDialogDelete,
  setShowDialogUpdate,
} from "@/stores/feature/admin/global-slice";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import { RowClickedEvent } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

export const MainDataTable = () => {
  // redux
  const dispatch = useDispatch();

  // ag-grid variable
  const [rowData, setRowData] = useState([]);
  const CustomActionField = (params: any) => {
    return (
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() => dispatch(setShowDialogUpdate(true))}
        >
          Edit
        </Button>
        <Button
          variant={"destructive"}
          onClick={() => dispatch(setShowDialogDelete(true))}
        >
          Delete
        </Button>
      </div>
    );
  };

  const [colDefs, setColDefs] = useState<any[]>([
    // {
    //   field: "id",
    //   cellRenderer: (params: any) => {
    //     return (
    //       <>
    //         Value is <b>{params.value}</b>
    //       </>
    //     );
    //   },
    // },
    { field: "mission" },
    {
      field: "company",
      cellRenderer: (params: any) => {
        return (
          <>
            Value is <b>{params.value}</b>
          </>
        );
      },
    },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" },
    {
      headerName: "Actions",
      cellRenderer: CustomActionField,
    },
  ]);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
    };
  }, []);

  return (
    <div className={"ag-theme-quartz w-full h-[600px]"}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        suppressRowClickSelection={true}
        suppressServerSideFullWidthLoadingRow={true}
        // onCellClicked={(event: CellClickedEvent) => {
        //   const rowId = event.rowIndex;
        //   console.log(rowId);
        // }}
        onRowClicked={(event: RowClickedEvent) => {
          const value = event.data;
          dispatch(setActiveCustomer(value));
          // dispatch(setShowDialogUpdate(true));
        }}
        rowSelection="single"
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 25, 50, 100]}
      />
    </div>
  );
};
