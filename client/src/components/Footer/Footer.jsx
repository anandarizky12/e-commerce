import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
       WeCommerce
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
 container : {
    display : 'flex',
    justifyContent : 'flex-start',
    height : '100%',
    flexWrap : "wrap",

 },
 icon:{
     height : 12,
     width : 12
 },
 grid : {
    display : 'flex',
    
    flexDirection : 'column',
    justifyContent : 'space-between',
    height:'50%',
    textAlign : 'left',
    margin : 20
 },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    height : '30%',
    marginTop: 20,
    backgroundColor:
      theme.palette.type === 'blue' ? theme.palette.grey[200] : theme.palette.grey[400],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container className={classes.container} maxWidth="xl">
            <Grid className={classes.grid}>
            <Typography variant="h7">HELP</Typography>
            <Typography variant="caption"><CallIcon className={classes.icon}/> 098-089</Typography>
            <Typography variant="caption"><EmailIcon className={classes.icon}/> wecommerce@SpeechGrammarList.co.id</Typography>

            </Grid>
            <Grid className={classes.grid}>
            <Typography variant="h7">FOLLOW US ON</Typography>
            <Typography variant="caption"><TwitterIcon className={classes.icon}/> Twitter</Typography>
            <Typography variant="caption"><InstagramIcon className={classes.icon}/> Instagram</Typography>
            <Typography variant="caption"><FacebookIcon className={classes.icon}/> Facebook</Typography>

            </Grid>
        
        </Container>
          <Copyright />
      </footer>
  );
}