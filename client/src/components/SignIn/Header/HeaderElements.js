import styled from 'styled-components/macro';

export const Header = styled.header`
	background-color: transparent;
	padding: 1.2rem 0;
	width: 100%;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		padding: 2rem 0;
		transform: scale(1.25);
	}
`;
