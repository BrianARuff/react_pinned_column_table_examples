import { TableComTableComponentTanStack } from "./TableComTableComponentTanStack";

import { TableComponentManualStyling } from "./TableComponentManualStyling";

export type TableComponentProps = {
  left?: string[];
  right?: string[];
};

function App() {
  return (
    <div
      style={{
        width: "800px",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Manual Implementation</h1>
      <TableComponentManualStyling />
      <h1
        style={{
          marginTop: "20px",
        }}
      >
        TanStack Table
      </h1>
      <TableComTableComponentTanStack />
    </div>
  );
}

export default App;
