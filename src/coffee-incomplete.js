export function calcCoffeeIngredient(coffeeName, cup = 1) {
  let espresso, water;

  if (coffeeName === 'espresso') {
    espresso = 30 * cup;
    return { espresso };
  }

  if (coffeeName === 'americano') {
    espresso = 30 * cup; water = 70 * cup;
    return { espresso, water };
  }

  return {};
}

export function isValidCoffee(name) {
  return ['espresso', 'americano', 'mocha'].includes(name);
}