import './App.css';
import { Header } from './components/layout/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/screens/Home';
import { About } from './components/screens/About';
import { Login } from './components/screens/auth/Login';
import { Register } from './components/screens/auth/Register';
import { Products } from './components/screens/products/Products';
import { Cart } from './components/screens/cart/Cart';
import { ProductDeatails } from './components/screens/products/ProductDeatails';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={ProductDeatails} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
