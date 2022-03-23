import axios from 'axios';

const setAuthToken = (token) => {
	if (token) {
		axios.defaults.headers.common[
			'Authorization'
		] = `Bearer ${token}`;
		localStorage.setItem('token', token);
	} else {
		delete axios.defaults.headers.common['x-auth-token'];
		localStorage.removeItem('token');
	}
};

export default setAuthToken;
