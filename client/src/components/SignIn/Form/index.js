import React from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import {
	Form,
	Field,
	FormWrapper,
	Label,
	InputGroup,
	HeaderText,
} from './FormElements';
import { Button } from '../../shared/SharedElements';
import theme from '../../shared/theme';
import api from '../../../utils/api';
import { useHistory } from 'react-router';

const Index = () => {
	const history = useHistory();

	const handleSubmit = async (data) => {
		const { email, password } = data;

		const res = await api.get(
			`/users?email=${email}&password=${password}`
		);

		if (res.data.length !== 0) {
			localStorage.setItem('user', JSON.stringify(res.data[0]));
			history.push('/dashboard');
		}
	};

	return (
		<FormWrapper>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={Yup.object({
					email: Yup.string()
						.email('Invalid email address')
						.required('Please enter a valid email'),
					password: Yup.string().required(
						'Please enter a valid password'
					),
				})}
				onSubmit={async (values) => {
					await handleSubmit(values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<HeaderText>Sign In</HeaderText>
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
								autoComplete='current-password'
							/>
							<ErrorMessage
								name='password'
								render={(msg) => <span>{msg}</span>}
							/>
						</InputGroup>
						<InputGroup>
							<Button
								bg={theme.colours.emphasis}
								colour='white'
								width='100%'
								type='submit'
							>
								Log In
							</Button>
						</InputGroup>
					</Form>
				)}
			</Formik>
		</FormWrapper>
	);
};

export default Index;
