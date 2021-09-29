import React from 'react';
import Header from '../components/Landing/Header/';
import HeroSection from '../components/Landing/HeroSection/';
import InfoSection from '../components/Landing/InfoSection';
import FAQSection from '../components/Landing/FAQSection/index';
import Footer from '../components/Landing/Footer/index';

const Landing = () => {
	return (
		<>
			<Header />
			<HeroSection />
			<InfoSection />
			<FAQSection />
			<Footer />
		</>
	);
};

export default Landing;
