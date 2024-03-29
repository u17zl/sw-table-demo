import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid, Button, Typography } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import { fetchTable, pagiTable } from "../store/actions/tableActions";
import fetchDetail from "../store/actions/detailActions";

export interface IProps {}

export interface ITableStateProps {
  data: object[];
  isFetching: Boolean;
}

export interface ITableDispatchProps {
  fetchTable: () => Promise<any>;
  fetchDetail: (input: string) => Promise<any>;
  pagiTable: (url: string) => Promise<any>;
}

export interface Itable {
  name: string;
  height: string;
  mass: string;
  url: string;
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {},
    table: {
      minWidth: 650,
      maxWidth: 800
    },
    loading: {
      height: 403,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      margin: "10px auto 10px auto"
    },
    tablePagi: {
      padding: theme.spacing(1)
    },
    pagiButton: {
      marginLeft: theme.spacing(1)
    }
  };
});

const SWTable = (props: any) => {
  const classes = useStyles();
  useEffect(() => {
    props.fetchTable();
  }, []);
  return (
    <Fragment>
      <Typography className={classes.title} variant="h4">
        Star Wars Table
      </Typography>
      <Paper>
        <Table
          size={"small"}
          className={classes.table}
          aria-label="simple table"
        >
          {props.isFetching ? (
            <div className={classes.loading}>
              <CircularProgress />
              <span style={{ marginLeft: 10 }}>loading...</span>
            </div>
          ) : (
            <Fragment>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Name</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Height</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Mass</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data.payload.results.map((row: Itable) => (
                  <TableRow
                    hover
                    key={row.url}
                    onClick={() => props.fetchDetail(row.url)}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.height}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.mass}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Fragment>
          )}
        </Table>
        <Grid container justify="flex-end" alignItems="center">
          <Grid item className={classes.tablePagi}>
            {props.isFetching ? null : (
              <Fragment>
                {props.data.payload.previous === null ? null : (
                  <Button
                    className={classes.pagiButton}
                    variant="outlined"
                    color="primary"
                    onClick={() => props.pagiTable(props.data.payload.previous)}
                    startIcon={<KeyboardArrowLeftIcon />}
                  >
                    <b>back</b>
                  </Button>
                )}
                {props.data.payload.next === null ? null : (
                  <Button
                    className={classes.pagiButton}
                    variant="outlined"
                    color="primary"
                    onClick={() => props.pagiTable(props.data.payload.next)}
                    endIcon={<KeyboardArrowRightIcon />}
                  >
                    <b>next</b>
                  </Button>
                )}
              </Fragment>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

const mapStateToProps = (state: any): ITableStateProps => ({
  data: state.data,
  isFetching: state.data.isFetching
});

const mapDispatchToProps = (dispatch: any): ITableDispatchProps => ({
  fetchTable: () => dispatch(fetchTable()),
  fetchDetail: (url: string) => dispatch(fetchDetail(url)),
  pagiTable: (url: string) => dispatch(pagiTable(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(SWTable);
