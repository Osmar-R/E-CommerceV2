import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Products from './Components/Products';
import Contact from './Components/Contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router> 
    <div className="App">
    <Navbar />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/contact" component={Contact} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
