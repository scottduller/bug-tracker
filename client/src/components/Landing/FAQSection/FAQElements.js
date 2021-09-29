import styled from 'styled-components';

export const FAQWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colours.secondary};
	padding: 8rem 0;
`;

export const FAQContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.laptop};
`;

export const FAQHeadline = styled.h1`
	font-weight: bolder;
	color: #000;
	margin-bottom: 2rem;
`;

export const FAQItem = styled.div`
	box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 10%);
	margin-top: 1rem !important;
`;

export const FAQInput = styled.button`
	position: relative;
	cursor: pointer;
	overflow: hidden;
	-webkit-text-decoration: none;
	text-decoration: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
	outline: none !important;
	padding: 0;
	margin: 0;
	text-align: inherit;
	display: block;
	width: 100%;
	background: #ffffff;
	border-radius: 5px;
`;

export const FAQQuestion = styled.div`
	max-width: 100%;
	width: 100%;
	display: grid;
	grid-template-rows: auto auto auto;
	grid-template-columns: auto 1fr auto;
	grid-column-gap: 20px;
	padding: 1rem 1rem;
`;

export const FAQSec1 = styled.div`
	grid-area: 2 / 1 / auto / auto;
`;

export const FAQSec2 = styled.div`
	-webkit-box-flex: 1;
	-webkit-flex-grow: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	overflow: hidden;
	-webkit-flex-basis: 100%;
	-ms-flex-preferred-size: 100%;
	flex-basis: 100%;
	grid-row: 2;
	grid-column: 2;
`;

export const FAQSec2Span = styled.span`
	font-size: 18px;
	font-weight: 700;
	line-height: 24px;
	-webkit-letter-spacing: -0.04ch;
	-moz-letter-spacing: -0.04ch;
	-ms-letter-spacing: -0.04ch;
	letter-spacing: -0.04ch;
	text-transform: none;
	color: #191919;
	text-align: left;
	margin: 0;
	padding: 0;
	display: block;
	font-variant-ligatures: no-common-ligatures;
	max-width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: -webkit-box;
	-webkit-line-clamp: 6;
	-webkit-box-orient: vertical;
	max-height: 144px;
	white-space: normal;

	&.active {
		color: ${({ theme }) => theme.colours.emphasis};
	}
`;

export const FAQSec3 = styled.div`
	grid-area: 3 / 2 / auto / auto;
`;

export const FAQSec3Span = styled.span`
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	-webkit-letter-spacing: 0ch;
	-moz-letter-spacing: 0ch;
	-ms-letter-spacing: 0ch;
	letter-spacing: 0ch;
	text-transform: none;
	color: #767676;
	margin: 0;
	padding: 0;
	display: none;
	font-variant-ligatures: no-common-ligatures;

	&.active {
		display: block;
	}
`;

export const FAQSec4 = styled.div`
	grid-row: 2;
	grid-column: 3;
	-webkit-flex-shrink: 0;
	-ms-flex-negative: 0;
	flex-shrink: 0;
	line-height: 0;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin: 0px;

	svg {
		height: 24px;
		width: 24px;
	}

	&.active {
		transform: rotate(180deg);
		svg {
			color: ${({ theme }) => theme.colours.emphasis};
		}
	}
`;
