function myObject() {
  "use strict";
  const MATH_CONSTANTS = {
    E: 2.71828,
  };
  Object.freeze(MATH_CONSTANTS);
  // only change code below this line

  // only change code above this line
  try {
    MATH_CONSTANTS.E = 23;
  } catch (error) {
    console.log(error.message);
  }

  return MATH_CONTANTS.E;
}
const E = myObject;
console.log(E);
module.exports = myObject;
