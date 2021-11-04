const faker = require('faker');
const tableNames = require('../../constants/tableNames');

exports.seed = async (knex) => {
  await knex(tableNames.user).insert([
    {
      id: 5000000,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      bio: faker.random.words(20),
      email: '1@test.com',
      password: 'password',
      first_login: faker.datatype.boolean(),
      last_login: faker.date.recent(),
    },
    {
      id: 5000001,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      bio: faker.random.words(20),
      email: '2@test.com',
      password: 'password',
      first_login: faker.datatype.boolean(),
      last_login: faker.date.recent(),
    },
    {
      id: 5000002,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      bio: faker.random.words(20),
      email: '3@test.com',
      password: 'password',
      first_login: faker.datatype.boolean(),
      last_login: faker.date.recent(),
    },
  ]);

  await knex(tableNames.organisation).insert([
    {
      id: 5000003,
      owner_id: 5000000,
      name: 'Organisation 1',
      description: faker.lorem.sentence(),
    },
    {
      id: 5000004,
      owner_id: 5000001,
      name: 'Organisation 2',
      description: faker.lorem.sentence(),
    },
  ]);

  await knex(tableNames.user_organisation).insert([
    {
      user_id: 5000000,
      organisation_id: 5000003,
    },
    {
      user_id: 5000001,
      organisation_id: 5000003,
    },
    {
      user_id: 5000000,
      organisation_id: 5000004,
    },
    {
      user_id: 5000001,
      organisation_id: 5000004,
    },
    {
      user_id: 5000002,
      organisation_id: 5000004,
    },
  ]);

  await knex(tableNames.project).insert([
    {
      id: 5000005,
      owner_id: 5000000,
      organisation_id: 5000004,
      name: 'Project 1',
      description: faker.lorem.sentence(),
    },
    {
      id: 5000006,
      owner_id: 5000001,
      organisation_id: 5000004,
      name: 'Project 2',
      description: faker.lorem.sentence(),
    },
  ]);

  await knex(tableNames.user_project).insert([
    {
      user_id: 5000000,
      project_id: 5000005,
    },
    {
      user_id: 5000001,
      project_id: 5000005,
    },
    {
      user_id: 5000002,
      project_id: 5000005,
    },
    {
      user_id: 5000000,
      project_id: 5000006,
    },
    {
      user_id: 5000001,
      project_id: 5000006,
    },
    {
      user_id: 5000002,
      project_id: 5000006,
    },
  ]);
};
