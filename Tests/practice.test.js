//const { sum, subtract } = require('../index');

import { subtract, sum } from '../index'

test('sum 1 + 2 equal 3', () => {
    expect(sum(1, 4)).toBe(5);
});

test('difference 5 - 4 equal 1', () => {
    expect(subtract(5, 4)).toBe(1);
});