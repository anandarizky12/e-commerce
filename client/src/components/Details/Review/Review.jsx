import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import {saveProductReview } from '../../../actions/index';
import Rating from '@material-ui/lab/Rating';
import { PRODUCT_REVIEW_SAVE_RESET } from '../../../constance/productConstance';
import Button from '@material-ui/core/Button';


function Review({user,  id, details }) {

   const productReviewSave = useSelector((state) => state.productReviewSave);
    const { success: productSaveSuccess } = productReviewSave;
    const [review, setreview] = useState({name :"" , rating:"", comment : '' });
    const dispatch = useDispatch();
    const handleChange=(e)=>{
      const {value, name} =e.target; 
      setreview({
        ...review,
        [name] : value
      })
    }

    useEffect(() => {
      if (productSaveSuccess) {
        alert('Review submitted successfully.');
        setreview({name :"" , rating:'', comment : '' });
        dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
      }
  
    }, [productSaveSuccess]);
   
    const submitHandler = (e) => {
      e.preventDefault();
      // dispatch actions
      dispatch(
        saveProductReview( id , {
          name: user.username,
          userId : user._id,
          rating: review.rating,
          comment: review.comment,
        })
      );
    };

    console.log(productReviewSave)
    return (
      <form style={{width : '100%',}} onSubmit={(e)=>submitHandler(e)}>
         
          <CssBaseline />
       
            <Typography component="h1">
                Review ({user.username})
            </Typography>
            <Rating name="rating" defaultValue={0} onChange={(e)=>handleChange(e)}  />
           
                <TextField
                id="outlined-multiline-static"
                label="Comments"
                fullWidth
                multiline
                name = "comment"
                rows={4}
                variant="outlined"
                onChange={(e)=>handleChange(e)} 
              />
               <Button style={{margin:10,}} type="submit" variant="contained" color="primary" disableElevation>
                    Send Review
               </Button>
         
        
      
        </form>
    )
}

export default Review
