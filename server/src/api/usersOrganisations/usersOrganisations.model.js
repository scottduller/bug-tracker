const { Model } = require('objection');

const schema = require('./usersOrganisations.schema.json');
const tableNames = require('../../constants/tableNames');

class UserOrganisation extends Model {
  static get tableName() {
    return tableNames.user_organisation;
  }

  static get jsonSchema() {
    return schema;
  }
}

module.exports = UserOrganisation;
