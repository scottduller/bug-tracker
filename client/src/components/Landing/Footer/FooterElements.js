import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colours.dark};
	padding: 2rem 0;
`;

export const FooterRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	margin: auto;
	width: 100%;
	max-width: ${({ theme }) => theme.breakpoints.desktop};
	justify-content: space-between;
`;

export const FooterColumn = styled.div`
	width: 50%;

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		width: 25%;
	}
`;

export const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: transparent;
	padding: 2rem 2rem 0 2rem;
	text-align: center;

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		text-align: left;
	}
`;

export const FooterLink = styled(Link)`
	width: 100%;
	color: ${({ theme }) => theme.colours.shadow};
	text-decoration: none;
	margin-bottom: 1rem;
`;

export const ColumnTitle = styled.h6`
	color: white;
	margin-bottom: 1.5rem;
`;

export const BottomContainer = styled.div`
	display: flex;
	flex-direction: row;
	background-color: transparent;
	padding: 0 2rem 2rem 2rem;
	justify-content: space-between;
	color: ${({ theme }) => theme.colours.shadow};
`;

export const BottomColumnContainer = styled.div`
	display: flex;
	flex-direction: row;
	background-color: transparent;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 2rem;
	color: ${({ theme }) => theme.colours.shadow};
	text-align: center;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		width: unset;
		text-align: left;
		justify-content: space-between;
	}
`;

export const BottomFooterLink = styled(Link)`
	color: ${({ theme }) => theme.colours.shadow};
	text-decoration: none;
	white-space: nowrap;
	text-align: center;
	width: 100%;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		width: unset;
		margin-right: 2rem;
		text-align: left;
	}
`;

export const SocialFooterLink = styled.a`
	color: ${({ theme }) => theme.colours.shadow};
	text-decoration: none;
	white-space: nowrap;
	margin: 0 2rem;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		margin-right: 2rem;
	}
`;

export const Socials = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: auto;
`;
