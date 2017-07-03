// Initializes the `fooditems` service on path `/fooditems`
const createService = require('feathers-mongoose');
const createModel = require('../../models/fooditems.model');
const hooks = require('./fooditems.hooks');
const filters = require('./fooditems.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'fooditems',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/fooditems', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('fooditems');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
