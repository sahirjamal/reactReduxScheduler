import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const store = createStore(/* my reducer here */)


ReactDOM.render(
<Provider store={store}>
  <h1>Hello Boss</h1>
</Provider>,
	document.getElementById('root'));