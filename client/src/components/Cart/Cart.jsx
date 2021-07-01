import React,{useEffect} from 'react';
import { getCart, addToCart } from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import Card from './Content/Card'
import Typography from '@material-ui/core/Typography';
import {useStyles} from './MakeStyle';
import Button from '@material-ui/core/Button';


function Cart(props) {
    
    const classes = useStyles();

    const dispatch = useDispatch();
    
    const id = props.match.params.id;
    const qty = props.location.search && Number(props.location.search.split('=')[1])
    const cart = useSelector(state=>state.cart);
    const {cartItems} = cart;
    
    console.log(cartItems)
    useEffect(() => {
        if(id) dispatch(getCart());
    }, [])

    if(cartItems && cartItems.length < 1) return <p>Cart Empty</p>
    return (
        <div style={{paddingLeft:30, paddingRight:30}}>
            <div>
                    {cartItems.map(item=>(
                        <div className={classes.cardContainer}>
                            <Card addToCart={addToCart} dispatch={dispatch} cartItems={cartItems} items={item}/>

                        </div>
                    ))}
            </div>
            <div>
                <Typography className={classes.sub}>
                    Subtotal ({cartItems.reduce((a, b) => a +  b.qty, 0)} items)
                    :
                    ${cartItems.reduce((a, b) => a + b.price * b.qty, 0)}
                </Typography>
                <Button className={classes.button}  variant="contained" color="primary">CheckOut</Button>
            </div>
            
        </div>
    
    )
}

export default Cart
