import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthState';

const PrivateRoute = ({ component: Component }) => {
	const [authState] = useAuth();

	const { isAuthenticated } = authState;
	if (isAuthenticated) return <Component />;
	return <Navigate to='/login' />;
};

export default PrivateRoute;
