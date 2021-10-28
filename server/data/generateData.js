const faker = require('faker');
const { v4: uuidv4 } = require('uuid');

const fs = require('fs');

const users = [];
const organisations = [];
const projects = [];
const statuses = [];
const tickets = [];
const comments = [];

const generateUsers = async () => {
	for (var i = 0; i < 500; i++) {
		const id = uuidv4();
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();
		const bio = faker.random.words(20);
		const email = faker.internet.email();
		const password = faker.internet.password();
		const firstLogin = faker.datatype.boolean();
		const createdAt = faker.date.past();
		const lastLogin = faker.date.recent();

		users.push({
			id,
			firstName,
			lastName,
			bio,
			email,
			password,
			firstLogin,
			createdAt,
			lastLogin,
		});
	}
};

const generateOrganisations = async () => {
	const sepUsers = [];

	for (
		let i = 0;
		i < users.length;
		i += Math.floor(users.length / 3)
	) {
		let tempArray;
		tempArray = users.slice(i, i + Math.floor(users.length / 3));

		sepUsers.push(tempArray);
	}

	for (var i = 0; i < 3; i++) {
		const id = uuidv4();
		const organisationUsers = sepUsers[i].map((user) => user.id);
		const owner =
			organisationUsers[
				Math.floor(Math.random() * organisationUsers.length)
			];
		const name = faker.random.word();
		const description = faker.random.words(20);
		const createdAt = faker.date.past();
		const updatedAt = faker.date.recent();

		organisations.push({
			id,
			owner,
			organisationUsers,
			name,
			description,
			createdAt,
			updatedAt,
		});
	}
};

const generateProjects = async () => {
	const sepUsers = [];

	for (var i = 0; i < 15; i++) {
		const id = uuidv4();
		const organisation =
			organisations[
				Math.floor(Math.random() * organisations.length)
			];

		if (i === 0) {
			const organisationUsers = organisation.organisationUsers;

			for (
				j = 0;
				j < organisationUsers.length;
				j += Math.floor(organisationUsers.length / 15)
			) {
				let tempArray;
				tempArray = users.slice(
					j,
					j + Math.floor(organisationUsers.length / 15)
				);

				sepUsers.push(tempArray);
			}
		}

		const projectUsers = sepUsers[i].map((user) => user.id);
		const owner =
			projectUsers[
				Math.floor(Math.random() * projectUsers.length)
			];
		const name = faker.random.word();
		const description = faker.random.words(20);
		const createdAt = faker.date.past();
		const updatedAt = faker.date.recent();

		projects.push({
			id,
			owner,
			organisation: organisation.id,
			projectUsers,
			name,
			description,
			createdAt,
			updatedAt,
		});
	}
};

const generateStatuses = async () => {
	for (var i = 0; i < 15; i++) {
		const id = uuidv4();
		const status = faker.random.word();

		statuses.push({
			id,
			status,
		});
	}
};

const generateTickets = async () => {
	for (var i = 0; i < 45; i++) {
		const id = uuidv4();
		const project =
			projects[Math.floor(Math.random() * projects.length)];
		const owner =
			project.projectUsers[
				Math.floor(
					Math.random() * project.projectUsers.length
				)
			];
		const name = faker.random.word();
		const description = faker.random.words(20);
		const status =
			statuses[Math.floor(Math.random() * statuses.length)];
		const createdAt = faker.date.past();
		const updatedAt = faker.date.recent();

		tickets.push({
			id,
			owner,
			project: project.id,
			name,
			description,
			status: status.id,
			createdAt,
			updatedAt,
		});
	}
};

const generateComments = async () => {
	for (var i = 0; i < 135; i++) {
		const id = uuidv4();
		const ticket =
			tickets[Math.floor(Math.random() * tickets.length)];

		const project = projects.find((p) => p.id === ticket.project);

		const owner =
			project.projectUsers[
				Math.floor(
					Math.random() * project.projectUsers.length
				)
			];

		const description = faker.random.words(50);
		const createdAt = faker.date.past();
		const updatedAt = faker.date.recent();

		comments.push({
			id,
			owner,
			ticket: ticket.id,
			description,
			createdAt,
			updatedAt,
		});
	}
};

const generateData = async () => {
	await generateUsers();
	await generateOrganisations();
	await generateProjects();
	await generateStatuses();
	await generateTickets();
	await generateComments();

	const data = JSON.stringify({
		users,
		organisations,
		projects,
		statuses,
		tickets,
		comments,
	});

	fs.writeFile('server/data/db.json', data, (err) => {
		if (err) {
			throw err;
		}
		console.log('JSON data is saved.');
	});
};

const destroyData = () => {
	const data = JSON.stringify({});

	fs.writeFile('server/data/db.json', data, (err) => {
		if (err) {
			throw err;
		}
		console.log('JSON data destroyed');
	});
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	generateData();
}
