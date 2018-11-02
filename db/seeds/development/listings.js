const faker = require('faker');

faker.random.array = function randomNumsArray() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arr = [];
  const random = Math.floor(Math.random() * nums.length);
  for (let i = 0; i < random; i += 1) {
    const index = Math.floor(Math.random() * nums.length);
    arr.push(nums[index]);
  }
  return arr;
};

const createRecord = (knex, id) => {
  return knex('listings').insert({
    id,
    type: faker.lorem.word().toUpperCase(),
    title: faker.lorem.sentence(),
    city: faker.address.city(),
    numGuests: faker.random.number({ min: 1, max: 4 }),
    numRooms: faker.random.number({ min: 1, max: 4 }),
    numBeds: faker.random.number({ min: 1, max: 4 }),
    numBaths: faker.random.number({ min: 1, max: 2 }),
    hostImg: faker.image.imageUrl(),
    hostName: faker.name.findName(),
    highlights: faker.lorem.paragraph(),
    lede: faker.lorem.paragraph(),
    space: faker.lorem.paragraph(),
    guestAccess: faker.lorem.sentence(),
    guestInter: faker.lorem.sentence(),
    otherNotes: faker.lorem.paragraph(),
    amenities: faker.random.array(),
  });
};

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      const rows = [];

      for (let i = 0; i < 100; i++) {
        rows.push(createRecord(knex, i))
      }

      return Promise.all(rows);
    });
};