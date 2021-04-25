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

  it('should create a valid query string even when an arrays is passed as value', () => {
    const testObject = {
      name: 'Jamessom',
      surname: 'Queiroz',
      families: ['Queiroz', 'Chaves', 'Ribeiro'],
    };

    expect(queryString(testObject)).toBe(
      'name=Jamessom&surname=Queiroz&families=Queiroz,Chaves,Ribeiro',
    );
    expect(queryString(testObject)).not.toBe('name:Jamessom&surname:Queiroz');
  });

  it('should throw an error when an object is passed as a value', () => {
    const testObject = {
      name: 'Jamessom',
      surname: 'Queiroz',
      families: {
        first: 'Queiroz',
        second: 'Chaves',
        third: 'Ribeiro',
      },
    };

    expect(() => {
      queryString(testObject);
    }).toThrowError();

    expect(() => {
      queryString({
        name: 'Jamessom',
        surname: 'Queiroz',
        families: [],
      });
    }).not.toThrowError();
  });
});
