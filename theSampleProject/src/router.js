import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginOrSignUpPage from './components/LoginOrSignUpPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import SuccessPage from './components/SuccessPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';

const RouterComponent = () => (
	<Router>
		<Scene key="root">
			<Scene
				key="LoginOrSignUp"
				component={LoginOrSignUpPage}
				hideNavBar
				title="Login or Signup"
				initial
			/>
			<Scene key="LoginPage" component={LoginPage} hideNavBar />
			<Scene key="SignupPage" component={SignupPage} />
			<Scene key="SuccessPage" component={SuccessPage} hideNavBar />
			<Scene key="ForgotPage" component={ForgotPasswordPage} hideNavBar />
		</Scene>
	</Router>
);

export default RouterComponent;
