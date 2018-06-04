import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Router from './router';

class App extends Component {
	componentWillMount() {
		//MongoDB stuff
	}
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<Router />
			</Provider>
		);
	}
}

export default App;
