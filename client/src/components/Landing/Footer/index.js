import React from 'react';
import {
	BottomColumnContainer,
	BottomContainer,
	BottomFooterLink,
	ColumnContainer,
	ColumnTitle,
	FooterContainer,
	FooterLink,
	FooterWrapper,
	Socials,
} from './FooterElements';
import { Row, Column } from '../../shared/SharedElements';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Index = () => {
	return (
		<FooterWrapper>
			<FooterContainer>
				<Row>
					<Column columns={3}>
						<ColumnContainer>
							<ColumnTitle>Getting Started</ColumnTitle>
							<FooterLink>Sign up</FooterLink>
							<FooterLink>Sign In</FooterLink>
							<FooterLink>Pricing</FooterLink>
						</ColumnContainer>
					</Column>
					<Column columns={3}>
						<ColumnContainer>
							<ColumnTitle>Get Help</ColumnTitle>
							<FooterLink>How It Works</FooterLink>
							<FooterLink>FAQs</FooterLink>
							<FooterLink>Help Desk</FooterLink>
						</ColumnContainer>
					</Column>
					<Column columns={3}>
						<ColumnContainer>
							<ColumnTitle>About Us</ColumnTitle>
							<FooterLink>Companies</FooterLink>
							<FooterLink>Careers</FooterLink>
							<FooterLink>Press</FooterLink>
						</ColumnContainer>
					</Column>
					<Column columns={3}>
						<ColumnContainer>
							<ColumnTitle>Partnerships</ColumnTitle>
							<FooterLink>Brands</FooterLink>
							<FooterLink>Retail</FooterLink>
							<FooterLink>Contact Sales</FooterLink>
						</ColumnContainer>
					</Column>
				</Row>
				<BottomContainer>
					<BottomColumnContainer>
						<BottomFooterLink>
							Terms of Use
						</BottomFooterLink>
						<BottomFooterLink>
							Privacy Policy
						</BottomFooterLink>
					</BottomColumnContainer>
					<Socials>
						<BottomFooterLink>
							<FaFacebook size={32} />
						</BottomFooterLink>
						<BottomFooterLink>
							<FaTwitter size={32} />
						</BottomFooterLink>
						<BottomFooterLink>
							<FaLinkedin size={32} />
						</BottomFooterLink>
					</Socials>
					<BottomColumnContainer>
						&copy; Bug Tracker, All Rights Reserved
					</BottomColumnContainer>
				</BottomContainer>
			</FooterContainer>
		</FooterWrapper>
	);
};

export default Index;
