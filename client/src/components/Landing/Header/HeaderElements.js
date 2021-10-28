import styled from 'styled-components/macro';
import { FaBars } from 'react-icons/fa';
import { Button } from '../../shared/SharedElements';
import { Link as LinkS } from 'react-scroll';

export const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 80px;
	position: fixed;
	top: 0;
	padding: 0.7rem 0;
	background-color: ${({ scrollNav }) =>
		scrollNav ? 'white' : 'transparent'};
	transition: background-color 0.2s ease-in-out;
	z-index: 99;

	&.active {
		height: 100vh;
		background-color: ${({ theme }) => theme.colours.dark};
	}
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;

	&.active {
		flex-direction: column;
	}
`;

export const RegisterBtns = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	list-style: none;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		flex-direction: row;
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
	}
`;

export const NavLinks = styled.ul`
	display: none;
	list-style: none;
	margin: 0;
	padding: 0;
	align-items: center;

	&.active {
		display: flex;
		flex-direction: column;
	}

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		display: flex;
	}
`;

export const NavLinkItem = styled.li`
	padding-right: 1rem;
	font-weight: 800;

	&.active {
		padding: 0;
		margin-bottom: 1rem;
		color: ${({ theme }) => theme.colours.shadow};
	}
`;

export const HeaderBtn = styled(Button)`
	padding: 0.75em 2em;

	svg {
		margin-bottom: 0.15rem;
		margin-left: 0.5rem;
	}

	&.active {
		margin-top: 1rem;
	}
`;

export const NavLink = styled(LinkS)`
	cursor: pointer;

	&.active {
		border-bottom: 3px solid
			${({ theme }) => theme.colours.emphasis};
	}
`;

export const Bars = styled(FaBars)`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
	color: ${({ theme }) => theme.colours.dark};

	&.active {
		color: white;
	}

	@media screen and (min-width: 768px) {
		display: none;
	}
`;
