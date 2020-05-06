const mongoose = require('mongoose');

const urlMongo = 'mongodb://heroku_k692z3pp:9vrbqaerehk3liodidundjpn8p@ds233198.mlab.com:33198/heroku_k692z3pp';

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(urlMongo, config);