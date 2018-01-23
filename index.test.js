const scoreCalc = require('./index');

describe('testing scoreCalc without a strike or spare', () => {
  test('Passing 1 and 2 as points in alternating shots, expected output: 30', () => {
    expect(scoreCalc([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2])).toBe(30);
  });

  test('Passing 3,4,5,3,2,2,4,3,7,0,8,0,0,4,2,3,4,2,1,1, expected output: 55', () => {
    expect(scoreCalc([3, 4, 5, 3, 2, 2, 4, 3, 7, 0, 8, 0, 0, 4, 2, 3, 4, 2, 1, 1])).toBe(58);
  });
});

describe('testing scoreCalc with a strike or spare but not in the last frame', () => {
  test('Passing 10, 1, 2, 8, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, expected output: 48', () => {
    expect(scoreCalc([10, 1, 2, 8, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2])).toBe(48);
  });
});

describe('testing scoreCalc with a strike or spare in the last frame', () => {
  test('Passing 10, 1, 2, 8, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 10,1,2, expected output: 48', () => {
    expect(scoreCalc([10, 1, 2, 8, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 10, 1, 2])).toBe(58);
  });
  test('Passing 10, 1, 2, 8, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 8,2,2, expected output: 48', () => {
    expect(scoreCalc([10, 1, 2, 8, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 8, 2, 2])).toBe(57);
  });
});
