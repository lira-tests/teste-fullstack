const knex = require('../connection');

function getAll() {
  return knex('vehicles')
    .select('*');
}

function getById(id) {
  return knex('vehicles')
    .select('*')
    .where({ id: parseInt(id) });
}

function add(vehicle) {
  return knex('vehicles')
    .insert(vehicle);
}

function update(id, vehicle) {
  return knex('vehicles')
    .update(vehicle)
    .where({ id: parseInt(id) });
}

function remove(id) {
  return knex('vehicles')
    .del()
    .where({ id: parseInt(id) });
}

function getByName(name) {
  return knex('vehicles')
    .select('*')
    .where('name', 'like', `%${name}%`);
}

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
  getByName
};
