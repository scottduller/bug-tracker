import data from '../../src/components/Landing/InfoSection/data';
import data1 from '../../src/components/Landing/FAQSection/data';

describe('Landing page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('should allow visitors to visit links to other pages', () => {
		cy.get('header')
			.contains(/sign in/i)
			.click();

		cy.url().should('contain', '/sign-in');
	});

	it('should allow visitors to scroll to a section using the navlinks', () => {
		const id = data[0].id;
		const id1 = data[1].id;

		cy.get('header')
			.contains(`${id}`, { matchCase: false })
			.click();

		cy.get('header')
			.contains(`${id}`, { matchCase: false })
			.should('have.class', 'active');

		cy.get('header')
			.contains(`${id1}`, { matchCase: false })
			.should('not.have.class', 'active');

		cy.get(`#${id}`).should('be.visible').and('be.inViewport');

		cy.get(`#${id1}`)
			.should('be.visible')
			.and('not.be.inViewport');
	});

	it('should allow visitors to read FAQs', () => {
		const id = data1[0].id;
		const id1 = data1[1].id;

		cy.get(`#${id}`).click({ force: true });

		cy.get(`#${id} > div > div > span`).should(
			'have.class',
			'active'
		);

		cy.get(`#${id1} > div > div > span`).should(
			'not.have.class',
			'active'
		);
	});

	it('should allow visitors have a navmenu on mobile screens', () => {
		cy.viewport(480, 640);

		cy.get('header')
			.contains(/sign in/i)
			.should('not.be.visible');

		cy.get('nav').should('not.have.class', 'active');

		cy.get('nav > svg').click();

		cy.get('header')
			.contains(/sign in/i)
			.should('be.visible');

		cy.get('nav').should('have.class', 'active');
	});

	it('should close the navmenu on mobile screens when a link is selected', () => {
		cy.viewport(480, 640);

		cy.get('nav').should('not.have.class', 'active');

		cy.get('nav > svg').click();

		cy.get('nav').should('have.class', 'active');

		cy.get('nav > a').click();

		cy.get('nav').should('not.have.class', 'active');
	});
});
