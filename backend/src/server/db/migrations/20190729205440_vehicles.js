
exports.up = function (knex, Promise) {
  return knex.schema.createTable('vehicles', (table) => {
    table.increments();
    table.string('vehicle').notNullable().unique();
    table.string('manufacturer').notNullable();
    table.string('fipe_code').notNullable();
    table.boolean('sold').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('vehicles');
};
