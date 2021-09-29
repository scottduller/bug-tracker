import styled from 'styled-components';

export const InfoRow = styled.div`
	display: flex;
	flex-direction: ${({ reverse }) =>
		reverse ? 'row-reverse' : 'row'};
	width: 100%;
	padding: 5rem 0;
	background-color: ${({ lightBg, theme }) =>
		lightBg ? '#fff' : theme.colours.tertiary};
	&:after {
		clear: both;
		content: '';
	}
`;

export const InfoColumn = styled.div`
	width: calc((100% / 12) * ${(props) => props.columns});
`;

export const InfoImageWrap = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${({ reverse }) =>
		reverse ? '0 0 0 8rem' : '0 8rem 0 0'};
`;

export const InfoImage = styled.img`
	width: 100%;
`;

export const InfoTextWrap = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: ${({ reverse }) =>
		reverse ? 'flex-start' : 'flex-end'};
	justify-content: center;
	text-align: ${({ reverse }) => (reverse ? 'left' : 'right')};
	padding: 0 8rem;
`;

export const InfoTopLine = styled.h3`
	font-weight: bold;
	color: ${({ theme }) => theme.colours.emphasis};
`;

export const InfoHeadline = styled.h1`
	font-weight: bolder;
	color: #000;
`;

export const InfoDescription = styled.p``;
