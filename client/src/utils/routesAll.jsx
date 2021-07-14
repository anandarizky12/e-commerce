import React,{useEffect} from 'react'
import CreateProduct from '../components/CreateProduct/CreateProduct';
import Cart from '../components/Cart/Cart';
import SignInSide from '../components/Login/SignIn/SignIn';
import SignUp from '../components/Login/SignUp/SignUp';
import Details from '../components/Details/Details';
import Home from '../components/Home/Home';
import {BrowserRouter , Switch, Route} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { listProducts } from '../actions/index';
import { useLocation } from 'react-router-dom';
import  SearchAppBar from '../components/Navbar/Navbar';
import StickyFooter from '../components/Footer/Footer';
import ProtectedRoute from './protectedRoutes';
import Search from '../components/Search/Search';

function RoutesAll() {
    
  const productList = useSelector(state=>state.productList);

  const {products, loading, error} = productList;
  const location = useLocation();

  const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(listProducts());
        
    },[dispatch]);
  
    return (
    <>
        {(location.pathname != '/signin' && location.pathname != '/register')  
          && <SearchAppBar products={products}/> }        
    
    <Switch>
        <Route path='/signin' component={SignInSide}/>
        <Route path='/register' component={SignUp}/>
        <Route path='/results' component={Search}/>
        <Route exact path='/' component={()=><Home products={productList.products} loading={productList.loading} />}/>
        <Route exact path='/details/:id' component={Details}/>
        <Route exact path='/cart/:id?' component={Cart}/>

        <ProtectedRoute exact path='/admin/product' component={CreateProduct}/>

        <Route >
              Not Found
        </Route>
      
    </Switch> 
    <StickyFooter/>
    </> 
    )
}

export default RoutesAll
