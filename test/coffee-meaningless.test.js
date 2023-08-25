import { describe, expect, it } from 'vitest';
import { calcCoffeeIngredient, isValidCoffee } from '../src/coffee-meaningless';

describe('Warning: Do not do this', () => {
  it('is meaningless', () => {
    calcCoffeeIngredient('espresso', 2);
    calcCoffeeIngredient('americano');
    calcCoffeeIngredient('unknown');
    isValidCoffee('mocha');
    expect(true).toBe(true); // not meaningful assertion
  });
});
