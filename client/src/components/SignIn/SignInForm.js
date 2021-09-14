import React, { useState } from 'react';
import './SignInForm.css';

const SignUpForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		alert(JSON.stringify(formData));
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='mb-3'>
				<input
					type='email'
					className='form-control'
					placeholder='Email'
					name='email'
					value={email}
					onChange={onChange}
				/>
			</div>
			<div className='mb-3'>
				<input
					type='password'
					className='form-control'
					placeholder='Password (at least 8 characters long)'
					name='password'
					value={password}
					onChange={onChange}
				/>
			</div>
			<button type='submit' className='btn btn-primary w-100'>
				Sign In
			</button>
		</form>
	);
};

export default SignUpForm;
