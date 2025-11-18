import {sum} from './sum.js';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 5)).toBe(7);
    expect(sum(0, 0)).toBe(0);
});

// console.log(sum(1, 2))