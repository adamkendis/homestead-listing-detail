const faker = require('faker');

faker.random.core = function randomCoreAmenities() {
  const amenities = [];

  for (let i = 0; i < 6; i += 1) {
    const rand = Math.floor(Math.random() * 9) + 1;
    if (amenities.includes(rand)) {
      i -= 1;
    } else {
      amenities.push(rand);
    }
  }
  return amenities;
};

faker.random.amenities = function randomAmenities() {
  const amenities = [];

  const randomMinMax = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // random number of basic amenities between 4 and 8
  const basicRand = randomMinMax(4, 8);
  for (let i = 0; i < basicRand; i += 1) {
    // random integer associated with a basic amenity (1 - 8)
    const rand = Math.floor(Math.random() * 8) + 1;
    // if specific amenity is already in amenities array, don't add it again
    if (amenities.includes(rand)) {
      i -= 1;
    } else {
      // if specific amenity is not in amenities, add it
      amenities.push(rand);
    }
  }

  const facilsRand = randomMinMax(2, 4);
  for (let i = 0; i < facilsRand; i += 1) {
    const rand = randomMinMax(9, 12);
    if (amenities.includes(rand)) {
      i -= 1;
    } else {
      amenities.push(rand);
    }
  }

  const diningRand = randomMinMax(3, 6);
  for (let i = 0; i < diningRand; i += 1) {
    const rand = randomMinMax(12, 18);
    if (amenities.includes(rand)) {
      i -= 1;
    } else {
      amenities.push(rand);
    }
  }

  const logisticsRand = randomMinMax(1, 2);
  for (let i = 0; i < logisticsRand; i += 1) {
    const rand = randomMinMax(19, 20);
    if (amenities.includes(rand)) {
      i -= 1;
    } else {
      amenities.push(rand);
    }
  }

  const bedBathRand = randomMinMax(3, 5);
  for (let i = 0; i < bedBathRand; i += 1) {
    const rand = randomMinMax(21, 25);
    if (amenities.includes(rand)) {
      i -= 1;
    } else {
      amenities.push(rand);
    }
  }

  const safetyRand = randomMinMax(2, 4);
  for (let i = 0; i < safetyRand; i += 1) {
    const rand = randomMinMax(26, 29);
    if (amenities.includes(rand)) {
      i -= 1;
    } else {
      amenities.push(rand);
    }
  }

  return amenities.sort((a, b) => a - b);
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
    coreAmenities: faker.random.core(),
    amenities: faker.random.amenities(),
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