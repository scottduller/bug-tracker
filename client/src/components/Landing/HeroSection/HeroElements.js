import styled from 'styled-components';
import {
	Container,
	Button,
	Title,
} from '../../shared/SharedElements';

export const CTA = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	max-width: 100%;
	align-items: center;
	vertical-align: middle;
	padding: 0 0.5rem;
	text-align: center;
	justify-content: center;
	margin: 0 auto;

	${Container} ${Title} {
		line-height: 2.5rem;
		margin-top: 3rem;
		margin-bottom: 1rem;
	}
	${Container} span {
		margin-bottom: 2rem;
	}

	${Button} {
		padding: 0.75rem 4rem;
		margin: auto;
	}

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.tablet}) {
		max-width: 90%;

		${Container} ${Title} {
			line-height: 2.5rem;
			margin-bottom: 1rem;
		}
	}

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		text-align: left;
		${Button} {
			padding: 0.75rem 4rem;
			margin: 0;
		}

		${Container} ${Title} {
			line-height: 3.5rem;
			margin-bottom: 3rem;
		}
	}

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.desktop}) {
		margin: 0;
		width: 45vw;
		max-width: ${({ theme }) => theme.breakpoints.laptop};
		padding: 0 3rem;

		${Container} ${Title} {
			line-height: 3.5rem;
			margin-bottom: 2rem;
		}
	}
`;

export const Page = styled.div`
	height: 100vh;
	width: 100vw;
`;

export const HeroImageWrap = styled.div`
	height: 100%;
	padding: 80px 2rem 60px 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		padding: 0 3rem;
	}
`;

export const HeroImage = styled.img`
	width: 50%;
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.tablet}) {
		width: 50%;
	}
	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		width: 100%;
	}
`;
