const faker = require('faker');

const randomMinMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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

faker.random.highlights = function fakerHighlights() {
  const highlights = [];
  const numHighlights = randomMinMax(1, 3);
  for (let i = 0; i < numHighlights; i += 1) {
    const rand = Math.floor(Math.random() * 5) + 1;
    if (highlights.includes(rand)) {
      i -= 1;
    } else {
      highlights.push(rand);
    }
  }
  return highlights;
};

const hostImages = [
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/achievement-adult-business-937481.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adolescent-adult-business-1036627.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-apparel-art-795970.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-art-beard-1089038.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-art-camera-381843.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-background-beard-716658.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-beach-beard-736716.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-beard-blur-713520.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-beard-boy-220453.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-beard-boy-903661.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-beard-close-up-1008973.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-black-background-businessman-262391.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-blur-city-936043.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-bokeh-daylight-1182238.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-candid-cool-45882.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-close-up-eyeglasses-997512.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-confidence-elderly-man-1139743.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/age-angry-elderly-6110.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/artist-elderly-glasses-25758.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/beard-male-man-35065.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/black-and-white-fun-happy-91227.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/bokeh-man-person-905470.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/boy-bright-close-up-792326.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/face-facial-hair-fine-looking-614810.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/adolescent-adult-beautiful-726162.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/adult-attractive-beautiful-1005399.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/adult-attractive-beautiful-415829.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/adult-attractive-beautiful-871495.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/adult-autumn-autumnal-712413.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/adult-beautiful-brunette-1384956.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/adult-beautiful-casual-372042.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/adult-beautiful-close-up-773371.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/adult-beauty-blur-598745.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/adult-elder-elderly-432722.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/angry-beauty-blur-206481.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/attractive-beautiful-casual-1197132.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/beautiful-beauty-black-and-white-157661.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/beautiful-beauty-brazilian-woman-1102341.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/beautiful-beauty-casual-762020.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/beautiful-blur-bokeh-573305.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/beautiful-brunette-cute-774909.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/beautiful-brunette-female-70354.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/crazy-cute-eyes-4636.jpg',
  'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/f/fashion-female-girl-69494.jpg',
];

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
    hostImg: hostImages[randomMinMax(0, hostImages.length - 1)],
    hostName: faker.fake('{{name.firstName}}'),
    highlights: faker.random.highlights(),
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

      for (let i = 0; i < 101; i++) {
        rows.push(createRecord(knex, i))
      }

      return Promise.all(rows);
    });
};