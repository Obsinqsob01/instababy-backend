require('dotenv').config();
const { app, PORT } = require('./src/api');
require('./src/utils/mongoClient');

app.listen(PORT, () => {
  console.log(`Server running at :${PORT}`);
});
