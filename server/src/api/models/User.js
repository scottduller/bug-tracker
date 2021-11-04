/* eslint-disable global-require */
const { Model } = require('objection');

const tableNames = require('../../constants/tableNames');

class User extends Model {
  static get tableName() {
    return tableNames.user;
  }

  static get relationMappings() {
    const Organisation = require('./Organisation');
    const Project = require('./Project');
    const Ticket = require('./Ticket');
    const Comment = require('./Comment');

    return {
      organisations_owned: {
        relation: Model.HasManyRelation,
        modelClass: Organisation,
        join: {
          from: `${tableNames.user}.id`,
          to: `${tableNames.organisation}.owner_id`,
        },
      },

      projects_owned: {
        relation: Model.HasManyRelation,
        modelClass: Project,
        join: {
          from: `${tableNames.user}.id`,
          to: `${tableNames.project}.owner_id`,
        },
      },

      tickets_owned: {
        relation: Model.HasManyRelation,
        modelClass: Ticket,
        join: {
          from: `${tableNames.user}.id`,
          to: `${tableNames.ticket}.owner_id`,
        },
      },

      comments_owned: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: `${tableNames.user}.id`,
          to: `${tableNames.ticket}.owner_id`,
        },
      },

      organisations: {
        relation: Model.ManyToManyRelation,
        modelClass: Organisation,
        join: {
          from: `${tableNames.user}.id`,
          through: {
            from: `${tableNames.user}_${tableNames.organisation}.${tableNames.user}_id`,
            to: `${tableNames.user}_${tableNames.organisation}.${tableNames.organisation}_id`,
          },
          to: `${tableNames.organisation}.id`,
        },
      },

      projects: {
        relation: Model.ManyToManyRelation,
        modelClass: Project,
        join: {
          from: `${tableNames.user}.id`,
          through: {
            from: `${tableNames.user}_${tableNames.project}.${tableNames.user}_id`,
            to: `${tableNames.user}_${tableNames.project}.${tableNames.project}_id`,
          },
          to: `${tableNames.project}.id`,
        },
      },
    };
  }
}

module.exports = User;
