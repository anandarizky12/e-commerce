import { makeStyles } from '@material-ui/core/styles';
import { red,blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    container:{
      margin:15,
      marginTop:70,
      maxHeight:360,
      '&:hover': {
          cursor:'pointer'
      }
    },
    root: {
      minWidth:260,
    
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
      backgroundColor: red[500],
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