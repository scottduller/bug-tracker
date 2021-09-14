import React from 'react';
import SignInForm from '../components/SignIn/SignInForm';
import './SignIn.css';

const SignIn = () => {
	return (
		<div className='wrapper'>
			<h1 className='mb-5'>Sign In!</h1>
			<SignInForm />
		</div>
	);
};

export default SignIn;
