import React, {useEffect} from 'react';
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

export default function Details(props) {

  
  const dispatch = useDispatch();
  const id =  props.match.params.id;
  useEffect(() => {
    // data.details.product.map(data=>{
      //     !category.includes(data.category) && 
      //     category.push(data.category)
      // })
      dispatch(getDetails(id));
      
    }, []);
    
  const details = useSelector(state=>state.productDetails);
  console.log(details);
  const classes = useStyles();

  return (
   
      <div>
        {details.loading ? <CircularProgress/>
        :
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
                             
                        >
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                        </Select>
                </FormControl>
                    <button className={classes.button}>Add to cart</button>
            </Grid>
          
        </Grid>
        </Container>
  

      }
       
      </div>
  
  );
}
// category: 'Shirts',
// image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
// price: 120,
// brand: 'Nike',
// rating: 4.5,
// numReviews: 10,
// description: 'high quality details.product',