import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  toolBar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "inherit",
    "& > *": {
      marginLeft: "20px",
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down("xs")]: {
    appBar: {
      padding: "5px",
    },
    heading: {
      display: "none",
    },
    userName: {
      fontSize: "12px",
    },
  },
  [theme.breakpoints.up("md")]: {
    userName: {
      fontSize: "16px",
    },
  },
}));
