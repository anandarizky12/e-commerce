import React, {useEffect} from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useStyles } from './Style';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function SignInOut() {
   
    const classes = useStyles();
   
    return (
    <Link to='/signin'>
         <ListItem button>
            <ListItemIcon> < AccountCircleIcon /></ListItemIcon>
            <ListItemText primary='Login' />
        </ListItem>
    </Link>
   
    )
}

export default SignInOut
