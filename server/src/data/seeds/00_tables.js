/* eslint-disable no-await-in-loop */
const faker = require('faker');
const tableNames = require('../../constants/tableNames');

exports.seed = async (knex) => {
  await knex(tableNames.user_organisation).del();
  await knex(tableNames.user_project).del();
  await knex(tableNames.comment).del();
  await knex(tableNames.ticket).del();
  await knex(tableNames.status).del();
  await knex(tableNames.project).del();
  await knex(tableNames.organisation).del();
  await knex(tableNames.user).del();

  const users = [];
  const organisations = [];
  const projects = [];
  const statuses = [];
  const tickets = [];
  const comments = [];

  for (let i = 0; i < 500; i++) {
    users.push({
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      bio: faker.random.words(20),
      email: faker.internet.email(),
      password: faker.internet.password(),
      first_login: faker.datatype.boolean(),
      last_login: faker.date.recent(),
    });
  }

  await knex(tableNames.user).insert(users);

  const userIds = await knex(tableNames.user).pluck('id');

  for (let i = 0; i < 3; i++) {
    organisations.push({
      owner_id: faker.random.arrayElement(userIds),
      name: faker.lorem.word(),
      description: faker.lorem.sentence(),
    });
  }

  await knex(tableNames.organisation).insert(organisations);

  const organisationIds = await knex(tableNames.organisation).pluck('id');

  for (let i = 0; i < 15; i++) {
    projects.push({
      owner_id: faker.random.arrayElement(userIds),
      organisation_id: faker.random.arrayElement(organisationIds),
      name: faker.lorem.word(),
      description: faker.lorem.sentence(),
    });
  }

  await knex(tableNames.project).insert(projects);

  const projectIds = await knex(tableNames.project).pluck('id');

  for (let i = 0; i < 45; i++) {
    statuses.push({
      status: faker.lorem.word(),
      project_id: faker.random.arrayElement(projectIds),
      organisation_id: faker.random.arrayElement(organisationIds),
    });
  }

  await knex(tableNames.status).insert(statuses);

  const statusIds = await knex(tableNames.status).pluck('id');

  for (let i = 0; i < 45; i++) {
    tickets.push({
      owner_id: faker.random.arrayElement(userIds),
      project_id: faker.random.arrayElement(projectIds),
      status_id: faker.random.arrayElement(statusIds),
      name: faker.lorem.word(),
      description: faker.lorem.sentence(),
    });
  }
  await knex(tableNames.ticket).insert(tickets);

  const ticketIds = await knex(tableNames.ticket).pluck('id');

  for (let i = 0; i < 100; i++) {
    comments.push({
      owner_id: faker.random.arrayElement(userIds),
      ticket_id: faker.random.arrayElement(ticketIds),
      description: faker.lorem.sentence(),
    });
  }
  await knex(tableNames.comment).insert(comments);

  // userOrganisations = userOrganisations.filter((userOrganisation, index) => {
  //   const _userOrganisation = JSON.stringify(userOrganisation);
  //   return (
  //     index ===
  //     userOrganisations.findIndex((obj) => {
  //       return JSON.stringify(obj) === _userOrganisation;
  //     })
  //   );
  // });
};
