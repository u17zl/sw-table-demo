import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

export interface IProps {}
export interface ITableDispatchProps {}
export interface ITableStateProps {
  name: string;
  birth_year: string;
  gender: string;
  isFetching: Boolean;
  list: string[];
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      padding: theme.spacing(2),
      minHeight: 167,
      marginTop: theme.spacing(2)
    },
    loading: {
      height: 167,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    chips: {
      margin: theme.spacing(0.5)
    }
  };
});

const TableDetail = (props: any) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {props.isFetching ? (
        <div className={classes.loading}>
          <CircularProgress />
          <span style={{ marginLeft: 10 }}>loading...</span>
        </div>
      ) : (
        <Fragment>
          <Typography variant="h5">Details:</Typography>
          <Typography>Name:{props.name}</Typography>
          <Typography>Birth Year:{props.birth_year}</Typography>
          <Typography>Gender:{props.gender}</Typography>
          <Typography>List of Films:</Typography>
          {props.list.map((item: string) => {
            return (
              <Chip
                key={item}
                className={classes.chips}
                label={item}
                variant="outlined"
                color="secondary"
              />
            );
          })}
        </Fragment>
      )}
    </Paper>
  );
};
const mapStateToProps = (state: any): ITableStateProps => ({
  name: state.detail.payload.name,
  birth_year: state.detail.payload.birth_year,
  gender: state.detail.payload.gender,
  list: state.detail.payload.film_list,
  isFetching: state.detail.isFetching
});

const mapDispatchToProps = (dispatch: ITableDispatchProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TableDetail);
