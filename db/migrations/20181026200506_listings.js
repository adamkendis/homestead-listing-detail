
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('listings', (table) => {
      table.increments('id').primary();
      table.text('type');
      table.text('title');
      table.text('city');
      table.integer('numGuests');
      table.integer('numRooms');
      table.integer('numBeds');
      table.integer('numBaths');
      table.text('hostImg');
      table.text('hostName');
      table.text('highlights');
      table.text('lede');
      table.text('space');
      table.text('guestAccess');
      table.text('guestInter');
      table.text('otherNotes');
      table.specificType('amenities', 'INT[]');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('listings')
  ]);
};
