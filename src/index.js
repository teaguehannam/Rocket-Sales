import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import './style/main.scss';

const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('root')
);
