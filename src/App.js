import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Adverts from './components/Adverts'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import PostAd from './components/PostAd'
import Advert from './components/Advert'
import Notifications from './components/Notifications'


library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Header />
          {/* <button onClick={() => notify('this is a notification') }>Click Me</button> */}
          <Notifications />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Adverts />
            </React.Fragment>
          )}/>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/advertise" component={PostAd} />
          <Route path="/advert" component={Advert} />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
