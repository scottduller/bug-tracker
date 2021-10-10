import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from './components/shared/theme';
import GlobalStyles from './components/shared/Global';

import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PageNotFound from './pages/PageNotFound';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';

const App = () => {
	const [bgColour, setBgColour] = useState('transparent');

	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles bgColour={bgColour} />
				<Router>
					<Switch>
						<Route
							path='/'
							exact
							component={() => {
								setBgColour('transparent');
								return <Landing />;
							}}
						/>
						<Route
							path='/sign-up'
							component={() => {
								setBgColour(theme.colours.secondary);
								return <SignUp />;
							}}
						/>
						<Route
							path='/sign-in'
							component={() => {
								setBgColour(theme.colours.secondary);
								return <SignIn />;
							}}
						/>
						<Route
							path='/site-policy/terms-of-service'
							component={() => {
								setBgColour('transparent');
								return <TermsOfService />;
							}}
						/>
						<Route
							path='/site-policy/privacy-policy'
							component={() => {
								setBgColour('transparent');
								return <PrivacyPolicy />;
							}}
						/>
						<Route
							path='/dashboard'
							component={() => {
								setBgColour('transparent');
								return <Dashboard />;
							}}
						/>
						<Route component={PageNotFound} />
					</Switch>
				</Router>
			</>
		</ThemeProvider>
	);
};

export default App;
