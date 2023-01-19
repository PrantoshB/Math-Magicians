import operate from '../logic/operate';

describe('Testing addition', () => {
  test('sum of 2 and 3 should return 5', () => {
    const sum = operate('2', '3', '+');
    expect(sum).toBe('5');
  });
});
describe('Testing addition of negative numbers', () => {
  test('sum of -5 and -3 should return -8', () => {
    const sum = operate('-5', '-3', '+');
    expect(sum).toBe('-8');
  });
});
describe('Testing multiplication', () => {
  test('product of 41 and 5 should return 205', () => {
    const product = operate('41', '5', '×');
    expect(product).toBe('205');
  });
});
describe('Testing division', () => {
  test('when 55 is divided by 11, it should return 5', () => {
    const division = operate('55', '11', '÷');
    expect(division).toBe('5');
  });
  test('when 5 is divided by 0, it should throw error', () => {
    const division = operate('5', '0', '÷');
    expect(division).toEqual('Can\'t divide by 0.');
  });
});

describe('Testing difference', () => {
  test('difference of 55 and 34 should return 21', () => {
    const subtract = operate('55', '34', '-');
    expect(subtract).toBe('21');
  });
});

describe('Testing modulo', () => {
  test('when 10 is divided by 3, modulo should be 1', () => {
    const modulo = operate('10', '3', '%');
    expect(modulo).toBe('1');
  });
});
