/* eslint-disable global-require */
const { Model } = require('objection');

const tableNames = require('../../constants/tableNames');

class Status extends Model {
  static get tableName() {
    return tableNames.status;
  }

  static get relationMappings() {
    const Organisation = require('./Organisation');
    const Project = require('./Project');
    const Ticket = require('./Ticket');

    return {
      organisation: {
        relation: Model.BelongsToOneRelation,
        modelClass: Organisation,
        join: {
          from: `${tableNames.status}.${tableNames.organisation}_id`,
          to: `${tableNames.organisation}.id`,
        },
      },
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: Project,
        join: {
          from: `${tableNames.status}.${tableNames.project}_id`,
          to: `${tableNames.project}.id`,
        },
      },
      tickets: {
        relation: Model.HasManyRelation,
        modelClass: Ticket,
        join: {
          from: `${tableNames.status}.id`,
          to: `${tableNames.ticket}.${tableNames.status}_id`,
        },
      },
    };
  }
}

module.exports = Status;
