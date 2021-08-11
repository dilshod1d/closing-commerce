import './App.css';
import Home from './pages/homepage/Home.component';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Signin from './pages/signin/signin.component';
import { auth } from './firebase/firebase.utils';
import { Component } from 'react';
import { createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      }
      this.setState({
        currentUser: userAuth,
      });
    });
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
