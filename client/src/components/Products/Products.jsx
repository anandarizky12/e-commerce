import React from 'react';
import Product from './Product/Product';
import data from '../../Data';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container:{
      marginTop:15,

    }
  }));

function Products() {

    const classes = useStyles();
    console.log(data.products[1]._id)
    return (
        <Grid    container
                 direction="row"
                 justify="center"
                 alignItems="center"
                 spacing={2}
                 className={classes.container}
          >
            {data.products.map(product=>{
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

export default Products
