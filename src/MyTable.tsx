import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { faker } from "@faker-js/faker";

import "./MyTable.css";

function generateOfficeWorkerSalary() {
  const salary = faker.number.int({ min: 30000, max: 150000 });

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(salary);
}

type Person = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
  createdAt: string;
  lastLogin: string;
  role: string;
  department: string;
  salary: number;
  performance: string;
  notes: string;
};

const ButtonGroup = () => {
  const buttonGroupStyle = {
    width: "100%",
    display: "flex",
    gap: "8px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const addButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#3498db",
  };

  const editButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#2ecc71",
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#e74c3c",
  };

  return (
    <div style={buttonGroupStyle}>
      <button
        style={addButtonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
      >
        Add
      </button>
      <button
        style={editButtonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#27ae60")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#2ecc71")}
      >
        Edit
      </button>
      <button
        style={deleteButtonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#c0392b")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
      >
        Delete
      </button>
    </div>
  );
};

const generateRandomData = (count: number): Person[] => {
  // @ts-ignore
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 80 }),
    visits: faker.number.int({ min: 0, max: 1000 }),
    status: faker.helpers.arrayElement(["Active", "Inactive"]),
    progress: faker.number.int({ min: 0, max: 1000 }),
    createdAt: faker.date.past({ years: 10 }),
    lastLogin: faker.date.past(),
    role: faker.helpers.arrayElement(["Admin", "User", "Manager"]),
    department: faker.helpers.arrayElement(["IT", "HR", "Sales", "Marketing"]),
    salary: generateOfficeWorkerSalary().replace("$", ""),
    performance: ["Excellent", "Good", "Average", "Poor"][
      Math.floor(Math.random() * 4)
    ],
    notes: `Random note for user ${index + 1}`,
  }));
};

const defaultData: Person[] = generateRandomData(30);

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => (
      <>{info.row.original.firstName + " " + info.row.original.lastName}</>
    ),
    header: "Full Name",
  }),
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
    header: "First Name",
  }),
  columnHelper.accessor("lastName", {
    cell: (info) => info.getValue(),
    header: "Last Name",
  }),
  columnHelper.accessor("email", {
    cell: (info) => info.getValue(),
    header: "Email",
  }),
  columnHelper.accessor("age", {
    cell: (info) => info.getValue(),
    header: "Age",
  }),
  columnHelper.accessor("visits", {
    cell: (info) => info.getValue(),
    header: "Visits",
  }),
  columnHelper.accessor("status", {
    cell: (info) => info.getValue(),
    header: "Status",
  }),
  columnHelper.accessor("progress", {
    cell: (info) => `${info.getValue().toFixed(2)}%`,
    header: "Progress",
  }),
  columnHelper.accessor("createdAt", {
    cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    header: "Created At",
  }),
  columnHelper.accessor("lastLogin", {
    cell: (info) => new Date(info.getValue()).toLocaleString(),
    header: "Last Login",
  }),
  columnHelper.accessor("role", {
    cell: (info) => info.getValue(),
    header: "Role",
  }),
  columnHelper.accessor("department", {
    cell: (info) => info.getValue(),
    header: "Department",
  }),
  columnHelper.accessor("salary", {
    cell: (info) => `$${info.getValue().toLocaleString()}`,
    header: "Salary",
  }),
  columnHelper.accessor("performance", {
    cell: (info) => info.getValue(),
    header: "Performance",
  }),
  columnHelper.accessor("notes", {
    cell: () => <ButtonGroup />,
    header: "Controls",
  }),
];

const MyTable: React.FC = () => {
  const [data] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table-container">
      <div className="table-scroll">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <>
                {/* Optional Controls Above */}
                {/* <tr style={{ width: "50%", background: "white" }}>
                  <th
                    style={{
                      position: "sticky",
                      left: 0,
                    }}
                    colSpan={Math.round(columns.length / 2) + 1}
                    className="select-header select-header-controls"
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "24px",
                      }}
                    >
                      <select style={{ width: "100%" }}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <select style={{ width: "100%" }}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <select style={{ width: "100%" }}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </th>
                  <th
                    colSpan={Math.round(columns.length / 2) + 1}
                    className="select-header"
                  ></th>
                </tr> */}
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, index) => (
                    <th
                      key={header.id}
                      className={
                        index === 0
                          ? "sticky-left"
                          : index === headerGroup.headers.length - 1
                          ? "sticky-right"
                          : ""
                      }
                      style={{
                        right:
                          index === headerGroup.headers.length - 1
                            ? "-3px"
                            : undefined,
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              </>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell, index) => (
                  <td
                    key={cell.id}
                    className={
                      index === 0
                        ? "sticky-left"
                        : index === row.getVisibleCells().length - 1
                        ? "sticky-right"
                        : ""
                    }
                    style={{
                      right:
                        index === row.getVisibleCells().length - 1
                          ? "-3px"
                          : undefined,
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTable;
