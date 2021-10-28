import styled from 'styled-components/macro';
import { AiOutlineBug } from 'react-icons/ai';
import { Link as LinkS } from 'react-scroll';

export const Page = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: ${(props) => props.bg || 'transparent'};
`;

export const Container = styled.div`
	padding: 0 20px;
	margin: 0 auto;
	width: 100%;
	max-width: ${({ theme }) => theme.breakpoints.tv};
`;

export const Flex = styled.div`
	display: flex;
	align-items: ${({ align }) => align || 'flex-start'};
	justify-content: center;
	flex-direction: ${(props) => props.direction || 'column'};
`;

export const Row = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	&:after {
		clear: both;
		content: '';
	}

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		height: 100vh;
		margin: 0;
		flex-direction: ${({ reverse }) =>
			reverse ? 'row-reverse' : 'row'};
	}
`;

export const Column = styled.div`
	background-color: ${(props) => props.bg || 'transparent'};
	width: 100%;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		width: calc((100% / 12) * ${(props) => props.columns});
	}
`;

export const Button = styled.button`
	border-radius: 50px;
	border: none;
	box-shadow: 0px 5px 15px 3px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	font-weight: 400;
	padding: 1em 3em;
	background-color: ${({ bg }) => bg || '#fff'};
	color: ${({ colour }) => colour || '#333'};
	text-align: center;
	vertical-align: middle;
	width: ${({ width }) => width};

	&:hover {
		opacity: 0.9;
		transform: scale(0.98);
	}
`;

export const Title = styled.span`
	font-size: ${(props) => props.size || '2rem'};
	font-weight: ${(props) => props.weight || '400'};
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		font-size: ${(props) => props.size || '3rem'};
	}
`;

export const Brand = styled(LinkS)`
	padding: 0.5rem 1rem;
	cursor: pointer;

	&.active {
		color: white;
		margin-bottom: 1rem;
	}
`;

export const Logo = styled(AiOutlineBug)`
	vertical-align: top;
	font-size: 1.75rem;
	margin-right: 0.4rem;

	color: ${({ colour }) => colour || '#333'};
`;
