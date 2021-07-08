import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {logout} from '../../actions/index';
import  { useHistory } from 'react-router-dom';


function SignInOut(props) {
   
    const history = useHistory();
    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignin;

    const handleLogout = () => {
        dispatch(logout());
        history.push('/signin');
      }
    
   

    return (
    <>
     
        {userInfo  ? (
        <>
              <Link to="/profile">
                    <ListItem button>
                        <ListItemIcon> < AccountCircleIcon /></ListItemIcon>
                        <ListItemText primary={userInfo.username} />
                    </ListItem>
              </Link>
           
                    <ListItem  onClick={handleLogout} button>
                        <ListItemIcon> < ExitToAppIcon /></ListItemIcon>
                        <ListItemText primary='Logout' />
                    </ListItem>
           
        </>
            ) : (
                <Link to='/signin'>
                    <ListItem button>
                        <ListItemIcon> < AccountCircleIcon /></ListItemIcon>
                        <ListItemText primary='Login' />
                    </ListItem>
                </Link>
             )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                    <Link to="/admin/product">
                      <ListItem button>
                            <ListItemIcon> < AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary={"Product"} />
                        </ListItem>
                    </Link>
                    <Link to="admin/orders">
                      <ListItem button>
                            <ListItemIcon> < AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary={"Orders"} />
                        </ListItem>
                    </Link>
              </div>
            )}
    </>
    )
}

export default SignInOut
