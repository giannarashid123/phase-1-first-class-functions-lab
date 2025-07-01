// 1. Return first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array of functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Higher-order function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. Fare doubler
const fareDoubler = createFareMultiplier(2);

// 6. Fare tripler
const fareTripler = createFareMultiplier(3);

// 7. Select different drivers
function selectDifferentDrivers(drivers, returnFunction) {
  return returnFunction(drivers);
}

// ----------------------
// Example/Test Usage
// ----------------------
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log("First two drivers:", returnFirstTwoDrivers(drivers));
// Output: ['Antonia', 'Nuru']

console.log("Last two drivers:", returnLastTwoDrivers(drivers));
// Output: ['Amari', 'Mo']

console.log("Using selectingDrivers[0]:", selectingDrivers[0](drivers));
// Output: ['Antonia', 'Nuru']

console.log("Using selectingDrivers[1]:", selectingDrivers[1](drivers));
// Output: ['Amari', 'Mo']

console.log("Fare Doubled (10):", fareDoubler(10));
// Output: 20

console.log("Fare Tripled (10):", fareTripler(10));
// Output: 30

console.log("Select first two using selectDifferentDrivers():", selectDifferentDrivers(drivers, returnFirstTwoDrivers));
// Output: ['Antonia', 'Nuru']

console.log("Select last two using selectDifferentDrivers():", selectDifferentDrivers(drivers, returnLastTwoDrivers));
// Output: ['Amari', 'Mo']
