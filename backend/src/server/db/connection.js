const environment = process.env.NODE_ENV || 'development';
const config = require('../../../knexfile.js')[environment];
const {attachOnDuplicateUpdate} = require('knex-on-duplicate-update');
attachOnDuplicateUpdate();

module.exports = require('knex')(config);
