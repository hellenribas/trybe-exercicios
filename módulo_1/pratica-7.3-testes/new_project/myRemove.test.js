const myRemove = require('./myRemove');

test('verify return array', () => {
  expect((myRemove([1,2,3,4], 3))).toEqual([1,2,4]);
})


test('verify not return first array', () => {
  expect((myRemove([1,2,3,4], 3))).not.toEqual([1,2,3,4]);
})


test('verify return array', () => {
  expect((myRemove([1,2,3,4], 5))).toEqual([1,2,3,4]);
})