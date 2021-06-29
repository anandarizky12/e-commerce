import {BrowserRouter , Switch, Route} from 'react-router-dom';
import React,{useEffect} from 'react';
import './App.css';
import Products from './components/Products/Products';
import  SearchAppBar from './components/Navbar/Navbar';
import Details from './components/Details/Details';

import {useSelector, useDispatch} from 'react-redux';
import { listProducts } from './actions';


function App() {


  const productList = useSelector(state=>state.productList);
  const {products, loading, error} = productList;
  const dispatch = useDispatch();
  
  useEffect(() => {
      // data.products.map(data=>{
      //     !category.includes(data.category) && 
      //     category.push(data.category)
      // })
      dispatch(listProducts())

  }, []);

  console.log(productList);

  return (
    <div className="App">
    
      {/* <BrowserRouter> */}
       <SearchAppBar/>
          {/* <Switch>
              <Route exact path='/' component={Products}/>
              <Route exact path='/details/:id' component={Details}/>
          </Switch> */}
      {/* </BrowserRouter> */}

    </div>
  );
}

export default App;
