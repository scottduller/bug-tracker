import styled from 'styled-components';

export const Page = styled.div`
	height: 100vh;
	width: 100vw;
`;

export const Container = styled.div`
	padding: 0 20px;
	margin: 0 auto;
	width: ${({ theme }) => theme.breakpoints.tv};
	max-width: 100%;
`;

export const Flex = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: ${(props) => props.direction || 'column'};
`;

export const Row = styled.div`
	display: flex;
	flex-direction: ${({ reverse }) =>
		reverse ? 'row-reverse' : 'row'};
	width: 100%;
	height: 100%;
	&:after {
		clear: both;
		content: '';
	}
`;

export const Column = styled.div`
	width: calc((100% / 12) * ${(props) => props.columns});
	background-color: ${(props) => props.bg || 'transparent'};
	height: 100%;
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
