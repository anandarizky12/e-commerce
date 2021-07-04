import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

export default function Form({handleInput ,submitHandler}) {

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
              fullWidth
              onChange = {(e)=>handleInput(e)}
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
        <Button type="submit" fullWidth>Create</Button>
    </form>
     
    </React.Fragment>
  );
}