import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import {
	Container,
	Row,
	Column,
	Flex,
	Button,
	Title,
} from '../../shared/SharedElements';
import {
	CTA,
	HeroImage,
	HeroImageWrap,
	Content,
	HeroBtn,
	Body,
	Wrapper,
} from './HeroElements';
import theme from '../../shared/theme';

import svg1 from '../../../assets/images/svg1.svg';
import { FaSignInAlt } from 'react-icons/fa';

const Index = () => {
	const history = useHistory();
	const handleOnClick = useCallback(
		() => history.push('/sign-up'),
		[history]
	);

	return (
		<Wrapper>
			<CTA>
				<Content>
					<Title weight={'600'}>
						Organise and get in control of your project's
						bug tracking.
					</Title>
					<Body>
						This tool is used to identify and communicate
						bugs to your team quickly and reliably to help
						you spend less time documenting bugs and more
						time fixing them.
					</Body>
					<HeroBtn
						onClick={handleOnClick}
						bg={theme.colours.emphasis}
						colour='#fff'
					>
						<span>Get Started</span>
						<FaSignInAlt />
					</HeroBtn>
				</Content>
				<HeroImage src={svg1} alt='mobile' />
			</CTA>
		</Wrapper>
	);
};

export default Index;
