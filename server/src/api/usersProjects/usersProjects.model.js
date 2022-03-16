const { Model } = require('objection');

const schema = require('./usersProjects.schema.json');
const tableNames = require('../../constants/tableNames');

class UserProject extends Model {
  static get tableName() {
    return tableNames.user_project;
  }

  static get jsonSchema() {
    return schema;
  }
}

module.exports = UserProject;
