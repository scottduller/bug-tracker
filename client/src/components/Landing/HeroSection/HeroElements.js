import styled from 'styled-components/macro';
import {
	Container,
	Button,
	Title,
	Flex,
} from '../../shared/SharedElements';

export const Wrapper = styled.div`
	height: 80vh;
	width: 100vw;
	background-color: ${({ theme }) => theme.colours.secondary};
`;

export const CTA = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	justify-content: center;
`;

export const Content = styled(Flex)`
	width: 40%;
	gap: 2em;
	text-align: center;
`;

export const Body = styled.span`
	font-size: 1.25em;
`;

export const HeroBtn = styled(Button)`
	margin: 0 auto;
	svg {
		margin-bottom: 0.15rem;
		margin-left: 0.5rem;
	}
`;

export const HeroImage = styled.img`
	width: 35vw;
`;
