import palette from "../palette";

export default {
  root: {
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    "&$hover": {
      "&:hover": {
        backgroundColor: palette.primary.light,
        cursor: "pointer"
      }
    }
  }
};
