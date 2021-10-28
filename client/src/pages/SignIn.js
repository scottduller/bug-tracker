import React from 'react';
import {
	BgColumn,
	ImageWrapper,
	Row,
	FormWrapper,
	Wrapper,
} from '../components/SignIn/Page/PageElements';
import SignInForm from '../components/SignIn/Form';
import Header from '../components/SignIn/Header';
import svg5 from '../assets/images/svg5.svg';

const SignUp = () => {
	return (
		<Wrapper>
			<BgColumn />
			<Header />
			<Row>
				<FormWrapper>
					<SignInForm />
				</FormWrapper>
				<ImageWrapper>
					<img src={svg5} alt='hello' />
				</ImageWrapper>
			</Row>
		</Wrapper>
	);
};
export default SignUp;
