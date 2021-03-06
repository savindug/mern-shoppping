import './App.css';
import { Header } from './components/layout/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
