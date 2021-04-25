const { queryString, parser } = require('./queryString');

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

describe('', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Jamessom&surname=Queiroz';

    expect(parser(qs)).toEqual({
      name: 'Jamessom',
      surname: 'Queiroz',
    });
  });

  it('should convert a query string of a single key-value pair to object', () => {
    const qs = 'name=Jamessom';

    expect(parser(qs)).toEqual({
      name: 'Jamessom',
    });
  });

  it('should convert a query string to object takin care of comma separated values', () => {
    const qs = 'name=Jamessom&surname=Queiroz&families=Queiroz,Chaves,Ribeiro';

    expect(parser(qs)).toEqual({
      name: 'Jamessom',
      surname: 'Queiroz',
      families: ['Queiroz', 'Chaves', 'Ribeiro'],
    });
  });
});
