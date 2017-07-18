const { authenticate } = require('feathers-authentication').hooks;
const { restrictToOwner, associateCurrentUser, restrictToAuthenticated } = require('feathers-authentication-hooks');
const { populate } = require('feathers-hooks-common');



const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    ownerField: 'authorId'
  })
];

const authorSchema = {
  include: {
    service: 'users',
    nameAs: 'author',
    parentField: 'authorId',
    childField: '_id'
  }
};

module.exports = {
  before: {
    all: [],
    find: [
      ...restrict
    ],
    get: [
    ],
    create: [
      authenticate('jwt'),
      restrictToAuthenticated(),
      associateCurrentUser({ as: 'authorId' }),
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [
      populate({ schema: authorSchema })
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
