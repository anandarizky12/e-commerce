import { makeStyles, useTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width:600,
      height:200,
      border:"none",
      boxShadow:'none'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      textAlign:'left'
    },
    cover: {
      width: 241
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    buttons: {
      display: 'flex',
      alignItems: 'center',
    },
    delete:{
      '&:hover':{
        cursor: 'pointer'
      }
    }
  }));