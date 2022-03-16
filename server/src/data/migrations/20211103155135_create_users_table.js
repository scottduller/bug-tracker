const tableNames = require('../../constants/tableNames');
const { addDefaultColumns, email, references } = require('../../utils/table');

/**
 * @param {import('knex')} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.user, (table) => {
    addDefaultColumns(knex, table);
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('bio').notNullable().defaultTo('');
    email(table, 'email').notNullable().unique();
    table.string('password', 127).notNullable();
    table.boolean('first_login').notNullable().defaultTo(true);
    table.timestamp('last_login').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable(tableNames.organisation, (table) => {
    addDefaultColumns(knex, table);
    table.string('name').notNullable();
    table.string('description').notNullable().defaultTo('');
    references(table, tableNames.user, true, 'owner');
  });

  await knex.schema.createTable(tableNames.user_organisation, (table) => {
    references(table, tableNames.user);
    references(table, tableNames.organisation);
  });

  await knex.schema.createTable(tableNames.project, (table) => {
    addDefaultColumns(knex, table);
    table.string('name').notNullable();
    table.string('description').notNullable().defaultTo('');
    references(table, tableNames.user, true, 'owner');
    references(table, tableNames.organisation);
  });

  await knex.schema.createTable(tableNames.user_project, (table) => {
    references(table, tableNames.user);
    references(table, tableNames.project);
  });

  await knex.schema.createTable(tableNames.status, (table) => {
    table.increments().notNullable().unsigned();
    table.string('status').notNullable();
    references(table, tableNames.organisation, false);
    references(table, tableNames.project, false);
  });

  await knex.schema.createTable(tableNames.ticket, (table) => {
    addDefaultColumns(knex, table);
    table.string('name').notNullable();
    table.string('description').notNullable().defaultTo('');
    references(table, tableNames.user, true, 'owner');
    references(table, tableNames.project);
    references(table, tableNames.status);
  });

  await knex.schema.createTable(tableNames.comment, (table) => {
    addDefaultColumns(knex, table);
    table.string('description').notNullable().defaultTo('');
    references(table, tableNames.user, true, 'owner');
    references(table, tableNames.ticket);
    references(table, tableNames.comment, false, 'parent');
  });
};

exports.down = async (knex) => {
  await Promise.all(
    [
      tableNames.user_organisation,
      tableNames.user_project,
      tableNames.comment,
      tableNames.ticket,
      tableNames.status,
      tableNames.project,
      tableNames.organisation,
      tableNames.user,
    ].map((tableName) => knex.schema.dropTableIfExists(tableName))
  );
};
