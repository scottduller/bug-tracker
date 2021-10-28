import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
	AiFillHome,
	AiOutlineLogout,
	AiOutlinePlus,
} from 'react-icons/ai';
import { useHistory } from 'react-router';
import {
	Bottom,
	BottomRule,
	bottomRule,
	Button,
	Middle,
	Organisations,
	Rule,
	TooltipText,
	Top,
	Wrapper,
} from './SidebarElements';

const Index = () => {
	const history = useHistory();
	const [user, setUser] = useState({});

	const handleLogout = () => {
		setUser({});
		localStorage.clear();
	};

	useEffect(() => {
		const loggedInUser = localStorage.getItem('user');
		console.log(JSON.stringify(loggedInUser));
		if (loggedInUser) {
			const foundUser = JSON.parse(loggedInUser);
			setUser(foundUser);
		} else {
			history.push('/sign-in');
		}
	}, [user]);

	const [active, setActive] = useState('home');

	return (
		<Wrapper>
			<Top>
				<Button
					key='home'
					className={active === 'home' ? 'active' : ''}
					onClick={() => setActive('home')}
				>
					<AiFillHome />
					<TooltipText>Home</TooltipText>
				</Button>
				<Button
					key='add'
					className={active === 'add' ? 'active' : ''}
					onClick={() => setActive('add')}
				>
					<AiOutlinePlus />
					<TooltipText>New Organisation</TooltipText>
				</Button>
				<Rule />
			</Top>

			<Middle>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button></Button>
			</Middle>

			<Bottom>
				<Rule />
				<Button
					key='logout'
					className={active === 'logout' ? 'active' : ''}
					onClick={handleLogout}
				>
					<AiOutlineLogout />
					<TooltipText>Logout</TooltipText>
				</Button>
			</Bottom>
		</Wrapper>
	);
};

export default Index;
