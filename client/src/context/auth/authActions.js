import axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from '../types';

export const loadUser = async (dispatch) => {
	try {
		const res = await axios.get('/api/users');

		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		dispatch({ type: AUTH_ERROR });
	}
};

export const register = async (dispatch, formData) => {
	try {
		const res = await axios.post('/api/users', formData);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		});

		loadUser(dispatch);
	} catch (err) {
		dispatch({
			type: REGISTER_FAIL,
			payload: err.response.data.msg,
		});
	}
};

export const login = async (dispatch, formData) => {
	try {
		const res = await axios.post('/api/users/login', formData);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: LOGIN_FAIL,
			payload: err.response.data.msg,
		});
	}
};

export const logout = (dispatch) => {
	dispatch({ type: LOGOUT });
};

// Clear Errors
export const clearErrors = (dispatch) =>
	dispatch({ type: CLEAR_ERRORS });
