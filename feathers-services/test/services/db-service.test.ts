import app from '../../src/app';

describe('\'db-service\' service', () => {
  it('registered the service', () => {
    const service = app.service('db-service');
    expect(service).toBeTruthy();
  });
});
