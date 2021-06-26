
import './App.css';
import Products from './components/Products/Products';
import  SearchAppBar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <Products/>
    </div>
  );
}

export default App;
