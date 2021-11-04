/* eslint-disable global-require */
const { Model } = require('objection');

const tableNames = require('../../constants/tableNames');

class Comment extends Model {
  static get tableName() {
    return tableNames.comment;
  }

  static get relationMappings() {
    const User = require('./User');
    const Ticket = require('./Ticket');

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
      children: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: `${tableNames.comment}.id`,
          to: `${tableNames.comment}.parent_id`,
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
    };
  }
}

module.exports = Comment;
