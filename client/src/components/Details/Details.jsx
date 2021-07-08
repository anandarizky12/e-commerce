import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './MakeStyle'
import Select from '@material-ui/core/Select';
import Rating from '@material-ui/lab/Rating';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {useSelector , useDispatch} from 'react-redux';
import { getDetails } from '../../actions';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { addToCart } from '../../actions';
import Review from './Review/Review';
import Comments from './Review/Comments';
import {Link} from 'react-router-dom';

export default function Details(props) {
  
  const history = useHistory();
  const [qty ,setQty] = useState(1)
  const userSignin = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const id =  props.match.params.id;

  useEffect(() => {
      dispatch(getDetails(id));
  }, []);
    
  const details = useSelector(state=>state.productDetails);
  const { product, loading, error } = details;
  const classes = useStyles();

  const handleAddToCart=()=>{
          dispatch(addToCart(id,qty))
          history.push(`/cart/${id}?qty=${qty}`)
    
  }
  

  if(details.loading) return (<CircularProgress/>);

  return (
<>
  {product && 
        <Container className={classes.master}> 
        <Container className={classes.root} maxWidth="xl">
            <img className={classes.img} src={details.product.image} alt={details.product.name} />
        <Grid className={classes.grid}>
            <Typography className={classes.name} >
                    {details.product.name}
            </Typography>
            <Typography className={classes.category} >
                    {details.product.category} |  {details.product.brand}
            </Typography>
            <Typography className={classes.price} >
                   ${details.product.price} &nbsp;   <Rating name="read-only" value={Math.floor(details.product.rating)} readOnly /> 
                   <Typography className={classes.numReviews}>({details.product.numReviews})</Typography>
            </Typography>
            <Typography className={classes.desc}>
                    {details.product.description}
            </Typography>
            <Grid className={classes.grid2}>
                <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                        <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={(e)=>setQty(e.target.value)}
                        >       
                                {[...Array(details.product.stock).keys()].map(i=>(
                                        <MenuItem key={i+1} value={i+1}>{i+1}</MenuItem> 
                                ))}
                             
                               
                        </Select>
                </FormControl>

                    {details.product.stock > 0
                    ?  <button className={classes.button} onClick={()=>handleAddToCart()}>Add to cart</button> 
                    :     <Typography className={classes.emptyStock}>
                                Sorry The Product is Empty
                          </Typography>
                    }
                   
            </Grid>
         
        </Grid>
      
        </Container>
        {userInfo ? <Review id={ id }  details={details} user={userInfo}/> : <p>Please <Link style={{color:'blue'}} to='/signin'>Sign In </Link>To write Review</p>}
        {product.reviews && product.reviews.length >= 1 ? 
        product.reviews.map(data=>(
                <Comments name={data.name} comment={data.comment} rating={data.rating} /> 
        ))          
        : <p>no Comment yet</p>}
  </Container>    
   }
 </>
  
  );
}
