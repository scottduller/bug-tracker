import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PageNotFound from './pages/PageNotFound';

function App() {
	return (
		<>
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
					<Route component={PageNotFound} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
