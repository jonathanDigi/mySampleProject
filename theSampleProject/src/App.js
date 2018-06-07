import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './router';
import { Copyright } from './components/common';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyC4RwBjnYSahqnpDj_jWXdI5t9_icovbAs',
			authDomain: 'mysampleproject-aaff8.firebaseapp.com',
			databaseURL: 'https://mysampleproject-aaff8.firebaseio.com',
			projectId: 'mysampleproject-aaff8',
			storageBucket: 'mysampleproject-aaff8.appspot.com',
			messagingSenderId: '747267529385'
		});
	}
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<Router style={{ flex: 4 }} />
					<Copyright style={{ flex: 1 }} />
				</View>
			</Provider>
		);
	}
}

export default App;
