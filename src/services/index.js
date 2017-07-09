const fooditems = require('./fooditems/fooditems.service.js');
const users = require('./users/users.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(fooditems);
  app.configure(users);
};
