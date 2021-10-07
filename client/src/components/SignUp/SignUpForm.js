import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import api from '../../utils/api';

const SignUpForm = () => {
	return (
		<>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					password: '',
					confirmPassword: '',
					agreeTerm: false,
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, '* Must be 15 characters or less')
						.required('* Please enter your first name'),
					lastName: Yup.string()
						.max(20, '* Must be 20 characters or less')
						.required('* Please enter your last name'),
					email: Yup.string()
						.email('* Invalid email address')
						.required('* Please enter a valid email')
						.test(
							'unique-email',
							'* Email already in use',
							function (value) {
								return new Promise(
									(resolve, reject) => {
										api.get(
											`/users?email=${value}`
										)
											.then((res) => {
												if (res.data.length)
													throw new Error();
												resolve(true);
											})
											.catch(() => {
												resolve(false);
											});
									}
								);
							}
						),
					password: Yup.string()
						.required('* Please enter a valid password')
						.matches(
							/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
							'* Please enter a valid password (at least 1 uppercase, 1 lowercase, 1 special character, 1 number and a minimum of 8 characters)'
						),
					confirmPassword: Yup.string()
						.required('* Please enter a valid password')
						.oneOf(
							[Yup.ref('password'), null],
							'* Passwords must match'
						),
					agreeTerm: Yup.boolean()
						.required(
							'* Please read and accept the terms and conditions.'
						)
						.oneOf(
							[true],
							'* Please read and accept the terms and conditions.'
						),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				<Form>
					<div className='mb-3'>
						<Field
							type='text'
							className='form-control'
							placeholder='First Name'
							name='firstName'
						/>
						<ErrorMessage
							name='firstName'
							render={(msg) => (
								<div className='text-danger'>
									{msg}
								</div>
							)}
						/>
					</div>
					<div className='mb-3'>
						<Field
							type='text'
							className='form-control'
							placeholder='Last Name'
							name='lastName'
						/>
						<ErrorMessage
							name='lastName'
							render={(msg) => (
								<div className='text-danger'>
									{msg}
								</div>
							)}
						/>
					</div>
					<div className='mb-3'>
						<Field
							className='form-control'
							placeholder='Email'
							name='email'
						/>
						<ErrorMessage
							name='email'
							render={(msg) => (
								<div className='text-danger'>
									{msg}
								</div>
							)}
						/>
					</div>
					<div className='mb-3'>
						<Field
							type='password'
							className='form-control'
							placeholder='Password (at least 8 characters long)'
							name='password'
						/>
						<ErrorMessage
							name='password'
							render={(msg) => (
								<div className='text-danger'>
									{msg}
								</div>
							)}
						/>
					</div>
					<div className='mb-4'>
						<Field
							type='password'
							className='form-control'
							placeholder='Confirm Password'
							name='confirmPassword'
						/>
						<ErrorMessage
							name='confirmPassword'
							render={(msg) => (
								<div className='text-danger'>
									{msg}
								</div>
							)}
						/>
					</div>
					<div className='mb-4 form-check'>
						<Field
							type='checkbox'
							className='form-check-input'
							name='agreeTerm'
							id='agree'
						/>
						<label
							className='form-check-label'
							htmlFor='agree'
						>
							I agree to the{' '}
							<Link to='/site-policy/terms-of-service'>
								Terms of Service
							</Link>{' '}
							and{' '}
							<Link to='/site-policy/privacy-policy'>
								Privacy Policy
							</Link>
						</label>
						<ErrorMessage
							name='agreeTerm'
							render={(msg) => (
								<div className='text-danger'>
									{msg}
								</div>
							)}
						/>
					</div>
					<button
						type='submit'
						className='btn btn-emphasis w-100 text-white'
						name='submit'
					>
						Sign Up
					</button>
				</Form>
			</Formik>
		</>
	);
};

export default SignUpForm;
