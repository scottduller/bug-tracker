import React from 'react';
import { render } from 'react-dom';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';

import { CssBaseline, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './index.css';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

render(
	<ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<Router>
			<Routes>
				<Route path='register' element={<Register />} />
				<Route path='login' element={<Login />} />
				<Route path='/' element={<App />} />
			</Routes>
		</Router>
	</ThemeProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
