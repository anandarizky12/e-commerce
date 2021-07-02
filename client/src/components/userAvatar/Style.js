import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
      width: '20%',
      '& > * + *': {
        marginTop: theme.spacing(2),
    
      },
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
  }));