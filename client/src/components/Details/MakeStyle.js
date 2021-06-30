import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';
import { red,blue ,grey} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:80,
      marginBottom:25,
      display:'flex',
     
    },
    img:{
      width:500,
   
    },
    name:{
      fontFamily:'roboto',
      fontSize:30,
      fontWeight:700,
      letterSpacing:3,
      color:'gray',
      padding:0,
      margin:0
    },
    grid:{
      marginLeft:30,
      display:'flex',
      flexDirection: 'column',
      justifyContent:'flex-start'
    },
    category:{
      color:'gray',
      fontSize:16,
      textAlign:'left'
    },
    price:{
      marginTop:15,
      fontFamily:'roboto',
      fontWeight:800,
      fontSize:22,
      display:'flex',
      textAlign:'left',
      alignItems:'center'
    },
    numReviews:{
      fontSize:12,
      display:'flex',
      alignItems:'center'
    },
    desc:{
      marginTop:20,
      textAlign:'left',
      color:'gray'
    },
    button:{
      padding:10,
      outline:'none',
      letterSpacing:4,
      border:'none',
      backgroundColor:blue[200],
      fontWeight:900,
      color:grey[800],
      fontFamily:'roboto',
      fontSize:20,
      '&:hover':{
        cursor:'pointer'
      }
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    grid2:{
        display:'flex',
        height:100,
        justifyContent:'space-around',
        marginTop:20,
        flexDirection:'column'
    },
    emptyStock:{
      marginTop:20,
      textAlign:'center',
      color:'gray'
    }
  }));

  export {useStyles};