import { describe, expect, it } from 'vitest';
import { calcCoffeeIngredient } from '../src/coffee-incomplete';

describe('Coffee', () => {
  it('should have espresso', () => {
    const result = calcCoffeeIngredient('espresso', 2);
    expect(result).to.deep.equal({ espresso: 60 });
  });

  it('should have nothing', () => {
    const result = calcCoffeeIngredient('unknown');
    expect(result).to.deep.equal({});
  });
});
