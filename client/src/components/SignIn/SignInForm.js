import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignInForm.css';

const SignUpForm = () => {
	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={Yup.object({
				// TODO: Check credentials against API for submission
				email: Yup.string()
					.email('* Invalid email address')
					.required('* Please enter a valid email'),
				password: Yup.string().required('* Invalid password'),
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
						className='form-control'
						placeholder='Email'
						name='email'
					/>
					<ErrorMessage
						name='email'
						render={(msg) => (
							<div className='text-danger'>{msg}</div>
						)}
					/>
				</div>
				<div className='mb-3'>
					<Field
						type='password'
						className='form-control'
						placeholder='Password'
						name='password'
					/>
					<ErrorMessage
						name='password'
						render={(msg) => (
							<div className='text-danger'>{msg}</div>
						)}
					/>
				</div>
				<button
					type='submit'
					className='btn btn-primary w-100'
				>
					Sign In
				</button>
			</Form>
		</Formik>
	);
};

export default SignUpForm;
