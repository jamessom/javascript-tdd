const { queryString } = require('./queryString');

describe('Object to queryString', () => {
  it('should create a valid query string when an object is provided', () => {
    const testObject = {
      name: 'Jamessom',
      surname: 'Queiroz',
    };

    expect(queryString(testObject)).toBe('name=Jamessom&surname=Queiroz');

    expect(queryString(testObject)).not.toBe('name:Jamessom&surname:Queiroz');
  });
});
