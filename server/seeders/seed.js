const db = require('../config/connection');
const { Stock } = require('../models');

db.once('open', async () => {
    try {
      await Stock.deleteMany({});
   
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });