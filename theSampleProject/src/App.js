import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyC4RwBjnYSahqnpDj_jWXdI5t9_icovbAs',
			authDomain: 'mysampleproject-aaff8.firebaseapp.com',
			databaseURL: 'https://mysampleproject-aaff8.firebaseio.com',
			projectId: 'mysampleproject-aaff8',
			storageBucket: 'mysampleproject-aaff8.appspot.com',
			messagingSenderId: '747267529385'
		};
		firebase.initializeApp(config);
	}
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
