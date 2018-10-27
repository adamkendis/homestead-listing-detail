var faker = require('faker');

faker.random.array = function randomNumsArray(min, max) {
  var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let arr = [];
  let random = Math.floor(Math.random() * nums.length);
  for (let i = 0; i < random; i++) {
    var index = Math.floor(Math.random() * nums.length);
    arr.push(nums[index]);
  }
  return arr;
}

let createRecord = (knex, id) => {
  return knex('listings').insert({
    id,
    type: faker.lorem.sentence({num: 2}),
    title: faker.lorem.sentence({num: 7}),
    city: faker.address.city(),
    numGuests: faker.random.number({ min: 1, max: 4}),
    numRooms: faker.random.number({ min: 1, max: 4}),
    numBeds: faker.random.number({ min: 1, max: 4}),
    numBaths: faker.random.number({ min: 1, max: 2}),
    hostImg: faker.image.imageUrl(),
    hostName: faker.name.findName(),
    highlights: faker.lorem.paragraph(),
    lede: faker.lorem.paragraph(),
    space: faker.lorem.paragraph(),
    guestAccess: faker.lorem.sentence(),
    guestInter: faker.lorem.sentence(),
    otherNotes: faker.lorem.paragraph(),
    amenities: faker.random.array()
  })
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      let rows = [];

      for (let i = 0; i < 100; i++) {
        rows.push(createRecord(knex, i))
      }

      return Promise.all(rows);
    });
};