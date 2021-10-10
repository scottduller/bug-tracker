import React from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import {
	Form,
	Field,
	Error,
	FormWrapper,
	Link,
	Label,
	InputGroup,
	NameGroup,
	AgreeText,
	HeaderText,
} from './FormElements';
import { Button } from '../../shared/SharedElements';
import theme from '../../shared/theme';
import api from '../../../utils/api';

const index = () => {
	return (
		<FormWrapper>
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
						.max(15, 'Must be 15 characters or less')
						.required('Please enter your first name'),
					lastName: Yup.string()
						.max(20, 'Must be 20 characters or less')
						.required('Please enter your last name'),
					email: Yup.string()
						.email('Invalid email address')
						.required('Please enter a valid email')
						.test(
							'unique-email',
							'Email already in use',
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
						.required('Please enter a valid password')
						.matches(
							/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
							'Please enter a valid password (at least 1 uppercase, 1 lowercase, 1 special character, 1 number and a minimum of 8 characters)'
						),
					confirmPassword: Yup.string()
						.required('Please enter a valid password')
						.oneOf(
							[Yup.ref('password'), null],
							'Passwords must match'
						),
					agreeTerm: Yup.boolean()
						.required(
							'Please read and accept the terms and conditions.'
						)
						.oneOf(
							[true],
							'Please read and accept the terms and conditions.'
						),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<HeaderText>Sign Up Free</HeaderText>
						<NameGroup>
							<InputGroup>
								<Label htmlFor='firstName'>
									First Name
								</Label>
								<Field
									className={
										errors.firstName &&
										touched.firstName
											? 'error'
											: ''
									}
									type='text'
									name='firstName'
								/>
								<ErrorMessage
									name='firstName'
									render={(msg) => (
										<span>{msg}</span>
									)}
								/>
							</InputGroup>
							<InputGroup>
								<Label htmlFor='lastName'>
									Last Name
								</Label>
								<Field
									className={
										errors.lastName &&
										touched.lastName
											? 'error'
											: ''
									}
									type='text'
									name='lastName'
								/>
								<ErrorMessage
									name='lastName'
									render={(msg) => (
										<span>{msg}</span>
									)}
								/>
							</InputGroup>
						</NameGroup>
						<InputGroup>
							<Label htmlFor='email'>Email</Label>
							<Field
								className={
									errors.email && touched.email
										? 'error'
										: ''
								}
								type='email'
								name='email'
							/>
							<ErrorMessage
								name='email'
								render={(msg) => <span>{msg}</span>}
							/>
						</InputGroup>
						<InputGroup>
							<Label htmlFor='password'>Password</Label>
							<Field
								className={
									errors.password &&
									touched.password
										? 'error'
										: ''
								}
								type='password'
								name='password'
							/>
							<ErrorMessage
								name='password'
								render={(msg) => <span>{msg}</span>}
							/>
						</InputGroup>
						<InputGroup>
							<Label htmlFor='confirmPassword'>
								Confirm Password
							</Label>
							<Field
								className={
									errors.confirmPassword &&
									touched.confirmPassword
										? 'error'
										: ''
								}
								type='password'
								name='confirmPassword'
							/>
							<ErrorMessage
								name='confirmPassword'
								render={(msg) => <span>{msg}</span>}
							/>
						</InputGroup>
						{/* <InputGroup>
						<Label htmlFor='agreeTerm'>
							<Field type='checkbox' name='agreeTerm' />
							
						</Label>
						<ErrorMessage
							name='agreeTerm'
							render={(msg) => <span>{msg}</span>}
						/>
					</InputGroup> */}
						<AgreeText>
							By signing up you agree to the{' '}
							<Link to='/site-policy/terms-of-service'>
								Terms of Service
							</Link>{' '}
							and{' '}
							<Link to='/site-policy/privacy-policy'>
								Privacy Policy
							</Link>
							.
						</AgreeText>
						<InputGroup>
							<Button
								bg={theme.colours.emphasis}
								colour='white'
								width='100%'
							>
								Get started free
							</Button>
						</InputGroup>
					</Form>
				)}
			</Formik>
		</FormWrapper>
	);
};

export default index;
