import styled from 'styled-components/macro';

export const Row = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		position: relative;
		top: 0;
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const ImageWrapper = styled.div`
	display: none;

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: clamp(480px, 50%, 750px);
		padding-right: 5rem;

		margin: auto;
		img {
			width: 100%;
			margin-bottom: 1.5rem;
		}
	}
`;

export const BgColumn = styled.div`
	display: none;
	z-index: -1;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		background-color: ${({ theme }) => theme.colours.primary};
		display: block;
		position: absolute;
		height: 100%;
		top: 0;
		left: 0;
		width: 30%;
		background: repeating-linear-gradient(
			0deg,
			${({ theme }) => theme.colours.primary},
			${({ theme }) => theme.colours.primary} 30px,
			${({ theme }) => theme.colours.secondary} 30px,
			${({ theme }) => theme.colours.secondary} 60px
		);
	}
`;
