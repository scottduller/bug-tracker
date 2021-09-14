import React from 'react';
import SignUpForm from '../components/SignUp/SignUpForm';
import './SignUp.css';

const SignUp = () => {
	return (
		// <div className='wrapper'>
		// 	<div className='left-container'>
		// 		<h1 className='mb-5'>Register for free today!</h1>
		// 		<SignUpForm />
		// 	</div>
		// 	<div className='right-container p-4'></div>
		// </div>
		<div className='wrapper'>
			<h1 className='mb-5'>Register for free today!</h1>
			<SignUpForm />
		</div>
	);
};
export default SignUp;
