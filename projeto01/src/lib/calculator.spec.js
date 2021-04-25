import { sum, subtract } from './calculator';

describe('when sum is called', () => {
  it('should sum 2 and 2 and result must be 4', () => {
    expect(sum(2, 2)).toBe(4);
    expect(sum(2, 2)).not.toBe(22);
  });

  it('should sum 2 and 2 and even if one of then is a string the result must be 4', () => {
    expect(sum('2', 2)).toBe(4);
    expect(sum('2', 2)).not.toBe(22);
  });

  it('should throw an error if what is provided to the method cannot be summed', () => {
    expect(() => sum('', 2)).toThrowError();
    expect(() => sum([2, 2])).toThrowError();
    expect(() => sum({})).toThrowError();
    expect(() => sum()).toThrowError();
  });
});

describe('when subtraction is called', () => {
  it('should 5 subtract 3 and the result must be 2', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(5, 3)).not.toBe(4);
  });

  it('should 5 subtract 3 and even if one then is a string the result must be 2', () => {
    expect(subtract('5', 3)).toBe(2);
    expect(subtract('5', 3)).not.toBe(4);
  });

  it('should throw an error if what is provided to the method cannot be subtracted', () => {
    expect(() => subtract('', 2)).toThrowError();
    expect(() => subtract([2, 2])).toThrowError();
    expect(() => subtract({})).toThrowError();
    expect(() => subtract()).toThrowError();
  });
});
