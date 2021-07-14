import React, {useEffect} from 'react'
import Product from '../Products/Product/Product'
import { listProducts } from '../../actions/index';
import {useSelector, useDispatch} from 'react-redux';
import queryString from 'query-string'
import { CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


function Search(props) {

    

const useStyles = makeStyles((theme) => ({
    container:{
      marginTop:2,
     width:'100%'
    }
  }));

    const value=queryString.parse(props.location.search);
    const searchVal=value.search;
    const dispatch = useDispatch();
    const productList = useSelector(state=>state.productList);
    const {products, loading, error} = productList;
    const classes = useStyles()    
    useEffect(() => {
        if(searchVal){
            dispatch(listProducts('',searchVal,''));
        }
    }, []);

    
    if(loading){
        return <CircularProgress/>
    }
    console.log(products)
    return (
        <Grid    container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
        className={classes.container}
 >
             {products.map(product=>{
                return  <Product 
                          id={product._id} 
                          name={product.name}  
                          category={product.category}
                          img={product.image}
                          price={product.price}
                          brand={product.brand} 
                          rating={product.rating}
                          numRev={product.numReviews}
                          desc={product.description}                     
                        />
            })}
        </Grid>  
    )
}

export default Search
