import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOG_IN_USER_SUCCESS,
	LOG_IN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	error: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  console.log(state, action);
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOG_IN_USER_SUCCESS:
			return { ...state, user: action.payload, error: '' };
		case LOG_IN_USER_FAIL:
			return { ...state, error: 'Authentication Failed.' };
		default:
			return state;
	}
};
