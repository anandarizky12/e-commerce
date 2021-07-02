import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {useStyles} from './MakeStyle'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'
import SideNav from './SideNav/SideNav';

export default function SearchAppBar({products}) {
  const classes = useStyles();
  const [open,setOpen] = React.useState(false);


  
  console.log(open)

  return (
    <div>
      <AppBar  position="fixed">
        <Toolbar className={classes.root}>
          <Link to='/'>
              <Typography  className={classes.title} variant="h6" noWrap>
                We-Commerce
              </Typography>     
          </Link> 
       
          <div className={classes.containerIcons}>
              <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
              </div>
          
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