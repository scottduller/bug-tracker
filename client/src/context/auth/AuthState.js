import React, { useReducer, useContext, useEffect } from 'react';
import { loadUser } from './authActions';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';

export const useAuth = () => {
	const { state, dispatch } = useContext(AuthContext);
	return [state, dispatch];
};

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		user: JSON.parse(localStorage.getItem('user')),
		error: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	setAuthToken(state.token);

	if (state.loading) {
		loadUser(dispatch);
	}

	useEffect(() => {
		setAuthToken(state.token);
	}, [state.token]);

	return (
		<AuthContext.Provider value={{ state: state, dispatch }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
