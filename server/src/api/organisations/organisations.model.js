/* eslint-disable global-require */
const { Model } = require('objection');

const schema = require('./organisations.schema.json');
const tableNames = require('../../constants/tableNames');

class Organisation extends Model {
  static get tableName() {
    return tableNames.organisation;
  }

  static get jsonSchema() {
    return schema;
  }

  static get relationMappings() {
    const User = require('../users/users.model');
    const Project = require('../projects/projects.model');
    const Status = require('../statuses/statuses.model');

    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: `${tableNames.organisation}.owner_id`,
          to: `${tableNames.user}.id`,
        },
      },
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: `${tableNames.organisation}.id`,
          through: {
            from: `${tableNames.user_organisation}.${tableNames.organisation}_id`,
            to: `${tableNames.user_organisation}.${tableNames.user}_id`,
          },
          to: `${tableNames.user}.id`,
        },
      },
      projects: {
        relation: Model.HasManyRelation,
        modelClass: Project,
        join: {
          from: `${tableNames.organisation}.id`,
          to: `${tableNames.project}.${tableNames.organisation}_id`,
        },
      },
      statuses: {
        relation: Model.HasManyRelation,
        modelClass: Status,
        join: {
          from: `${tableNames.organisation}.id`,
          to: `${tableNames.status}.${tableNames.organisation}_id`,
        },
      },
    };
  }
}

module.exports = Organisation;
