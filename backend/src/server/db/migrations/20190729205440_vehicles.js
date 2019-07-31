
exports.up = function (knex) {
  return knex.schema.createTable('vehicles', (table) => {
    table.increments().primary();
    table.string('name').notNullable();
    table.string('manufacturer').notNullable();
    table.integer('year');
    table.text('description');
    table.boolean('sold').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('vehicles');
};
