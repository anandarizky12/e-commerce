import React, {useState, useEffect} from 'react';
import { useStyles } from './MakeStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import {useDispatch, useSelector} from 'react-redux';
import {saveProduct} from '../../actions/index';
import CustomizedTables from './Table/Table'
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';


export default function CreateProduct() {
  const classes = useStyles();
  const productList = useSelector(state=>state.productList);
  const {loading, products, error} = productList;
  const productSave = useSelector((state) => state.productSave);
  const [alert, setalert]  = useState(false);

  const {
    loading: loadingSave,
    product: productmsg = false,
    error: errorSave,
  } = productSave;

  const dispatch = useDispatch();
  const [openCreate, setOpenCreate] = useState(false);
  const [payload, setpayload] = useState({id : null, 
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

  const openModal = (product) => {
    setOpenCreate(true)
    setpayload({
      id: product._id,
      name :  product.name,
      image :  product.image,
      price :  product.price,
      brand :  product.brand,
      category : product.category,
      stock :  product.stock,
      description :  product.description,
      uploading : false,
    })
  };

  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(saveProduct(payload));

  }

  useEffect(() => {
    if(productmsg.success == true){
      setalert(true);
      setOpenCreate(false)
    }
  }, [productmsg])
 
  if(alert){
    setTimeout(
      () => setalert(false), 
      2000
    );
   
  }

  if(loading) return (<p>Loading. . . </p>);
  return (
    <React.Fragment>
        
      <CssBaseline />
      {alert &&
      <Alert className={classes.alert} severity="success">
                <AlertTitle>Success</AlertTitle>
                  Data Updated — <strong>check it out!</strong>
      </Alert>}
      {openCreate && 
       <main className={classes.layout}>
       <Paper className={classes.paper}>
         <Typography component="h1" variant="h4" align="center">
           CreateProduct
         </Typography>
         <React.Fragment>
           <Form setpayload={setpayload} payload={payload} close={setOpenCreate} handleInput={handleInput} submitHandler={submitHandler}/>
         </React.Fragment>
       </Paper>   
     </main>}
     
   
      <CustomizedTables openModal={openModal} products={products}/>
      {!openCreate && <Button onClick={()=>setOpenCreate(true)} className={classes.button}>Create Product</Button>}
    </React.Fragment>
  );
}