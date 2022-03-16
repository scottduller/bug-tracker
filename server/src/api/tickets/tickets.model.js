/* eslint-disable global-require */
const { Model } = require('objection');

const schema = require('./tickets.schema.json');
const tableNames = require('../../constants/tableNames');

class Ticket extends Model {
  static get tableName() {
    return tableNames.ticket;
  }

  static get jsonSchema() {
    return schema;
  }

  static get relationMappings() {
    const Project = require('../projects/projects.model');
    const User = require('../users/users.model');
    const Status = require('../statuses/statuses.model');
    const Comment = require('../comments/comments.model');

    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: `${tableNames.ticket}.owner_id`,
          to: `${tableNames.user}.id`,
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
      status: {
        relation: Model.BelongsToOneRelation,
        modelClass: Status,
        join: {
          from: `${tableNames.ticket}.${tableNames.status}_id`,
          to: `${tableNames.status}.id`,
        },
      },
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: `${tableNames.ticket}.id`,
          to: `${tableNames.comment}.${tableNames.ticket}_id`,
        },
      },
    };
  }
}

module.exports = Ticket;
