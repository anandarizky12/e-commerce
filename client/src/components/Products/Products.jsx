import React from 'react';
import Product from './Product/Product';
import { CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container:{
      marginTop:2,
     width:'100%'
    }
  }));

function Products({products , loading}) {

    const classes = useStyles();
    if(loading) return (<CircularProgress/>)
    
    if(products){
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

    )}
}

export default Products
