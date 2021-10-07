describe('User sign in', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/sign-in');

		// cy.task('seedDb');
	});

	it('should display sign in errors', () => {
		cy.get('button').click();

		cy.url().should('contain', '/sign-up');

		cy.get('form > :nth-child(1) > div').should(
			'have.text',
			'* Please enter a valid email'
		);

		cy.get('form > :nth-child(1) > input').type('a');

		cy.get('form > :nth-child(1) > div').should(
			'have.text',
			'* Invalid email address'
		);

		cy.get('form > :nth-child(2) > div').should(
			'have.text',
			'* Please enter a valid password'
		);
	});

	it('should display error if credentials incorrect', () => {
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

		cy.get('form > :nth-child(1) > input').type('jane@email.com');

		cy.get('form > :nth-child(2) > input').type('Password123!');

		cy.get('form > :nth-child(3) > div').should(
			'have.text',
			'* Invalid credentials'
		);
	});

	it('should redirect unauthorised users to sign in page', () => {
		cy.visit('http://localhost:3000/dashboard');
		cy.url().should('contain', '/sign-in');
	});

	it('should login and redirect users to the user dashboard', () => {
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

		cy.get('form > :nth-child(1) > input').type('john@email.com');

		cy.get('form > :nth-child(2) > input').type('Password321!');

		cy.get('button').click();

		cy.url().should('contain', '/dashboard');

		cy.get('h1').contains(`Welcome, ${firstName}`, {
			matchCase: false,
		});
	});

	it('should remember a logged in user for 30 days', () => {
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

		cy.get('form > :nth-child(1) > input').type('john@email.com');

		cy.get('form > :nth-child(2) > input').type('Password321!');

		cy.get('button').click();

		cy.getCookie('connect.sid').should('have.property', 'expiry');
	});
});
