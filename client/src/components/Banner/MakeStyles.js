import { makeStyles } from "@material-ui/core/styles";
import '@fontsource/roboto';
import '@fontsource/poppins';

export const useStyles = makeStyles((theme) => ({
    root: {
      height: 400,
      padding: "50px 8.4% 50px 8.6%",
      color : 'gray',
      [theme.breakpoints.down("md")]: {
        padding: "50px 30px",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "50px 3% 50px 3%",
      },
    },
    titleWrap: {
      height: 70,
    },
    title: {
      fontWeight: 700,
      fontFamily: "Poppins",
      transition: "width 2s, height 4s",
      fontSize: 64,
      [theme.breakpoints.down("xs")]: {
        fontSize: 47,
        letterSpacing: -1,
      },
      animation: `$skeletons 1200ms`,
      // display: "block",
    },
    subTitle: {
      fontSize: 64,
      fontFamily: "Poppins",
      fontWeight: 200,
      letterSpacing: -2,
      animation: `$skeletons 1200ms`,
      display: "block",
      [theme.breakpoints.down("md")]: {
        fontSize: 50,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 33,
        marginTop: 10,
        letterSpacing: -1,
      },
    },
    body: {
      fontFamily: "roboto",
      fontWeight: 500,
      fontSize: 18,
      marginTop: 50,
    },
    "@keyframes skeletons": {
      "0%": {
        transform: "scaleY(0)",
        transformOrigin: "bottom",
        // position: "relative",
        // bottom: -50,
      },
      "100%": {
        // position: "relative",
        // bottom: 0,
      },
    },
  }));
