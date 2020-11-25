const { connect } = require('mongoose');

const options = { useNewUrlParser: true, useUnifiedTopology: true };
connect(process.env.MONGOURI, options)
  .then((res) => console.log('connected to mongo'))
  .catch((error) => console.error(error));
