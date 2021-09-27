let myName;
let message;

myName = "Pawdawns";
function myMsg(name) {
  "use strict";
  message = "Hello, " + name + "!";

  return message;
}
console.log(myMsg(myName));
module.exports = myMsg;
