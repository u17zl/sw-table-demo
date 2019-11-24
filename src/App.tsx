import React, { Fragment } from "react";
import "./assets/styles/App.scss";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Table, TableDetail } from "./components";
import Paper from "@material-ui/core/Paper";
import "./utils/axiosSettings";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      position: "absolute",
      width: 800,
      marginLeft: -350,
      marginTop: -300,
      left: "50%",
      top: "50%",
      padding: theme.spacing(2)
    }
  };
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <Table />
      <TableDetail />
    </Paper>
  );
};

export default App;
