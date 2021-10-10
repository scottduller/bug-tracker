import styled from 'styled-components/macro';
import { Row, Column } from '../../shared/SharedElements';

export const InfoRow = styled(Row)`
	background-color: ${({ lightBg, theme }) =>
		lightBg ? '#fff' : theme.colours.tertiary};
	padding: 6rem 0 !important;
	flex-direction: column-reverse;
	height: 100%;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		flex-direction: ${({ reverse }) =>
			reverse ? 'row-reverse' : 'row'};
	}
`;

export const InfoColumn = styled(Column)``;

export const InfoImageWrap = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 3rem;

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		padding: ${({ reverse }) =>
			reverse ? '0 0 0 4rem' : '0 4rem 0 0'};
	}

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		padding: ${({ reverse }) =>
			reverse ? '0 0 0 6rem' : '0 6rem 0 0'};
	}

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.tv}) {
		padding: ${({ reverse }) =>
			reverse ? '0 0 0 8rem' : '0 8rem 0 0'};
	}
`;

export const InfoImage = styled.img`
	width: 50%;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		width: 80%;
	}
`;

export const InfoTextWrap = styled.div`
	text-align: center;
	height: 100%;
	width: 100%;
	max-width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		align-items: ${({ reverse }) =>
			reverse ? 'flex-start' : 'flex-end'};
		text-align: ${({ reverse }) => (reverse ? 'left' : 'right')};
	}

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		padding: 0 4rem;
	}
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
