import React from "react";
import { useStyles } from "./MakeStyles";
import { Box, Typography } from "@material-ui/core";




export default function Banner() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box variant="div" className={classes.titleWrap}>
        <Typography variant="h3" className={classes.title}>
          Find
        </Typography>
      </Box>
      <Typography variant="h3" className={classes.subTitle}>
        Your Amazing Stuff Here
      </Typography>
      <Typography variant="h5" className={classes.body}>
        Find great experience shopping here
      </Typography>
    </Box>
  );
}
