
import solution from '../solution.js';

test('solution', () => {
  expect(solution(0)).toBe(0);
  expect(solution(10)).toBe(250);
  expect(solution(12)).toBe(432);
  expect(solution(14)).toBe(686);
});
