import axios from 'axios';

describe('User sign up', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/sign-up');

		// cy.task('seedDb');
	});

	it('should display sign up errors', () => {
		cy.get('button').click();

		cy.url().should('contain', '/sign-up');

		cy.get('form > :nth-child(1) > div').should(
			'have.text',
			'* Please enter your first name'
		);

		cy.get('form > :nth-child(1) > input').type(
			'aaaaaaaaaaaaaaaa'
		);

		cy.get('form > :nth-child(1) > div').should(
			'have.text',
			'* Must be 15 characters or less'
		);

		cy.get('form > :nth-child(2) > div').should(
			'have.text',
			'* Please enter your last name'
		);

		cy.get('form > :nth-child(2) > input').type(
			'aaaaaaaaaaaaaaaaaaaaa'
		);

		cy.get('form > :nth-child(2) > div').should(
			'have.text',
			'* Must be 20 characters or less'
		);

		cy.get('form > :nth-child(3) > div').should(
			'have.text',
			'* Please enter a valid email'
		);

		cy.get('form > :nth-child(3) > input').type('a');

		cy.get('form > :nth-child(3) > div').should(
			'have.text',
			'* Invalid email address'
		);

		cy.get('form > :nth-child(4) > div').should(
			'have.text',
			'* Please enter a valid password'
		);

		cy.get('form > :nth-child(4) > input').type('a');

		cy.get('form > :nth-child(4) > div').should(
			'have.text',
			'* Please enter a valid password (at least 1 uppercase, 1 lowercase, 1 special character, 1 number and a minimum of 8 characters)'
		);

		cy.get('form > :nth-child(5) > div').should(
			'have.text',
			'* Please enter a valid password'
		);

		cy.get('form > :nth-child(5) > input').type('b');

		cy.get('form > :nth-child(5) > div').should(
			'have.text',
			'* Passwords must match'
		);

		cy.get('form > :nth-child(6) > div').should(
			'have.text',
			'* Please read and accept the terms and conditions.'
		);
	});

	it('should register a user, log the user in and redirect them to the user dashboard', () => {
		const userData = {
			firstName: 'John',
			lastName: 'Smith',
			email: 'john@email.com',
			password: 'Password321!',
		};

		const { firstName, lastName, email, password } = userData;

		cy.get('form > :nth-child(1) > input').type(firstName);

		cy.get('form > :nth-child(2) > input').type(lastName);

		cy.get('form > :nth-child(3) > input').type(email);

		cy.get('form > :nth-child(4) > input').type(password);

		cy.get('form > :nth-child(5) > input').type(password);

		cy.get('form > :nth-child(6) > input').click();

		cy.get('button').click();

		cy.url().should('contain', '/dashboard');

		cy.get('h1').contains(`Welcome, ${firstName}`, {
			matchCase: false,
		});
	});

	it('should display error if user already exists', async () => {
		const userData = {
			firstName: 'John',
			lastName: 'Smith',
			email: 'john@email.com',
			password: 'Password321!',
		};

		await axios.post(
			'http://localhost:3000/api/auth/sign-up',
			userData
		);

		const { firstName, lastName, email, password } = userData;

		cy.get('form > :nth-child(1) > input').type(firstName);

		cy.get('form > :nth-child(2) > input').type(lastName);

		cy.get('form > :nth-child(3) > input').type(email);

		cy.get('form > :nth-child(4) > input').type(password);

		cy.get('form > :nth-child(5) > input').type(password);

		cy.get('form > :nth-child(6) > input').click();

		cy.get('button').click();

		cy.url().should('contain', '/sign-up');

		cy.get('form > :nth-child(3) > div').should(
			'contain.text',
			'* User already exists'
		);
	});
});
