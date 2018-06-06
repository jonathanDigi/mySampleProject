import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOG_IN_USER,
	LOG_IN_USER_SUCCESS,
	LOG_IN_USER_FAIL,
	CREATE_AND_LOGIN_USER
} from './types';

export const emailChanged = text => ({
	type: EMAIL_CHANGED,
	payload: text
});

export const passwordChanged = text => ({
	type: PASSWORD_CHANGED,
	payload: text
});

export const logInUser = ({ email, password }) => dispatch => {
	dispatch({ type: LOG_IN_USER });

	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(user => logInUserSuccess(dispatch, user))
		.catch(err => {
			console.log('catching error', err);
			logInUserFail(dispatch);
		});
};

export const createAndLogInUser = ({ email, password }) => dispatch => {
	dispatch({ type: CREATE_AND_LOGIN_USER });

	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(user => logInUserSuccess(dispatch, user))
		.catch(err => {
			console.log('catching error', err);
			logInUserFail(dispatch);
		});
};

const logInUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOG_IN_USER_SUCCESS,
		payload: user
	});
	Actions.SuccessPage();
};

const logInUserFail = dispatch => {
	dispatch({ type: LOG_IN_USER_FAIL });
};
