const tableNames = require('../../constants/tableNames');
const { addDefaultColumns, email, references } = require('../../utils/table');

exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.user, (table) => {
    addDefaultColumns(knex, table);
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('bio').notNullable().defaultTo('');
    email(table, 'email').notNullable().unique();
    table.string('password', 127).notNullable();
    table.boolean('first_login').notNullable().defaultTo(true);
    table.datetime('last_login');
  });

  await knex.schema.createTable(tableNames.organisation, (table) => {
    addDefaultColumns(knex, table);
    references(table, tableNames.user, true, 'owner');
    table.string('name').notNullable();
    table.string('description').notNullable().defaultTo('');
  });

  await knex.schema.createTable(tableNames.user_organisation, (table) => {
    table.increments().notNullable().unsigned();
    references(table, tableNames.user);
    references(table, tableNames.organisation);
  });

  await knex.schema.createTable(tableNames.project, (table) => {
    addDefaultColumns(knex, table);
    references(table, tableNames.user, true, 'owner');
    references(table, tableNames.organisation);
    table.string('name').notNullable();
    table.string('description').notNullable().defaultTo('');
  });

  await knex.schema.createTable(tableNames.user_project, (table) => {
    table.increments().notNullable().unsigned();
    references(table, tableNames.user);
    references(table, tableNames.project);
  });

  await knex.schema.createTable(tableNames.status, (table) => {
    table.increments().notNullable().unsigned();
    table.string('status').notNullable();
    references(table, tableNames.project, false);
    references(table, tableNames.organisation, false);
  });

  await knex.schema.createTable(tableNames.ticket, (table) => {
    addDefaultColumns(knex, table);
    references(table, tableNames.user, true, 'owner');
    references(table, tableNames.project);
    table.string('name').notNullable();
    table.string('description').notNullable().defaultTo('');
    references(table, tableNames.status);
  });

  await knex.schema.createTable(tableNames.comment, (table) => {
    addDefaultColumns(knex, table);
    references(table, tableNames.user, true, 'owner');
    references(table, tableNames.ticket);
    table.string('description').notNullable().defaultTo('');
    references(table, tableNames.comment, false, 'parent');
  });
};

exports.down = async (knex) => {
  await Promise.all(
    [
      tableNames.comment,
      tableNames.organisation,
      tableNames.project,
      tableNames.status,
      tableNames.ticket,
      tableNames.user,
    ].map((tableName) => knex.schema.dropTableIfExists(tableName))
  );
};
