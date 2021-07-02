import React, {useState ,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import {useDispatch ,useSelector} from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './MakeStyles';
import Container from '@material-ui/core/Container';
import { register } from '../../../actions';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUp(props) {

  const classes = useStyles();
  const dispatch = useDispatch();


  const userRegister= useSelector(state => state.userRegister );
  const {loading , userInfo ,error} = userRegister;

  const [payload , setpayload] = useState({username : '', email : '' , password :'', repassword:''});
  const [erralert, setalert] = useState({show:false , email : false , password : false});


  const handleChange=(e)=>{
    const { value, name } = e.target;
    setalert({...erralert, show : false,email : false , password : false});
    setpayload({...payload,
        [name]:value
    })}



    const submitHandler = (e) => {
      e.preventDefault();
      if(payload.password != payload.repassword){
        setalert({...erralert, show : true , password : true });
      }else{
          dispatch(register(payload.username,payload.email, payload.password))
      }
  
    }

    useEffect(() => {
    if(userInfo){
        if (userInfo && !userInfo.msg && userInfo.info) {
          alert(userInfo.info);
          props.history.push('/signin');
       
        }else if(userInfo.msg){
          setalert({...erralert, show : true , email : true });
        }
    }
   
    
    }, [userInfo]);

  return (
    <Container component="main" maxWidth="xs">
    
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
       
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={submitHandler} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="UserName"
                autoFocus
                onChange={(e)=>handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error = {erralert.email ? true : false}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error = {erralert.password ? true : false}
                variant="outlined"
                required
                fullWidth
                outlinedWarning
                name="repassword"
                label="Re-Enter Password"
                type="password"
                id="re-password"
                autoComplete="current-password"
                onChange={(e)=>handleChange(e)}
              />
              
            </Grid>
            {erralert.show && erralert.password &&
                <Grid item xs={12}>
                     <Alert severity="error">
                       {'Password Not Match'}</Alert>
                </Grid>
            }
            {erralert.show && erralert.email &&
                <Grid item xs={12}>
                     <Alert severity="error">
                       {userInfo.msg }</Alert>
                </Grid>
            }
        
        
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to='/signin'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}