import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, Link as LinkR } from 'react-router-dom';
import {
	Header,
	Nav,
	NavLink,
	NavLinks,
	NavLinkItem,
	HeaderBtn,
	Bars,
	RegisterBtns,
} from './HeaderElements';
import {
	Container,
	Title,
	Brand,
	Logo,
} from '../../shared/SharedElements';
import theme from '../../shared/theme';
import { FaSignInAlt } from 'react-icons/fa';

const Index = () => {
	const [scrollNav, setScrollNav] = useState(false);

	const [active, setActive] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const history = useHistory();
	const handleOnClick = useCallback(
		() => history.push('/sign-up'),
		[history]
	);

	const handleActive = () => {
		setActive(!active);
	};

	const handleSetInActive = () => {
		setActive(false);
	};

	return (
		<Header
			id='header'
			scrollNav={scrollNav}
			className={active ? 'active' : ''}
		>
			<Container>
				<Nav className={active ? 'active' : ''}>
					<Brand
						to='hero'
						className={active ? 'active' : ''}
						onClick={handleSetInActive}
						activeClass='active'
					>
						<Logo colour={theme.colours.emphasis} />
						<Title size={'1.25rem'}>BUG TRACKER</Title>
					</Brand>
					<Bars
						onClick={handleActive}
						className={active ? 'active' : ''}
					/>
					<NavLinks className={active ? 'active' : ''}>
						<NavLinkItem
							className={active ? 'active' : ''}
						>
							<NavLink
								to='about'
								onClick={handleSetInActive}
								offset={-80}
								spy={true}
								activeClass='active'
							>
								About
							</NavLink>
						</NavLinkItem>
						<NavLinkItem
							className={active ? 'active' : ''}
						>
							<NavLink
								to='discover'
								onClick={handleSetInActive}
								offset={-80}
								spy={true}
								activeClass='active'
							>
								Discover
							</NavLink>
						</NavLinkItem>
						<NavLinkItem
							className={active ? 'active' : ''}
						>
							<NavLink
								to='features'
								onClick={handleSetInActive}
								offset={-80}
								spy={true}
								activeClass='active'
							>
								Features
							</NavLink>
						</NavLinkItem>
						<NavLinkItem
							className={active ? 'active' : ''}
						>
							<NavLink
								to='faq'
								onClick={handleSetInActive}
								offset={-80}
								spy={true}
								activeClass='active'
							>
								FAQ
							</NavLink>
						</NavLinkItem>
					</NavLinks>
					<RegisterBtns>
						<NavLinkItem
							className={active ? 'active' : ''}
						>
							<HeaderBtn
								className={active ? 'active' : ''}
								bg='white'
								colour='black'
								onClick={handleSetInActive}
								to='/sign-in'
							>
								Login
							</HeaderBtn>
						</NavLinkItem>
						<NavLinkItem
							className={active ? 'active' : ''}
						>
							<HeaderBtn
								className={active ? 'active' : ''}
								onClick={handleOnClick}
								bg={theme.colours.emphasis}
								colour='#fff'
								to='/sign-up'
							>
								Get Started
								<FaSignInAlt />
							</HeaderBtn>
						</NavLinkItem>
					</RegisterBtns>
				</Nav>
			</Container>
		</Header>
	);
};

export default Index;
