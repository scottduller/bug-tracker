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
import { CTA, HeroImage, HeroImageWrap } from './HeroElements';
import theme from '../../shared/theme';

import svg1 from '../../../assets/images/svg1.svg';

const Index = () => {
	const history = useHistory();
	const handleOnClick = useCallback(
		() => history.push('/sign-up'),
		[history]
	);

	return (
		<Row id='hero' reverse={false}>
			<Column columns={5} bg={theme.colours.secondary}>
				<HeroImageWrap>
					<HeroImage src={svg1} alt='mobile' />
				</HeroImageWrap>
			</Column>
			<Column columns={7}>
				<CTA>
					<Container>
						<Flex>
							<Title weight={'600'}>
								Organise and get in control of your
								project's bug tracking.
							</Title>
							<span>
								This tool is used to identify and
								communicate bugs to your team quickly
								and reliably to help you spend less
								time documenting bugs and more time
								fixing them.
							</span>
							<Button
								onClick={handleOnClick}
								bg={theme.colours.emphasis}
								colour='#fff'
							>
								<span>Get Started</span>
							</Button>
						</Flex>
					</Container>
				</CTA>
			</Column>
		</Row>
	);
};

export default Index;
