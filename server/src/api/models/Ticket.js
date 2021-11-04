/* eslint-disable global-require */
const { Model } = require('objection');

const tableNames = require('../../constants/tableNames');

class Ticket extends Model {
  static get tableName() {
    return tableNames.ticket;
  }

  static get relationMappings() {
    const Project = require('./Project');
    const User = require('./User');
    const Status = require('./Status');
    const Comment = require('./Comment');

    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: `${tableNames.ticket}.owner_id`,
          to: `${tableNames.user}.id`,
        },
      },
      status: {
        relation: Model.BelongsToOneRelation,
        modelClass: Status,
        join: {
          from: `${tableNames.ticket}.${tableNames.status}_id`,
          to: `${tableNames.status}.id`,
        },
      },
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: `${tableNames.ticket}.${tableNames.project}_id`,
          to: `${tableNames.project}.id`,
        },
      },
      tickets: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: `${tableNames.Ticket}.id`,
          to: `${tableNames.comment}.${tableNames.ticket}_id`,
        },
      },
    };
  }
}

module.exports = Ticket;
