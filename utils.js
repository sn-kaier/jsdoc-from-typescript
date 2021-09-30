/**
 *  @typedef {import('./typings').Car} Car
 */

/**
 * Format a car into an human readable string
 * @param {Car} car
 * @return {string}
 */
const formatCar = (car) => {
    return `A car named ${car.name} with ${car.wheels} wheels owned by ${car.driver.name} (${car.driver.age})`;
}

module.exports = formatCar;
