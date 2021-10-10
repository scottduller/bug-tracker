import React from 'react';
import styled from 'styled-components';
import {
	BgColumn,
	ImageWrapper,
	Row,
} from '../components/SignUp/Page/PageElements';
import SignUpForm from '../components/SignUp/Form';
import {
	AgreeText,
	Link,
} from '../components/SignUp/Form/FormElements';
import Header from '../components/SignUp/Header';
import svg5 from '../assets/images/svg5.svg';

const SignUp = () => {
	const FormWrapper = styled.div`
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
		@media screen and (min-width: ${({ theme }) =>
				theme.breakpoints.desktop}) {
			max-width: 50%;
			margin: 0;
		}
	`;

	return (
		<>
			<BgColumn />
			<Header />
			<Row>
				<FormWrapper>
					<SignUpForm />
				</FormWrapper>
				<ImageWrapper>
					<img src={svg5} alt='hello' />
				</ImageWrapper>
			</Row>
		</>
	);
};
export default SignUp;
