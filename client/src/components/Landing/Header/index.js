import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, Link as LinkR } from 'react-router-dom';
import { Header, Nav, Brand, Logo, NavLink } from './HeaderElements';
import { Container, Button } from '../../shared/SharedElements';
import theme from '../../shared/theme';
import { Title } from '../shared/SharedElements';
import { FaSignInAlt } from 'react-icons/fa';
import * as Scroll from 'react-scroll';
import { Link as LinkS, animateScroll as scroll } from 'react-scroll';

const Index = () => {
	const [scrollNav, setScrollNav] = useState(false);

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

	return (
		<Header scrollNav={scrollNav}>
			<Container>
				<Nav>
					<Brand to='hero'>
						<Logo colour={theme.colours.emphasis} />
						<Title>BUG TRACKER</Title>
					</Brand>
					<ul>
						<li>
							<NavLink to='about' offset={-80}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink to='discover' offset={-80}>
								Discover
							</NavLink>
						</li>
						<li>
							<NavLink to='features' offset={-180}>
								Features
							</NavLink>
						</li>
						<li>
							<NavLink to='faq' offset={-40}>
								FAQ
							</NavLink>
						</li>
						<li>
							<LinkR to='/sign-in'>Sign in</LinkR>
						</li>
						<li>
							<Button
								onClick={handleOnClick}
								bg={theme.colours.emphasis}
								colour='#fff'
							>
								<FaSignInAlt />
								<span>Sign Up</span>
							</Button>
						</li>
					</ul>
				</Nav>
			</Container>
		</Header>
	);
};

export default Index;
