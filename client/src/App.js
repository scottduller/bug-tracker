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

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Router>
					<Switch>
						<Route path='/' exact component={Landing} />
						<Route path='/sign-up' component={SignUp} />
						<Route path='/sign-in' component={SignIn} />
						<Route
							path='/site-policy/terms-of-service'
							component={TermsOfService}
						/>
						<Route
							path='/site-policy/privacy-policy'
							component={PrivacyPolicy}
						/>
						<Route
							path='/dashboard'
							component={Dashboard}
						/>
						<Route component={PageNotFound} />
					</Switch>
				</Router>
			</>
		</ThemeProvider>
	);
};

export default App;
