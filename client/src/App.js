import {BrowserRouter , Switch, Route} from 'react-router-dom';

import './App.css';
import Products from './components/Products/Products';
import  SearchAppBar from './components/Navbar/Navbar';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
       <SearchAppBar/>
          <Switch>
              <Route exact path='/' component={Products}/>
              <Route exact path='/details/:id' component={Details}/>
          </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
