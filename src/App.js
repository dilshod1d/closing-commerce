import './App.css';
import Home from './pages/homepage/Home.component';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
