const knex = require('../connection');

function getAll() {
  return knex('vehicles')
    .select('*');
}

module.exports = {
  getAll
};
