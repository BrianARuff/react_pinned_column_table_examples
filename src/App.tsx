import MyTable from "./MyTable";

export type TableComponentProps = {
  left?: string[];
  right?: string[];
};

function App() {
  return (
    <div
      style={{
        width: "1200px",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <MyTable />
    </div>
  );
}

export default App;
