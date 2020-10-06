const argv = require('minimist')(process.argv.slice(2));
const caesar = require('./src/caesar');
const io = require('./src/io');
const validation = require('./src/validation');
const pathing = require('./src/pathing');

const bigO = {
  action: undefined, // required
  shift: undefined, // required
  input: undefined,  
  output: undefined 
};

function main() {
  bigO.action = argv.action ? argv.action : argv.a; // encode/decode
  bigO.shift = argv.shift ? argv.shift : argv.s; // number
  bigO.input = argv.input ? argv.input : argv.i;  
  bigO.output = argv.output ? argv.output : argv.o; 

  validation.validateInput(bigO.action, "action"); 
  validation.validateInput(bigO.input, "input", false);
  validation.validateInput(bigO.output, "output", false);

  validation.validateAction(bigO.action, 'action');
  validation.validateShift(bigO.shift, 'shift');
  
  bigO.input = pathing.resolve(bigO.input);
  bigO.output = pathing.resolve(bigO.output);

  io.transformText(bigO, caesar);
}


main();


