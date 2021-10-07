import styled from 'styled-components';
import { AiOutlineBug } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Button } from '../../shared/SharedElements';
import { Link as LinkS } from 'react-scroll';

export const Brand = styled(LinkS)`
	padding: 0.5rem 1rem;
	cursor: pointer;

	&.active {
		color: white;
		margin-bottom: 1rem;
	}
`;

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

export const Logo = styled(AiOutlineBug)`
	vertical-align: top;
	font-size: 1.75rem;
	margin-right: 0.4rem;
	color: ${({ colour }) => colour || '#333'};
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
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		flex-direction: row;
		margin-left: 1.5rem;
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		margin-left: 5rem;
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

	&.active {
		padding: 0;
		margin-bottom: 1rem;
		color: ${({ theme }) => theme.colours.shadow};
	}
`;

export const HeaderBtn = styled(Button)`
	padding: 0.55rem 1.25rem;

	svg {
		margin-bottom: 0.19rem;
		margin-right: 0.25rem;
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
