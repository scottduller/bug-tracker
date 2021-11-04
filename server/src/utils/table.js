const addDefaultColumns = (knex, table) => {
  table.increments().notNullable().unsigned();
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
};

const references = (table, tableName, notNullable = true, columnName = '') => {
  const def = table
    .integer(`${columnName || tableName}_id`)
    .unsigned()
    .references('id')
    .inTable(tableName);

  if (notNullable) {
    def.notNullable();
  }

  return def;
};

const url = (table, columnName) => {
  table.string(columnName, 2000);
};

const email = (table, columnName) => {
  return table.string(columnName, 254);
};

module.exports = {
  addDefaultColumns,
  references,
  url,
  email,
};
