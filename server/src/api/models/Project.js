/* eslint-disable global-require */
const { Model } = require('objection');

const tableNames = require('../../constants/tableNames');

class Project extends Model {
  static get tableName() {
    return tableNames.project;
  }

  static get relationMappings() {
    const User = require('./User');
    const Status = require('./Status');
    const Organisation = require('./Organisation');
    const Ticket = require('./Ticket');

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
          from: `${tableNames.project}.${tableNames.Organisation}_id`,
          to: `${tableNames.Organisation}.id`,
        },
      },
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: `${tableNames.project}.id`,
          through: {
            from: `${tableNames.user}_${tableNames.project}.${tableNames.project}_id`,
            to: `${tableNames.user}_${tableNames.project}.${tableNames.user}_id`,
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
