import { makeStyles } from '@material-ui/core/styles';
import { red,blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    container:{
      margin:35,
      marginTop:10,
      maxHeight:360,
      '&:hover': {
          cursor:'pointer',
          backgroundColor:red
      }
    },
    root: {
      minWidth:260,
      maxHeight:350,
    
  
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: blue[200],
      fontSize:10
    },
    price:{
      fontWeight:"bold",
      padding:5,
      fontSize:20
    },
    link:{
      textDecoration:'none',
    },
    name:{
      '&:hover': {
      color:blue[800]
    }
    }
  }));


export {useStyles}