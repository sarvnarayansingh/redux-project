import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import reducer from './Store/reducer' no need bcz all root reducer is import in indivisualy



//createrStore from redux package
import {createStore, combineReducers} from 'redux'
// Provider comes from react-redux package
import { Provider } from 'react-redux';
import {counterReducer} from './Store/Reducer/counter'
import {resultReducer} from './Store/Reducer/results'


const rootReducer = combineReducers({
  ctrl:counterReducer,
  res:resultReducer
})
const store = createStore(rootReducer)


ReactDOM.render(
  <Provider store = {store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
