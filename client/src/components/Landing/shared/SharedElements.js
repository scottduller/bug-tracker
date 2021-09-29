import styled from 'styled-components';

export const Title = styled.span`
	font-family: 'Archivo Black', sans-serif;
	font-size: ${(props) => props.size || '20px'};
	font-weight: ${(props) => props.weight || '400'};
`;
