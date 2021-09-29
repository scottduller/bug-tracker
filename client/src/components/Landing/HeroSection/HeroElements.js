import styled from 'styled-components';
import { Container, Button } from '../../shared/SharedElements';
import { Title } from '../shared/SharedElements';

export const CTA = styled.div`
	display: flex;
	height: 100%;
	width: 45vw;
	max-width: 100%;
	align-items: center;
	vertical-align: middle;
	padding: 0 4rem;
	${Container} ${Title} {
		line-height: 3.5rem;
		margin-bottom: 2rem;
	}
	${Container} span {
		margin-bottom: 2rem;
	}

	${Button} {
		padding: 0.75rem 4rem;
	}
`;

export const Page = styled.div`
	height: 100vh;
	width: 100vw;
`;

export const HeroImageWrap = styled.div`
	height: 100%;
	padding: 0 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const HeroImage = styled.img`
	width: 100%;
`;
