import { describe, expect, it } from 'vitest';
import { calcCoffeeIngredient } from '../src/coffee-complete';

describe('Coffee', () => {
  it('should have espresso', () => {
    const result = calcCoffeeIngredient('espresso', 2);
    expect(result).to.deep.equal({ espresso: 60 });
  });

  it('should have americano', () => {
    const result = calcCoffeeIngredient('americano');
    expect(result.espresso).to.equal(30);
    expect(result.water).to.equal(70);
  });

  it('should throw error', () => {
    const func = () => calcCoffeeIngredient('mocha');
    expect(func).toThrowError(new Error('mocha not found'));
  });

  it('should have nothing', () => {
    const result = calcCoffeeIngredient('unknown')
    expect(result).to.deep.equal({});
  });
});
