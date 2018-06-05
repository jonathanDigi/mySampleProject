import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOG_IN_USER,
	LOG_IN_USER_SUCCESS,
	LOG_IN_USER_FAIL
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
		.catch(() => {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(user => logInUserSuccess(dispatch, user))
				.catch(() => logInUserFail(dispatch));
		});
};

const logInUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOG_IN_USER_SUCCESS,
		payload: user
	});
	Actions.main(); // THE Actual transition with the key of 'EmployeeList'
};

const logInUserFail = dispatch => {
	dispatch({ type: LOG_IN_USER_FAIL });
};
