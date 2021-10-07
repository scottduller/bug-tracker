import styled from 'styled-components';

export const Page = styled.div`
	height: 100vh;
	width: 100vw;
`;

export const Container = styled.div`
	padding: 0 20px;
	margin: 0 auto;
	width: 100%;
	max-width: ${({ theme }) => theme.breakpoints.tv};
`;

export const Flex = styled.div`
	display: flex;
	align-items: flex-start;
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
	border-radius: 10px;
	border: none;
	box-shadow: ${({ theme }) => theme.colours.emphasis} 0px 0px 10px;
	cursor: pointer;
	font-weight: 400;
	padding: 0.75rem 2rem;
	background-color: ${({ bg }) => bg || '#fff'};
	color: ${({ colour }) => colour || '#333'};
	text-align: center;
	vertical-align: middle;

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
