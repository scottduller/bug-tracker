import styled from 'styled-components/macro';
import { Link as LinkR } from 'react-router-dom';
import {
	Field as FieldMik,
	Form as FormMik,
	ErrorMessage,
} from 'formik';
import { Button } from '../../shared/SharedElements';

export const FormWrapper = styled.div`
	width: clamp(400px, 70%, 550px);
	padding: 1.5rem;
	background-color: white;
	border-radius: 20px;
	margin-bottom: 1rem;
	box-shadow: 0px 4px 16px 0px rgb(0 0 0 / 20%);
`;

export const Form = styled(FormMik)`
	display: flex;
	flex-direction: column;
	width: 100%;

	${Button} {
		width: 60%;
		padding: 0.9rem;
		margin: 1rem auto 0 auto;
	}
`;

export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 0.25rem;
	padding-bottom: 0.5rem;
	/* margin-bottom: 0.5rem; */
	span {
		color: red;
		font-size: 85%;
	}
`;

export const HeaderText = styled.h1`
	text-align: center;
	font-size: 2.5rem;
	margin: 1rem 0;
`;

export const NameGroup = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (min-width: ${({ theme }) =>
			theme.breakpoints.laptop}) {
		flex-direction: row;

		${InputGroup} {
			width: 50%;
		}
	}
`;

export const Label = styled.label`
	font-size: 95%;
	margin-bottom: 0.25rem;
`;

export const Field = styled(FieldMik)`
	padding: 12px 30px 12px 16px;
	margin-bottom: 0.5rem;
	border: 1px solid;
	border-radius: 6px;

	&.error {
		border-color: red;
	}
`;

export const Error = styled(ErrorMessage)``;

export const Link = styled(LinkR)`
	text-decoration: underline;
`;

export const AgreeText = styled.div`
	text-align: center;
	font-size: 85%;
	width: 100%;
	margin: 0.5rem 0;
`;
