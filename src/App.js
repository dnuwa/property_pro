import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import Adverts from './components/Adverts';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Adverts />
      </div>
    </Provider>
  );
}

export default App;
