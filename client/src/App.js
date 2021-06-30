import {BrowserRouter , Switch, Route} from 'react-router-dom';
import React,{useEffect} from 'react';
import './App.css';
import Products from './components/Products/Products';
import  SearchAppBar from './components/Navbar/Navbar';
import Details from './components/Details/Details';
import {useSelector, useDispatch} from 'react-redux';
import { listProducts } from './actions/index';
import Cart from './components/Cart/Cart';


function App() {


  const productList = useSelector(state=>state.productList);

  const {products, loading, error} = productList;
  
  const dispatch = useDispatch();
  
  useEffect(() => {

      dispatch(listProducts())

  }, [dispatch]);

  return (

    <div className="App">
      <BrowserRouter>

        <SearchAppBar products={products} />
      
        <Switch>
            <Route exact path='/' component={()=><Products products={productList.products} loading={productList.loading} />}/>
            <Route exact path='/details/:id' component={Details}/>
            <Route exact path='/cart/:id?' component={Cart}/>
        </Switch> 
      
      </BrowserRouter>

    </div>
  );
}

export default App;
