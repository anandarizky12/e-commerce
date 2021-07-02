import {BrowserRouter , Switch, Route} from 'react-router-dom';
import React,{useEffect} from 'react';
import './App.css';
import Products from './components/Products/Products';
import  SearchAppBar from './components/Navbar/Navbar';
import Details from './components/Details/Details';
import {useSelector, useDispatch} from 'react-redux';
import { listProducts } from './actions/index';
import Cart from './components/Cart/Cart';
import SignInSide from './components/Login/SignIn/SignIn';
import SignUp from './components/Login/SignUp/SignUp';
import { useLocation } from 'react-router-dom';
import StickyFooter from './components/Footer/Footer';


function App() {


  const productList = useSelector(state=>state.productList);

  const {products, loading, error} = productList;
  const location = useLocation();
  const dispatch = useDispatch();
  
  useEffect(() => {

      dispatch(listProducts());

  }, [dispatch]);

  console.log(location.pathname)
 
  return (
   
      <div className="App">
      
          {(location.pathname != '/signin' && location.pathname != '/register')  
          && <SearchAppBar products={products}/> } 
            

            
          <Switch>
              <Route path='/signin' component={SignInSide}/>
              <Route path='/register' component={SignUp}/>
              <Route exact path='/' component={()=><Products products={productList.products} loading={productList.loading} />}/>
              <Route exact path='/details/:id' component={Details}/>
              <Route exact path='/cart/:id?' component={Cart}/>
              <Route >
                    Not Found
              </Route>
          </Switch> 

          <StickyFooter/>
        
    

      </div>
   
  );
}

export default App;
