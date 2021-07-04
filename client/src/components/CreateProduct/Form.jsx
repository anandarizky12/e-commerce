import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Form({setpayload, payload, handleInput ,submitHandler, close}) {
  const handleClose=()=>{
    close(false)
    setpayload({id : null, 
                name : "",
                price : "",
                image : "",
                brand : "",
                category : "",
                stock : "",
                description : "",
                uploading : false
      });

  }
  return (
    <React.Fragment>
    <form onSubmit={(e)=>submitHandler(e)}>
      <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              name="name"
              label="Product Name"
              value={payload.name}
              fullWidth
              onChange = {(e)=>handleInput(e)}
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="category"
              name="category"
              label="Product category"
              fullWidth
              value={payload.category}
              onChange = {(e)=>handleInput(e)}
              autoComplete="Category"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              name="description"
              label="Description"
              fullWidth
              value={payload.description}
              onChange = {(e)=>handleInput(e)}
              autoComplete="Description"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="brand"
              name="brand"
              label="Brand"
              fullWidth
              value={payload.brand}
              onChange = {(e)=>handleInput(e)}
              autoComplete="Brands"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="price"
              name="price"
              label="Price"
              fullWidth
              value={payload.price}
              type = "number"
              onChange = {(e)=>handleInput(e)}
              autoComplete="None"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              required
              id="stock"
              name="stock"
              label="Stock"
              fullWidth
              value={payload.stock}
              type = "number"
              onChange = {(e)=>handleInput(e)}
              autoComplete="None"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="image"
              name="image"
              label="Image"
              value={payload.image}
              fullWidth
              onChange = {(e)=>handleInput(e)}
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
        <Grid>
            <Button type="submit" fullWidth>{!payload.id ? "Create" : "Update"}</Button>
            <Button onClick={()=>handleClose()} fullWidth>Close</Button>
        </Grid>
        
    </form>
     
    </React.Fragment>
  );
}