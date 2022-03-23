import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

import './App.css';

import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './components/routing/ProtectedRoute';

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './index.css';
import AuthState from './context/auth/AuthState';
import { login } from './context/auth/authActions';
import Home from './pages/Home';
import setAuthToken from './utils/setAuthToken';

const App = () => {
	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});

	useEffect(() => {
		setAuthToken(localStorage.getItem('token'));
	}, []);

	return (
		<AuthState>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Router>
					<Routes>
						<Route path='register' element={<Register />} />
						<Route path='login' element={<Login />} />
						<Route
							path='/'
							element={<ProtectedRoute component={Home} />}
						/>
					</Routes>
				</Router>
			</ThemeProvider>
		</AuthState>
	);
};

export default App;
