import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		organisation: '',
		password: '',
		confirmPassword: '',
		agreeTerm: false,
	});

	const {
		firstName,
		lastName,
		email,
		organisation,
		password,
		confirmPassword,
		agreeTerm,
	} = formData;

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
					type='text'
					className='form-control'
					placeholder='First Name'
					name='firstName'
					value={firstName}
					onChange={onChange}
				/>
			</div>
			<div className='mb-3'>
				<input
					type='text'
					className='form-control'
					placeholder='Last Name'
					name='lastName'
					value={lastName}
					onChange={onChange}
				/>
			</div>
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
					type='text'
					className='form-control'
					placeholder='Organisation'
					name='organisation'
					value={organisation}
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
			<div className='mb-4'>
				<input
					type='password'
					className='form-control'
					placeholder='Confirm Password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={onChange}
				/>
			</div>
			<div className='mb-4 form-check'>
				<input
					type='checkbox'
					class='form-check-input'
					id='agree'
					value={agreeTerm}
					onChange={() =>
						setFormData({
							...formData,
							agreeTerm: !agreeTerm,
						})
					}
				/>
				<label className='form-check-label' for='agree'>
					I agree to the <a href='#'>Terms of Service</a>{' '}
					and <a href='#'>Privacy Policy</a>
				</label>
			</div>
			<button type='submit' className='btn btn-primary w-100'>
				Sign Up
			</button>
		</form>
	);
};

export default SignUpForm;
