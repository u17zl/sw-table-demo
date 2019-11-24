import React from "react";
import "./assets/styles/App.scss";
import { Theme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Table, TableDetail } from "./components";
import theme from "./theme";
import "./utils/axiosSettings";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      padding: theme.spacing(2)
    },
    container: {
      width: "100vw",
      height: "100vh"
    }
  };
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        className={classes.container}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Paper elevation={3} className={classes.root}>
            <Table />
            <TableDetail />
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
