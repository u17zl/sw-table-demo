import React, { Fragment } from "react";
import "./assets/styles/App.scss";
import { Table, TableDetail } from "./components";

const App: React.FC = () => {
  return (
    <Fragment>
      <Table />
      <TableDetail />
    </Fragment>
  );
};

export default App;
