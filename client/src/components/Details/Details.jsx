import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from './MakeStyle'
import data from '../../Data'

export default function Details(props) {

  const classes = useStyles();
  const Product = data.products.find(data=>data._id == props.match.params.id);

  return (
   
      <Container className={classes.root} maxWidth="xl">
        <Typography >
            Details Product
        </Typography>
        <Typography >
                {Product.name}
        </Typography>
        <img src={Product.image} alt={Product.name} />
      </Container>
  
  );
}
