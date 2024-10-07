import React from "react";
import "./TableComponentManualStyling.css";

export const TableComponentManualStyling = () => {
  return (
    <div className="table-container">
      <table className="data-grid" role="table" aria-label="Employee Data Grid">
        {/* Table Header */}
        <thead>
          <tr>
            <th className="sticky-column">ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Country</th>
            <th>Company</th>
            <th>Position</th>
            <th>Department</th>
            <th>Hire Date</th>
            <th className="sticky-column-right">Status</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          <tr>
            <td className="sticky-column">
              <span style={{ marginRight: "20px" }}>1</span>
              <button style={{ marginRight: "8px" }}>Add</button>
              <button style={{ marginRight: "8px" }}>Edit</button>
              <button>Delete</button>
            </td>
            <td>Alice</td>
            <td>Johnson</td>
            <td>alice.johnson@example.com</td>
            <td>(123) 456-7890</td>
            <td>123 Maple Street</td>
            <td>Springfield</td>
            <td>IL</td>
            <td>62704</td>
            <td>USA</td>
            <td>TechCorp</td>
            <td>Developer</td>
            <td>Engineering</td>
            <td>2020-05-15</td>
            <td className="sticky-column-right">Active</td>
          </tr>
          <tr>
            <td className="sticky-column">
              <span style={{ marginRight: "20px" }}>2</span>
              <button style={{ marginRight: "8px" }}>Add</button>
              <button style={{ marginRight: "8px" }}>Edit</button>
              <button>Delete</button>
            </td>
            <td>Bob</td>
            <td>Smith</td>
            <td>bob.smith@example.com</td>
            <td>(234) 567-8901</td>
            <td>456 Oak Avenue</td>
            <td>Lincoln</td>
            <td>NE</td>
            <td>68508</td>
            <td>USA</td>
            <td>InnovateX</td>
            <td>Designer</td>
            <td>Creative</td>
            <td>2019-03-22</td>
            <td className="sticky-column-right">On Leave</td>
          </tr>
          <tr>
            <td className="sticky-column">
              <span style={{ marginRight: "20px" }}>3</span>
              <button style={{ marginRight: "8px" }}>Add</button>
              <button style={{ marginRight: "8px" }}>Edit</button>
              <button>Delete</button>
            </td>
            <td>Charlie</td>
            <td>Davis</td>
            <td>charlie.davis@example.com</td>
            <td>(345) 678-9012</td>
            <td>789 Pine Road</td>
            <td>Madison</td>
            <td>WI</td>
            <td>53703</td>
            <td>USA</td>
            <td>HealthPlus</td>
            <td>Analyst</td>
            <td>Finance</td>
            <td>2021-07-30</td>
            <td className="sticky-column-right">Inactive</td>
          </tr>
          <tr>
            <td className="sticky-column">
              <span style={{ marginRight: "20px" }}>4</span>
              <button style={{ marginRight: "8px" }}>Add</button>
              <button style={{ marginRight: "8px" }}>Edit</button>
              <button>Delete</button>
            </td>
            <td>Charlie</td>
            <td>Davis</td>
            <td>charlie.davis@example.com</td>
            <td>(345) 678-9012</td>
            <td>789 Pine Road</td>
            <td>Madison</td>
            <td>WI</td>
            <td>53703</td>
            <td>USA</td>
            <td>HealthPlus</td>
            <td>Analyst</td>
            <td>Finance</td>
            <td>2021-07-30</td>
            <td className="sticky-column-right">Inactive</td>
          </tr>
          <tr>
            <td className="sticky-column">
              <span style={{ marginRight: "20px" }}>5</span>
              <button style={{ marginRight: "8px" }}>Add</button>
              <button style={{ marginRight: "8px" }}>Edit</button>
              <button>Delete</button>
            </td>
            <td>Charlie</td>
            <td>Davis</td>
            <td>charlie.davis@example.com</td>
            <td>(345) 678-9012</td>
            <td>789 Pine Road</td>
            <td>Madison</td>
            <td>WI</td>
            <td>53703</td>
            <td>USA</td>
            <td>HealthPlus</td>
            <td>Analyst</td>
            <td>Finance</td>
            <td>2021-07-30</td>
            <td className="sticky-column-right">Inactive</td>
          </tr>
          <tr>
            <td className="sticky-column">
              <span style={{ marginRight: "20px" }}>6</span>
              <button style={{ marginRight: "8px" }}>Add</button>
              <button style={{ marginRight: "8px" }}>Edit</button>
              <button>Delete</button>
            </td>
            <td>Charlie</td>
            <td>Davis</td>
            <td>charlie.davis@example.com</td>
            <td>(345) 678-9012</td>
            <td>789 Pine Road</td>
            <td>Madison</td>
            <td>WI</td>
            <td>53703</td>
            <td>USA</td>
            <td>HealthPlus</td>
            <td>Analyst</td>
            <td>Finance</td>
            <td>2021-07-30</td>
            <td className="sticky-column-right">Inactive</td>
          </tr>
          <tr>
            <td className="sticky-column">
              <span style={{ marginRight: "20px" }}>7</span>
              <button style={{ marginRight: "8px" }}>Add</button>
              <button style={{ marginRight: "8px" }}>Edit</button>
              <button>Delete</button>
            </td>
            <td>Charlie</td>
            <td>Davis</td>
            <td>charlie.davis@example.com</td>
            <td>(345) 678-9012</td>
            <td>789 Pine Road</td>
            <td>Madison</td>
            <td>WI</td>
            <td>53703</td>
            <td>USA</td>
            <td>HealthPlus</td>
            <td>Analyst</td>
            <td>Finance</td>
            <td>2021-07-30</td>
            <td className="sticky-column-right">Inactive</td>
          </tr>
          <tr>
            <td className="sticky-column">
              <span style={{ marginRight: "20px" }}>8</span>
              <button style={{ marginRight: "8px" }}>Add</button>
              <button style={{ marginRight: "8px" }}>Edit</button>
              <button>Delete</button>
            </td>
            <td>Charlie</td>
            <td>Davis</td>
            <td>charlie.davis@example.com</td>
            <td>(345) 678-9012</td>
            <td>789 Pine Road</td>
            <td>Madison</td>
            <td>WI</td>
            <td>53703</td>
            <td>USA</td>
            <td>HealthPlus</td>
            <td>Analyst</td>
            <td>Finance</td>
            <td>2021-07-30</td>
            <td className="sticky-column-right">Inactive</td>
          </tr>
          <tr>
            <td className="sticky-column">
              <span style={{ marginRight: "20px" }}>9</span>
              <button style={{ marginRight: "8px" }}>Add</button>
              <button style={{ marginRight: "8px" }}>Edit</button>
              <button>Delete</button>
            </td>
            <td>Charlie</td>
            <td>Davis</td>
            <td>charlie.davis@example.com</td>
            <td>(345) 678-9012</td>
            <td>789 Pine Road</td>
            <td>Madison</td>
            <td>WI</td>
            <td>53703</td>
            <td>USA</td>
            <td>HealthPlus</td>
            <td>Analyst</td>
            <td>Finance</td>
            <td>2021-07-30</td>
            <td className="sticky-column-right">Inactive</td>
          </tr>
          <tr>
            <td className="sticky-column">
              <span style={{ marginRight: "20px" }}>10</span>
              <button style={{ marginRight: "8px" }}>Add</button>
              <button style={{ marginRight: "8px" }}>Edit</button>
              <button>Delete</button>
            </td>
            <td>Charlie</td>
            <td>Davis</td>
            <td>charlie.davis@example.com</td>
            <td>(345) 678-9012</td>
            <td>789 Pine Road</td>
            <td>Madison</td>
            <td>WI</td>
            <td>53703</td>
            <td>USA</td>
            <td>HealthPlus</td>
            <td>Analyst</td>
            <td>Finance</td>
            <td>2021-07-30</td>
            <td className="sticky-column-right">Inactive</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
