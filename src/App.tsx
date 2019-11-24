import React from "react";
import "./assets/styles/App.scss";
import { Theme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Table, TableDetail } from "./components";
import theme from "./theme";
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
    <ThemeProvider theme={theme}>
      <Paper elevation={3} className={classes.root}>
        <Table />
        <TableDetail />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
