import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { AiOutlineBug } from 'react-icons/ai';
import { Button } from '../../shared/SharedElements';
import { Link as LinkS } from 'react-scroll';

export const Brand = styled(LinkS)`
	padding: 0.5rem 1rem;
	cursor: pointer;
`;

export const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80px;
	position: fixed;
	top: 0;
	padding: 0.7rem 0;
	background-color: ${({ scrollNav }) =>
		scrollNav ? 'white' : 'transparent'};
	transition: background-color 0.2s ease-in-out;
	z-index: 99;
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

	ul {
		list-style: none;
		display: flex;
		margin: 0;
		align-items: center;

		li {
			padding: 0 1rem;

			${Button} {
				padding: 0.55rem 1.25rem;

				svg {
					margin-bottom: 0.19rem;
					margin-right: 0.25rem;
				}
			}
		}
	}
`;

export const NavLink = styled(LinkS)`
	cursor: pointer;
	&:active {
		border-bottom: 3px solid
			${({ theme }) => theme.colours.emphasis};
	}
`;
