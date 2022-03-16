/* eslint-disable global-require */
const { Model } = require('objection');

const schema = require('./projects.schema.json');
const tableNames = require('../../constants/tableNames');

class Project extends Model {
  static get tableName() {
    return tableNames.project;
  }

  static get jsonSchema() {
    return schema;
  }

  static get relationMappings() {
    const User = require('../users/users.model');
    const Status = require('../statuses/statuses.model');
    const Organisation = require('../organisations/organisations.model');
    const Ticket = require('../tickets/tickets.model');

    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: `${tableNames.project}.owner_id`,
          to: `${tableNames.user}.id`,
        },
      },
      organisation: {
        relation: Model.BelongsToOneRelation,
        modelClass: Organisation,
        join: {
          from: `${tableNames.project}.${tableNames.organisation}_id`,
          to: `${tableNames.organisation}.id`,
        },
      },
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: `${tableNames.project}.id`,
          through: {
            from: `${tableNames.user_project}.${tableNames.project}_id`,
            to: `${tableNames.user_project}.${tableNames.user}_id`,
          },
          to: `${tableNames.user}.id`,
        },
      },
      statuses: {
        relation: Model.HasManyRelation,
        modelClass: Status,
        join: {
          from: `${tableNames.project}.id`,
          to: `${tableNames.status}.${tableNames.project}_id`,
        },
      },
      tickets: {
        relation: Model.HasManyRelation,
        modelClass: Ticket,
        join: {
          from: `${tableNames.project}.id`,
          to: `${tableNames.ticket}.${tableNames.project}_id`,
        },
      },
    };
  }
}

module.exports = Project;
