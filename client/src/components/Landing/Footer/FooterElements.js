import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colours.dark};
`;

export const FooterContainer = styled.div`
	background-color: transparent;
	max-width: ${({ theme }) => theme.breakpoints.desktop};
	width: 100%;
	padding: 2rem 0;
`;

export const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: transparent;
	padding: 2rem 2rem;
	text-align: left;
`;

export const FooterLink = styled(Link)`
	width: 100%;
	color: #999999;
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
	color: #999999;
`;

export const BottomColumnContainer = styled.div`
	display: flex;
	flex-direction: row;
	background-color: transparent;
	justify-content: center;
	align-items: center;
	color: #999999;
`;

export const BottomFooterLink = styled(Link)`
	width: 100%;
	color: #999999;
	text-decoration: none;
	margin-right: 2rem;
	white-space: nowrap;
`;

export const Socials = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
