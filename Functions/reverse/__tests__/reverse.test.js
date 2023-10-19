
import reverse from '../reverse.js';

test('solution', () => {
  expect(reverse('cat')).toBe('tac');
  expect(reverse('tac')).toBe('cat');
  expect(reverse('')).toBe('');
  expect(reverse('aaaa')).toBe('aaaa');
});
