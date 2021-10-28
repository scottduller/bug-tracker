import React from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
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
import { useHistory } from 'react-router';

const Index = () => {
	const history = useHistory();
	const handleSubmit = async (data) => {
		const { firstName, lastName, email, password } = data;

		const res = await api.post('/users', {
			id: uuidv4(),
			firstName,
			lastName,
			bio: '',
			email,
			password,
			firstLogin: true,
			createdAt: new Date().toISOString(),
			lastLogin: new Date().toISOString(),
		});

		if (res.status < 300) {
			localStorage.setItem('user', JSON.stringify(res.data[0]));
			history.push('/dashboard');
		}
	};

	return (
		<FormWrapper>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					password: '',
					confirmPassword: '',
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
										if (value) {
											api.get(
												`/users?email=${value}`
											)
												.then((res) => {
													if (
														res.data
															.length
													)
														throw new Error();
													resolve(true);
												})
												.catch(() => {
													resolve(false);
												});
										}
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
				})}
				onSubmit={async (values) =>
					await handleSubmit(values)
				}
			>
				{({ errors, touched, isSubmitting }) => (
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
									autoComplete='given-name'
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
									autoComplete='family-name'
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
								autoComplete='email'
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
								autoComplete='new-password'
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
								autoComplete='new-password'
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
								type='submit'
								disabled={isSubmitting}
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

export default Index;
