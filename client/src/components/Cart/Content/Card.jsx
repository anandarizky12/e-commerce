import React, {useState,useEffect} from 'react';
import {useStyles } from './MakeStyle';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { removeFromCart } from '../../../actions';

export default function MediaControlCard({addToCart, cartItems,items,dispatch}) {
  const classes = useStyles();

  const handleMin=()=>{
      if(items.qty == 1) return; 
      dispatch(addToCart(items.product,items.qty-1));
 
  }
  const handlePlus=()=>{
     if(items.qty == items.stock) return alert("Maximum Stock.")
     return  dispatch(addToCart(items.product,items.qty+1))
  }
  const removeCart=(id)=>{
      dispatch(removeFromCart(id));
  }

 
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={items.image}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {items.name}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
             {items.category} | {items.brand}
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
                ${items.price}
            </Typography>
        </CardContent>
        <div className={classes.controls}>
            <div className={classes.buttons}>
            <Button type="button" size="small" onClick={() =>handleMin()}>-</Button>
                <Typography >&nbsp;{items.qty}&nbsp;</Typography>
            <Button type="button" size="small" onClick={() => handlePlus()}>+</Button>
            </div>
            <DeleteIcon onClick={()=>removeCart(items.product)} className={classes.delete}/>
        </div>
      </div>
    
    </Card>
  );
}