import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Adverts from './components/Adverts';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './components/Login'
import Notifications, { notify } from './components/Notifications'

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
        </div>
      </Provider>
    </Router>
  );
}

export default App;
