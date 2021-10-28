import React from 'react';
import {
	BgColumn,
	ImageWrapper,
	Row,
	FormWrapper,
	Wrapper,
} from '../components/SignUp/Page/PageElements';
import SignUpForm from '../components/SignUp/Form';
import Header from '../components/SignUp/Header';
import svg5 from '../assets/images/svg5.svg';

const SignUp = () => {
	return (
		<Wrapper>
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
		</Wrapper>
	);
};
export default SignUp;
