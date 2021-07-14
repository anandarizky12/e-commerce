import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {useStyles} from './MakeStyle'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Link, useHistory} from 'react-router-dom'
import SideNav from './SideNav/SideNav';
import { useDispatch } from 'react-redux';
import { listProducts } from '../../actions';

export default function SearchAppBar({products}) {
  const classes = useStyles();
  const [open,setOpen] = React.useState(false);
  const [payload,setpayload]= useState({search : "" , sortOrder:""})
  const dispatch = useDispatch();
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(listProducts('' ,payload.search, payload.sortOrder));
    history.push(`/results?search=${payload.search}`);
    setpayload({...payload,search:''});

  };
 

  const handleInput =(e)=>{
    const { value, name } = e.target
    setpayload({...payload,
        [name]:value
    })
  };

  const backHome=()=>{
    dispatch(listProducts());
    history.push('/');
  }

  console.log(payload.search)
  return (
    <div>
      <AppBar  position="fixed">
        <Toolbar className={classes.root}>
            <Typography onClick={()=>backHome()} className={classes.title} variant="h6" noWrap>
                We-Commerce
            </Typography>     
       
          <div className={classes.containerIcons}>
              <form onSubmit={submitHandler} className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    name = "search"
                    value={payload.search}
                    onChange={(e=>handleInput(e))}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
              </form>
          
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={()=>setOpen(!open)}
              >
                <MenuIcon  />
              </IconButton>
          </div>
         
         
        </Toolbar>
            <SideNav open={open} products={products}  setOpen={setOpen} />
       
      </AppBar>
    </div>
  );
}