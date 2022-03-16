/* eslint-disable global-require */
const { Model } = require('objection');

const schema = require('./comments.schema.json');
const tableNames = require('../../constants/tableNames');

class Comment extends Model {
  static get tableName() {
    return tableNames.comment;
  }

  static get jsonSchema() {
    return schema;
  }

  static get relationMappings() {
    const User = require('../users/users.model');
    const Ticket = require('../tickets/tickets.model');

    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: `${tableNames.comment}.owner_id`,
          to: `${tableNames.user}.id`,
        },
      },
      ticket: {
        relation: Model.BelongsToOneRelation,
        modelClass: Ticket,
        join: {
          from: `${tableNames.comment}.${tableNames.ticket}_id`,
          to: `${tableNames.ticket}.id`,
        },
      },
      parent: {
        relation: Model.BelongsToOneRelation,
        modelClass: Comment,
        join: {
          from: `${tableNames.comment}.parent_id`,
          to: `${tableNames.comment}.id`,
        },
      },
      children: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: `${tableNames.comment}.id`,
          to: `${tableNames.comment}.parent_id`,
        },
      },
    };
  }
}

module.exports = Comment;
