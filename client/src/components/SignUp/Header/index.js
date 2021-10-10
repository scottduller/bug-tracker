import React from 'react';
import {
	Brand,
	Flex,
	Logo,
	Title,
} from '../../shared/SharedElements';
import theme from '../../shared/theme';
import { Header } from './HeaderElements';

const Index = () => {
	return (
		<Header>
			<Flex align='center'>
				<Brand>
					<Logo colour={theme.colours.emphasis} />
					<Title size={'1.25rem'}>BUG TRACKER</Title>
				</Brand>
			</Flex>
		</Header>
	);
};

export default Index;
