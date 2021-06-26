import React from 'react';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './MakeStyles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';


export default function Product({id, name, img, category, price, brand, rating, numRev, desc }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid className={classes.container} onClick={()=>console.log(id)}>
        <Card className={classes.root}>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                {brand}
            </Avatar>
            }
            action={
                <Typography className={classes.price} variant="body2" color="textSecondary" component="p">
                        {price + '$'}
            </Typography>
            }
            subheader={brand}
           
        />
        <CardMedia
            className={classes.media}
            image={img}
            title="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                    {rating + " Rating"} ({numRev + " Reviews"})
                    <Typography variant="body" color="textSecondary" component="h5">
                         {desc}
                     </Typography>
            </Typography>
        </CardContent>
        <CardContent>
            <Typography variant="body" color="textPrimary" component="h4">
                {name}
            </Typography>
        </CardContent>
            
        </Card>
    </Grid>
    
    );
}