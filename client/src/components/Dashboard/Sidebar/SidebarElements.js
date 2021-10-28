import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	background-color: ${({ theme }) => theme.colours.primary};
	width: 75px;
	top: 0;
	left: 0;
	box-shadow: 5px 0px 15px 0px rgba(0, 0, 0, 0.5);

	padding: 1em 0;

	display: flex;
	flex-direction: column;
	height: 100%;
	min-height: 100%;
`;

export const Top = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: calc(104px+2em);
	gap: 1em;
`;

export const Middle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	flex: 1;

	gap: 1em;
	margin: 1em 0;
	overflow-y: auto;

	-ms-overflow-style: none;
	scrollbar-width: none;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const Bottom = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 70px;
	gap: 1em;
`;

export const Rule = styled.hr`
	width: 50%;
	border: 2px solid white;
	margin: 0;
	margin-left: 5px;
`;

export const TooltipText = styled.span`
	opacity: 0;
	background-color: black;
	color: #fff;
	text-align: center;
	border-radius: 6px;
	padding: 0.25em 1em;
	position: absolute;
	z-index: 1;
	left: 135%;
	white-space: nowrap;

	transition: opacity 0.2s linear;

	&:after {
		content: '';
		position: absolute;
		top: 50%;
		right: 100%;
		margin-top: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent black transparent transparent;
	}
`;

export const Button = styled.div`
	position: relative;
	display: flex;
	background-color: ${({ theme }) => theme.colours.tertiary};
	width: 50px;
	min-height: 50px;
	margin-left: 5px;
	border-radius: 50px;
	justify-content: center;
	align-items: center;
	transition: border-radius 0.25s;

	svg {
		width: 25px;
		height: 25px;
	}

	&:before {
		content: '';
		position: absolute;
		height: 0px;
		width: 5px;
		left: -0.9em;
		background-color: white;
		border-radius: 0 20px 20px 0;

		transition: height 0.25s;
	}

	&:hover {
		border-radius: 20px;

		${TooltipText} {
			opacity: 100%;
		}

		&:before {
			height: 20px;
		}
	}

	&.active {
		border-radius: 20px;
		&:before {
			height: 40px;
		}
	}
`;
