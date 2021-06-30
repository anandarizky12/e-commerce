import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      }
    },
    button:{
       width:'100%'
    },
    cardContainer:{
      marginBottom :10,
    },
    sub:{
      margin:10,
      color:'gray'
    }
  }));
  