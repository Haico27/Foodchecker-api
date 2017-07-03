const assert = require('assert');
const app = require('../../src/app');

describe('\'fooditems\' service', () => {
  it('registered the service', () => {
    const service = app.service('fooditems');

    assert.ok(service, 'Registered the service');
  });
});
