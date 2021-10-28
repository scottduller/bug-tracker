import styled from 'styled-components/macro';

export const Wrapper = styled.div`
	height: 100vh;
	background-color: ${({ theme }) => theme.colours.secondary};
`;

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: auto;
	align-items: center;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		max-width: 50%;
	}
`;

export const Row = styled.div`
	position: relative;
	top: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 70%;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
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
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	/* &:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
					135deg,
					#00bfbf 25%,
					transparent 25%
				) -100px 0,
			linear-gradient(225deg, teal 25%, transparent 25%) -100px 0,
			linear-gradient(315deg, #00bfbf 25%, transparent 25%),
			linear-gradient(45deg, teal 25%, transparent 25%);
		background-size: 200px 200px;
	} */

	z-index: -1;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		width: 35%;
	}
`;
