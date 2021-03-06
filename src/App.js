import './App.css';
import { Header } from './components/layout/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';

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
        </div>
      </Switch>
    </Router>
  );
}

export default App;
