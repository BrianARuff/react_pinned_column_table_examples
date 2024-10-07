// src/TableComponent.jsx

import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnPinningState,
} from "@tanstack/react-table";
import { columns, data } from "./data";
import "./TableComTableComponentTanStack.css";

export function TableComTableComponentTanStack() {
  const [columnPinning] = useState<ColumnPinningState>({
    left: ["id"], // Pin the 'ID' column
    right: ["status"], // Pin the 'Status' column
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      columnPinning,
    },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          width: "100%",
          overflowX: "auto",
          overflowY: "auto",
          position: "relative",
          maxHeight: "600px", // Set a max height if needed
        }}
      >
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            minWidth: "max-content",
          }}
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const isPinnedLeft = columnPinning.left?.includes(
                    header.column.id
                  );
                  const isPinnedRight = columnPinning.right?.includes(
                    header.column.id
                  );

                  return (
                    <th
                      key={header.id}
                      style={{
                        borderBottom: "1px solid black",
                        padding: "5px",
                        backgroundColor:
                          isPinnedLeft || isPinnedRight ? "white" : "white",
                        position:
                          isPinnedLeft || isPinnedRight ? "sticky" : "static",
                        left: isPinnedLeft ? 0 : undefined,
                        right: isPinnedRight ? 0 : undefined,
                        zIndex: isPinnedLeft || isPinnedRight ? 2 : 1,
                        minWidth: isPinnedLeft
                          ? "80px"
                          : isPinnedRight
                          ? "100px"
                          : "150px",
                        boxShadow: isPinnedLeft
                          ? "2px 0 5px -2px rgba(0,0,0,0.3)"
                          : isPinnedRight
                          ? "-2px 0 5px -2px rgba(0,0,0,0.3)"
                          : "none",
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const isPinnedLeft = columnPinning.left?.includes(
                    cell.column.id
                  );
                  const isPinnedRight = columnPinning.right?.includes(
                    cell.column.id
                  );

                  return (
                    <td
                      key={cell.id}
                      style={{
                        borderBottom: "1px solid black",
                        padding: "5px",
                        backgroundColor:
                          isPinnedLeft || isPinnedRight ? "white" : "white",
                        position:
                          isPinnedLeft || isPinnedRight ? "sticky" : "static",
                        left: isPinnedLeft ? 0 : undefined,
                        right: isPinnedRight ? 0 : undefined,
                        zIndex: isPinnedLeft || isPinnedRight ? 1 : 0,
                        minWidth: isPinnedLeft
                          ? "80px"
                          : isPinnedRight
                          ? "100px"
                          : "150px",
                        boxShadow: isPinnedLeft
                          ? "2px 0 5px -2px rgba(0,0,0,0.3)"
                          : isPinnedRight
                          ? "-2px 0 5px -2px rgba(0,0,0,0.3)"
                          : "none",
                      }}
                    >
                      {isPinnedRight ? (
                        <div style={{ padding: "8px" }}>
                          <button style={{ marginRight: "20px" }}>Add</button>
                          <button style={{ marginRight: "20px" }}>Edit</button>
                          <button>Delete</button>
                        </div>
                      ) : (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
