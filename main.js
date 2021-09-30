/**
 * @typedef {import('./typings').Car} Car
 * @typedef {import('./typings').Driver} Driver
 */

const formatCar = require("./utils");

/**
 * @type {Driver}
 */
const peter = {
    age: 30,
    name: 'Peter Arbeitsloser'
}

/**
 * @type {Car}
 */
const fordMustang = {
    driver: peter,
    name: 'Mustang',
    manufacturer: 'Ford',
    maxSpeed: 220,
    weight: 2300,
    wheels: 4
}

/**
 *
 * @param {Car} car
 * @return {Driver}
 */
const printCarsNameAndReturnDriver = (car) => {
    console.log('Cars name is', car.name);
    return car.driver;
}

const res = printCarsNameAndReturnDriver(fordMustang);
if (res.name === 'peter') {
    console.log('JSDoc rocks!');
}

console.log(formatCar({
    driver: peter, name: 'SLS 400', maxSpeed: 40,
    wheels: 3, weight: 312, manufacturer: 'AMG'
}));

