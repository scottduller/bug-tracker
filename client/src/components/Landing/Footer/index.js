import React from 'react';
import {
	BottomColumnContainer,
	BottomFooterLink,
	// ColumnContainer,
	// ColumnTitle,
	// FooterColumn,
	// FooterLink,
	FooterRow,
	FooterWrapper,
	SocialFooterLink,
	Socials,
} from './FooterElements';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Index = () => {
	return (
		<FooterWrapper>
			{/* <FooterRow>
				<FooterColumn columns={3}>
					<ColumnContainer>
						<ColumnTitle>Getting Started</ColumnTitle>
						<FooterLink to='/sign-up'>Sign up</FooterLink>
						<FooterLink to='/sign-in'>Sign In</FooterLink>
						<FooterLink to='/'>Pricing</FooterLink>
					</ColumnContainer>
				</FooterColumn>
				<FooterColumn columns={3}>
					<ColumnContainer>
						<ColumnTitle>Get Help</ColumnTitle>
						<FooterLink to='/'>How It Works</FooterLink>
						<FooterLink to='/'>FAQs</FooterLink>
						<FooterLink to='/'>Help Desk</FooterLink>
					</ColumnContainer>
				</FooterColumn>
				<FooterColumn columns={3}>
					<ColumnContainer>
						<ColumnTitle>About Us</ColumnTitle>
						<FooterLink to='/'>Companies</FooterLink>
						<FooterLink to='/'>Careers</FooterLink>
						<FooterLink to='/'>Press</FooterLink>
					</ColumnContainer>
				</FooterColumn>
				<FooterColumn columns={3}>
					<ColumnContainer>
						<ColumnTitle>Partnerships</ColumnTitle>
						<FooterLink to='/'>Brands</FooterLink>
						<FooterLink to='/'>Retail</FooterLink>
						<FooterLink to='/'>Contact Sales</FooterLink>
					</ColumnContainer>
				</FooterColumn>
			</FooterRow> */}
			<FooterRow>
				<BottomColumnContainer>
					<BottomFooterLink to='/site-policy/terms-of-service'>
						Terms of Service
					</BottomFooterLink>
					<BottomFooterLink to='/site-policy/privacy-policy'>
						Privacy Policy
					</BottomFooterLink>
				</BottomColumnContainer>
				<Socials>
					<SocialFooterLink href='https://www.facebook.com/'>
						<FaFacebook size={32} />
					</SocialFooterLink>
					<SocialFooterLink href='https://www.twitter.com/'>
						<FaTwitter size={32} />
					</SocialFooterLink>
					<SocialFooterLink href='https://www.linkedin.com/'>
						<FaLinkedin size={32} />
					</SocialFooterLink>
				</Socials>
				<BottomColumnContainer>
					&copy; Bug Tracker, All Rights Reserved
				</BottomColumnContainer>
			</FooterRow>
		</FooterWrapper>
	);
};

export default Index;
