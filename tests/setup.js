jest.setTimeout(30000);

require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;

beforeAll(() => {
  mongoose.connect(keys.mongoURI, { useMongoClient: true });
});

afterAll(() => mongoose.disconnect());
