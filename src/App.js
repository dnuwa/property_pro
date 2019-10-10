import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import Adverts from './components/Adverts';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Adverts />
      </div>
    </Provider>
  );
}

export default App;
