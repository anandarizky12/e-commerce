import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';



const useStyles = makeStyles({
    root: {
        width : '100%',
        marginTop : 10
    },
    media: {
      height: 140,
    },
  });
function Comments({name, rating, comment}) {
    const classes = useStyles();
    return (
        <Card className={classes.root} component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">{name}</Typography>
            <Rating name="read-only" value={rating} readOnly />
            <Typography>{comment}</Typography>
        </Card>
    )
}

export default Comments
