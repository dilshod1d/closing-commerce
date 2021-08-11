import './App.css';
import Home from './pages/homepage/Home.component';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Signin from './pages/signin/signin.component';
import { auth } from './firebase/firebase.utils';
import { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      this.setState({ currentUser: user })
    );
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/signin'>
            <Signin />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
