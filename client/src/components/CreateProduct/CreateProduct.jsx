import React, {useState} from 'react';
import { useStyles } from './MakeStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import {useDispatch} from 'react-redux';
import {saveProduct} from '../../actions/index';

const steps = ['Shipping address', 'Payment details', 'Review your order'];


export default function CreateProduct() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [payload, setpayload] = useState({
                                          name : "",
                                          price : "",
                                          image : "",
                                          brand : "",
                                          category : "",
                                          stock : "",
                                          description : "",
                                          uploading : false,
                                          });

  const handleInput =(e)=>{
    const { value, name } = e.target
    setpayload({...payload,
        [name]:value
    })
  };

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log('await')
    dispatch(saveProduct(payload))
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            CreateProduct
          </Typography>
          <React.Fragment>
            <Form handleInput={handleInput} submitHandler={submitHandler}/>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}